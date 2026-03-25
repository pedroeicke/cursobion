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
    <section className="noise relative overflow-hidden py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-[1070px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[24px] border border-[#1f1f1f]"
        >
          {/* DESKTOP: text left + image right side by side */}
          <div className="relative hidden md:flex" style={{ minHeight: "auto" }}>
            {/* LEFT — text */}
            <div className="relative z-10 flex w-1/2 flex-col justify-center bg-[#0a0a0a] p-10">
              <h2 className="mb-5 text-[clamp(22px,3vw,32px)] font-bold italic leading-[1.1] text-white">
                Quem será<br />seu professor?
              </h2>

              <div className="space-y-3">
                {BIO_TEXT.map((p, i) => (
                  <p
                    key={i}
                    className={`text-[13px] leading-[1.7] ${
                      i === 3
                        ? "font-bold italic text-gold"
                        : "text-gray-light"
                    }`}
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Signature */}
              <div className="mt-5 border-t border-dark-border pt-4">
                <p className="text-sm font-bold text-white">Rafael Bion</p>
                <p className="text-[11px] text-gray-text">
                  Especialista em Prótese Capilar há mais de 10 anos
                </p>
              </div>
            </div>

            {/* RIGHT — image */}
            <div className="relative w-1/2">
              <Image
                src="/professor.png"
                alt={INSTRUCTOR.name}
                fill
                className="object-cover object-center"
                sizes="535px"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent" />
            </div>
          </div>

          {/* MOBILE: image on top, text below */}
          <div className="flex flex-col md:hidden">
            {/* Image — tall and prominent */}
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/professor.png"
                alt={INSTRUCTOR.name}
                fill
                className="object-cover object-top"
                sizes="100vw"
                quality={90}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
            </div>

            {/* Text — pushed down with negative margin to overlap image slightly */}
            <div className="-mt-8 relative z-10 bg-[#0a0a0a] px-6 pb-6 pt-10 sm:px-8 sm:pb-8">
              <h2 className="mb-5 text-[22px] font-bold italic leading-[1.1] text-white">
                Quem será<br />seu professor?
              </h2>

              <div className="space-y-3">
                {BIO_TEXT.map((p, i) => (
                  <p
                    key={i}
                    className={`text-[12px] leading-[1.7] ${
                      i === 3
                        ? "font-bold italic text-gold"
                        : "text-gray-light"
                    }`}
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="mt-5 border-t border-dark-border pt-4">
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
