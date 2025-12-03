"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "a Full Stack Developer",
        "a Front End Developer",
        "a Back End Developer",
        "a Mobile App Developer"
      ],
      typeSpeed: 100,
      backSpeed: 20,
      backDelay: 1000,
      loop: true
    });

    return () => typed.destroy();
  }, []);

  return <span className="text" ref={el}></span>;
}