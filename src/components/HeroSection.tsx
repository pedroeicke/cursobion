"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CtaButton from "./CtaButton";
import { HERO } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* BG image — desktop */}
      <div className="absolute inset-0 md:block">
        <Image
          src="/herook.png"
          alt="Rafael Bion"
          fill
          priority
          className="hidden object-cover object-[65%_top] md:block"
          quality={90}
        />
        {/* Mobile: image at top */}
        <div className="relative h-[55vh] w-full md:hidden">
          <Image
            src="/herook.png"
            alt="Rafael Bion"
            fill
            priority
            className="object-cover object-[88%_15%]"
            quality={90}
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>
      </div>

      {/* Bottom fade — desktop */}
      <div className="absolute inset-0 hidden bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:block" />

      <div className="relative z-10 flex min-h-screen items-end pb-12 -mt-24 md:mt-0 md:items-center md:pb-0">
        <div className="w-full max-w-[640px] px-6 md:ml-[120px] md:px-0 lg:ml-[220px]">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-[clamp(28px,5vw,44px)] font-bold leading-[1.4]"
          >
            Transforme sua profissão.
            <br />
            Transforme sua renda.
            <br />
            Transforme vidas.
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-[440px] text-[15px] leading-[1.8] text-gray-light"
          >
            {HERO.subheadline}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <CtaButton>{HERO.cta}</CtaButton>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 flex items-center gap-3"
          >
            <div className="flex -space-x-3">
              {[
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/men/45.jpg",
                "https://randomuser.me/api/portraits/men/22.jpg",
                "https://randomuser.me/api/portraits/men/55.jpg",
                "https://randomuser.me/api/portraits/men/67.jpg",
              ].map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt="Aluno"
                  width={36}
                  height={36}
                  className="rounded-full border-2 border-[#0a0a0a] object-cover"
                />
              ))}
            </div>
            <span className="text-sm text-gray-light">
              Junte-se a <strong className="text-white">+500 alunos</strong>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
