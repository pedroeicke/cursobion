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
          src="/herobion44.png"
          alt="Rafael Bion"
          fill
          priority
          className="hidden object-cover object-[65%_top] md:block"
          quality={90}
        />
        {/* Mobile: image at top */}
        <div className="relative h-[55vh] w-full md:hidden">
          <Image
            src="/herobion44.png"
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
        <div className="w-full max-w-[520px] px-6 md:ml-[80px] md:px-0 lg:ml-[314px]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-2"
          >
            <span className="h-[1px] w-8 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{HERO.badge}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-[clamp(28px,5vw,44px)] font-bold leading-[1.1]"
          >
            {HERO.headline}
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
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-sm text-gray-text"
          >
            Junte-se a mais de 500 alunos
          </motion.p>
        </div>
      </div>
    </section>
  );
}
