"use client";

import { useEffect, useState } from "react";
import { BiChevronUp } from "react-icons/bi";

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      title="Scroll to top"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`
        fixed bottom-6 right-6 z-50 bg-white
        flex items-center justify-center
        w-12 h-12 rounded-full 
        hover:bg-[#0ef] text-black font-bold
        shadow-lg shadow-blue-500/30
        transition-all duration-300 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}
      `}
    >
      <BiChevronUp className="w-10 h-10" aria-hidden="true" />
    </button>
  );
}