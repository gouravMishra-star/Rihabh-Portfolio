"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence  } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function JumpToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <m.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-[#060912]/90 border border-white/15 hover:border-cyan-300/45 hover:bg-cyan-400/15 text-cyan-200 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={20} />
        </m.button>
      )}
    </AnimatePresence>
  );
}
