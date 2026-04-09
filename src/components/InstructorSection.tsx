"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { INSTRUCTOR } from "@/lib/constants";

const BIO_TEXT = [
  "Meu nome é Rafael Bion, tenho 36 anos, sou natural de São José, Santa Catarina, na Grande Florianópolis. Sou casado, cristão, apaixonado por pessoas e, há mais de 10 anos, dedico minha vida profissional a transformar histórias através da prótese capilar.",
  "Ao longo dessa jornada, tive o privilégio de acompanhar algo que vai muito além da estética. Eu vi homens que não se olhavam mais no espelho voltarem a sorrir. Vi pessoas recuperarem sua confiança, sua postura e sua autoestima. E foi nesse processo que entendi que trabalhar com prótese capilar não é apenas aplicar cabelo — é devolver identidade e segurança para alguém.",
  "Durante esses anos, atendi centenas de clientes, aperfeiçoei técnicas e vivi de perto o impacto que essa profissão pode gerar. Mas em determinado momento percebi algo ainda maior:",
  "esse conhecimento não poderia ficar só comigo.",
  "Hoje, minha missão é formar novos profissionais, ajudar barbeiros, cabeleiros e pessoas que desejam mudar de vida a entrar em um mercado que cresce cada vez mais e que tem o poder de transformar tanto quem recebe o serviço quanto quem trabalha com ele.",
  "A prótese capilar mudou a vida de muitos clientes meus — e eu acredito que ela também pode mudar a sua história profissional.",
  "Se você chegou até aqui, talvez não seja por acaso.\nTalvez seja o começo de uma nova fase na sua vida.\nE será uma honra caminhar com você nessa jornada.",
];

export default function InstructorSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="relative z-10 mx-auto max-w-[1070px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl border border-[#1c1c1c]"
        >
          {/* DESKTOP: text left + image right */}
          <div className="relative hidden md:flex" style={{ minHeight: "auto" }}>
            <div className="relative z-10 flex w-1/2 flex-col justify-center bg-[#0d0d0d] p-10">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Instrutor</p>
              <h2 className="mb-5 text-[clamp(22px,3vw,30px)] font-bold leading-[1.1] text-white">
                Quem será<br />seu professor?
              </h2>

              <div className="space-y-3">
                {BIO_TEXT.map((p, i) => (
                  <p
                    key={i}
                    className={`text-[13px] leading-[1.7] ${
                      i === 3 ? "font-bold text-gold" : "text-[#aaa]"
                    }`}
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-5 border-t border-[#1c1c1c] pt-4">
                <p className="text-sm font-bold text-white">Rafael Bion</p>
                <p className="text-[11px] text-gray-text">
                  Especialista em Prótese Capilar há mais de 10 anos
                </p>
              </div>
            </div>

            <div className="relative w-1/2">
              <Image
                src="/prof.png"
                alt={INSTRUCTOR.name}
                fill
                className="object-cover object-[center_25%]"
                sizes="535px"
                quality={90}
                style={{ transform: "scale(1.3)", transformOrigin: "center 25%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-transparent to-transparent" />
            </div>
          </div>

          {/* MOBILE: image on top, text below */}
          <div className="flex flex-col md:hidden">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/prof.png"
                alt={INSTRUCTOR.name}
                fill
                className="object-cover object-[center_20%]"
                sizes="100vw"
                quality={90}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
            </div>

            <div className="-mt-8 relative z-10 bg-[#0d0d0d] px-6 pb-6 pt-10 sm:px-8 sm:pb-8">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Instrutor</p>
              <h2 className="mb-5 text-[22px] font-bold leading-[1.1] text-white">
                Quem será<br />seu professor?
              </h2>

              <div className="space-y-3">
                {BIO_TEXT.map((p, i) => (
                  <p
                    key={i}
                    className={`text-[12px] leading-[1.7] ${
                      i === 3 ? "font-bold text-gold" : "text-[#aaa]"
                    }`}
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-5 border-t border-[#1c1c1c] pt-4">
                <p className="text-sm font-bold text-white">Rafael Bion</p>
                <p className="text-[11px] text-gray-text">
                  Especialista em Prótese Capilar há mais de 10 anos
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
