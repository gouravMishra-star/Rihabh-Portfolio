import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { NextRequest } from "next/server";
import { POST } from "./route";

function makeRequest(body: Record<string, unknown>) {
  return new NextRequest("http://localhost:3000/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

describe("POST /api/send-email", () => {
  const originalEnv = { ...process.env };
  const fetchMock = vi.fn();

  beforeEach(() => {
    process.env.EMAILJS_SERVICE_ID = "service_test";
    process.env.EMAILJS_TEMPLATE_ID = "template_test";
    process.env.EMAILJS_PUBLIC_KEY = "public_test";
    process.env.EMAILJS_PRIVATE_KEY = "private_test";
    vi.stubGlobal("fetch", fetchMock);
    fetchMock.mockReset();
  });

  afterEach(() => {
    process.env = { ...originalEnv };
    vi.unstubAllGlobals();
  });

  it("rejects spam when honeypot is filled", async () => {
    const res = await POST(
      makeRequest({
        name: "Bot",
        email: "bot@example.com",
        message: "This is a spam message that is longer than thirty characters.",
        honeypot: "gotcha",
      })
    );

    expect(res.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("returns 500 when EmailJS env config is missing", async () => {
    delete process.env.EMAILJS_PRIVATE_KEY;

    const res = await POST(
      makeRequest({
        name: "Alice",
        email: "alice@example.com",
        message: "Looking for a 3D product animation for our upcoming launch.",
      })
    );

    expect(res.status).toBe(500);
    const data = await res.json();
    expect(data.error).toBe("Missing EmailJS configuration");
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("sends the expected EmailJS payload and template_params", async () => {
    fetchMock.mockResolvedValueOnce(new Response("OK", { status: 200 }));

    const res = await POST(
      makeRequest({
        name: "  Alex Rivera  ",
        email: "alex@studio.io",
        projectType: "motion-design",
        timeline: "2 weeks",
        message: "We need a 45-second motion design piece for our product launch.",
        honeypot: "",
      })
    );

    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json).toEqual({ success: true, message: "OK" });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.emailjs.com/api/v1.0/email/send");
    expect(init.method).toBe("POST");

    const sentBody = JSON.parse(init.body as string);
    expect(sentBody.service_id).toBe("service_test");
    expect(sentBody.template_id).toBe("template_test");
    expect(sentBody.user_id).toBe("public_test");
    expect(sentBody.accessToken).toBe("private_test");
    expect(sentBody.template_params).toMatchObject({
      name: "Alex Rivera",
      email: "alex@studio.io",
      project_type: "Motion Design",
      timeline: "2 weeks",
      message: "We need a 45-second motion design piece for our product launch.",
    });
    expect(typeof sentBody.template_params.time).toBe("string");
    expect(sentBody.template_params.time.length).toBeGreaterThan(0);
  });

  it("propagates EmailJS error responses", async () => {
    fetchMock.mockResolvedValueOnce(
      new Response("The public key is invalid", { status: 400 })
    );

    const res = await POST(
      makeRequest({
        name: "Alex",
        email: "alex@studio.io",
        message: "We need a 45-second motion design piece for our product launch.",
      })
    );

    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json.error).toBe("The public key is invalid");
  });
});

