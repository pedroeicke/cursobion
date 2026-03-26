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
  const items = [...COVERS, ...COVERS, ...COVERS];

  return (
    <section className="overflow-hidden py-8">
      <div className="scrollbar-hide w-full overflow-hidden">
        <div className="carousel-track">
          {items.map((src, i) => (
            <div
              key={i}
              className="relative w-[240px] flex-shrink-0 overflow-hidden rounded-xl border border-[#1c1c1c]"
              style={{ aspectRatio: "9/16" }}
            >
              <Image
                src={src}
                alt={`Módulo ${(i % COVERS.length) + 1}`}
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
