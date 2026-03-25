"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import CtaButton from "./CtaButton";
import { HERO } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* BG image — desktop: full cover, mobile: shorter focused on person */}
      <div className="absolute inset-0 md:block">
        <Image
          src="/herobion44.png"
          alt="Rafael Bion"
          fill
          priority
          className="hidden object-cover object-[65%_top] md:block"
          quality={90}
        />
        {/* Mobile: image at top, smaller, focused on the person */}
        <div className="relative h-[55vh] w-full md:hidden">
          <Image
            src="/herobion44.png"
            alt="Rafael Bion"
            fill
            priority
            className="object-cover object-[88%_15%]"
            quality={90}
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#050505] to-transparent" />
        </div>
      </div>

      {/* Bottom fade only — desktop */}
      <div className="absolute inset-0 hidden bg-gradient-to-t from-[#050505] via-transparent to-transparent md:block" />

      {/* Glow accent */}
      <div className="glow-blob absolute -bottom-20 left-1/4 h-[300px] w-[400px] bg-gold/20" />

      <div className="relative z-10 flex min-h-screen items-end pb-12 -mt-24 md:mt-0 md:items-center md:pb-0">
        <div className="w-full max-w-[540px] px-6 md:ml-[80px] md:px-0 lg:ml-[314px]">
          {/* Stars + badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-3"
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-4 w-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm text-gray-light">{HERO.badge}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-[clamp(28px,5vw,46px)] font-bold leading-[1.1]"
          >
            {HERO.headline}
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-[460px] text-[15px] leading-[1.8] text-gray-light"
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
