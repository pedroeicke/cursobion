"use client";

import Image from "next/image";

const COVERS = [
  "/capacurso/01.png",
  "/capacurso/02.png",
  "/capacurso/03.png",
  "/capacurso/04.png",
  "/capacurso/05.png",
];

export default function ModuleCarousel() {
  // Triple the array for seamless infinite scroll
  const items = [...COVERS, ...COVERS, ...COVERS];

  return (
    <section className="overflow-hidden py-6">
      <div className="scrollbar-hide w-full overflow-hidden">
        <div className="carousel-track">
          {items.map((src, i) => (
            <div
              key={i}
              className="relative w-[260px] flex-shrink-0 overflow-hidden rounded-2xl border border-dark-border"
              style={{ aspectRatio: "9/16" }}
            >
              <Image
                src={src}
                alt={`Módulo ${(i % COVERS.length) + 1}`}
                fill
                className="object-cover"
                sizes="260px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
