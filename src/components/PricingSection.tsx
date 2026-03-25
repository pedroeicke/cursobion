"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
import { PRICING, GUARANTEE } from "@/lib/constants";
import CtaButton from "./CtaButton";

export default function PricingSection() {
  return (
    <section id="preco" className="noise relative overflow-hidden py-20 md:py-28">
      {/* Glow accents */}
      <div className="glow-blob absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 bg-gold/10" />
      <div className="glow-blob absolute bottom-0 right-0 h-[300px] w-[300px] bg-gold/8" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="section-heading">{PRICING.title}</h2>
          <p className="section-sub mt-3">Tudo o que você vai ter acesso:</p>
        </motion.div>

        {/* Two columns like CNP: checklist left, price right */}
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.1fr_1fr]">
          {/* Left — Benefits checklist in frame */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="frame"
          >
            <div className="space-y-4">
              {PRICING.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="check-dot">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-[15px] text-gray-light">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Price card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="frame text-center"
          >
            <p className="mb-2 text-sm text-gray-text">
              De <span className="price-old text-lg">{PRICING.originalPrice}</span>
            </p>
            <p className="mb-1 text-sm text-gray-text">por apenas</p>
            <p className="mb-2 text-5xl font-extrabold text-white md:text-6xl">
              12x R$ 30,72
            </p>
            <p className="mb-8 text-base text-gray-text">
              ou <span className="font-bold text-gold">{PRICING.price}</span> à vista
              <span className="mx-2 text-dark-border">|</span>
              {PRICING.accessPeriod}
            </p>

            {/* Payment methods placeholder */}
            <div className="mb-6 flex items-center justify-center gap-3 text-xs text-gray-text">
              <span className="rounded bg-[#1a1a1a] px-2 py-1">Cartão</span>
              <span className="rounded bg-[#1a1a1a] px-2 py-1">Pix</span>
              <span className="rounded bg-[#1a1a1a] px-2 py-1">Boleto</span>
            </div>

            <CtaButton className="w-full text-lg">{PRICING.cta}</CtaButton>

            <p className="mt-4 text-xs text-gray-text">
              Pagamento seguro · Acesso imediato
            </p>
          </motion.div>
        </div>

        {/* Guarantee — below pricing like CNP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 frame flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left"
        >
          <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
            <ShieldCheck className="h-10 w-10 text-gold" />
          </div>
          <div>
            <h3 className="mb-1 text-xl font-bold text-white">{GUARANTEE.title}</h3>
            <p className="mb-1 text-sm font-semibold text-gold">{GUARANTEE.subtitle}</p>
            <p className="text-sm leading-relaxed text-gray-text">{GUARANTEE.text}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
