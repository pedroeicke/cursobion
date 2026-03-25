"use client";

import { useEffect, useRef } from "react";

export default function MouseSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -500, y: -500 });
  const target = useRef({ x: -500, y: -500 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;
      if (spotRef.current) {
        spotRef.current.style.transform = `translate(${pos.current.x - 200}px, ${pos.current.y - 200}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={spotRef}
      className="pointer-events-none fixed left-0 top-0 z-[2] hidden h-[400px] w-[400px] rounded-full md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(200,160,74,0.06) 0%, rgba(200,160,74,0.02) 40%, transparent 70%)",
        willChange: "transform",
      }}
      aria-hidden="true"
    />
  );
}
