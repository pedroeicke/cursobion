"use client";

import Image from "next/image";

const COVERS = [
  "/capacurso/01_recepcao_e_preparacao_do_cliente.png.png",
  "/capacurso/02_delimitacao_da_area_da_protese.png.png",
  "/capacurso/03_molde_medidas_e_preparacao_da_protese.png",
  "/capacurso/04_fixacao_da_protese_capilar.png.png",
  "/capacurso/05_corte_e_personalizacao.png",
  "/capacurso/06_finalizacao_e_estilizacao.png",
  "/capacurso/07_orientacoes_ao_cliente.png",
  "/capacurso/9.png",
  "/capacurso/bonus_01_erros_mais_comuns.png.png",
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
              className="flex-shrink-0 overflow-hidden rounded-xl border border-[#1c1c1c]"
            >
              <Image
                src={src}
                alt={`Módulo ${(i % COVERS.length) + 1}`}
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-auto max-h-[420px]"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
