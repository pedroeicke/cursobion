"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import CtaButton from "./CtaButton";
import { HERO } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* BG image */}
      <Image
        src="/herobion44.png"
        alt="Rafael Bion"
        fill
        priority
        className="object-cover object-[65%_top]"
        quality={90}
      />

      {/* Bottom fade only */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

      {/* Glow accent */}
      <div className="glow-blob absolute -bottom-20 left-1/4 h-[300px] w-[400px] bg-gold/20" />

      <div className="relative z-10 flex min-h-screen items-end pb-24 md:items-center md:pb-0">
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
