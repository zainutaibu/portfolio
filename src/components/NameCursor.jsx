"use client";
import { useEffect, useState } from "react";

export default function NameCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] font-bold text-blue-400 text-lg select-none"
      style={{
        transform: `translate3d(${pos.x + 10}px, ${pos.y + 10}px, 0)`,
        transition: "transform 0.1s ease-out",
        textShadow: "0 0 10px rgba(59,130,246,0.7)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      Zainab Ali
    </div>
  );
}
