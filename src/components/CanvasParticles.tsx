"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  opacityDir: number;
  color: string;
  glow: number;
}

export default function CanvasParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];
    let w = 0;
    let h = 0;

    const colors = [
      "200,160,74",
      "232,201,106",
      "212,175,55",
      "180,140,60",
    ];

    function resize() {
      w = canvas!.width = window.innerWidth;
      h = canvas!.height = window.innerHeight;
    }

    function createParticles() {
      const count = Math.min(45, Math.floor((w * h) / 20000));
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: -Math.random() * 0.4 - 0.1,
          size: Math.random() * 2.5 + 1,
          opacity: Math.random() * 0.6 + 0.1,
          opacityDir: (Math.random() - 0.5) * 0.008,
          color: colors[Math.floor(Math.random() * colors.length)],
          glow: Math.random() * 15 + 5,
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        p.opacity += p.opacityDir;
        if (p.opacity > 0.8 || p.opacity < 0.05) {
          p.opacityDir *= -1;
        }

        if (p.y < -20) p.y = h + 20;
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;

        // Glow
        ctx!.save();
        ctx!.globalAlpha = p.opacity * 0.3;
        ctx!.shadowColor = `rgba(${p.color},${p.opacity})`;
        ctx!.shadowBlur = p.glow;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${p.color},${p.opacity * 0.4})`;
        ctx!.fill();
        ctx!.restore();

        // Core
        ctx!.save();
        ctx!.globalAlpha = p.opacity;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${p.color},${p.opacity})`;
        ctx!.fill();
        ctx!.restore();
      }
      animId = requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();

    const onResize = () => {
      resize();
      createParticles();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{ mixBlendMode: "screen", width: "100vw", height: "100vh" }}
      aria-hidden="true"
    />
  );
}
