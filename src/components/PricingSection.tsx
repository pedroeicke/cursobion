"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";
import { PRICING, GUARANTEE } from "@/lib/constants";
import CtaButton from "./CtaButton";

export default function PricingSection() {
  return (
    <section id="preco" className="relative overflow-hidden py-20 md:py-24">
      <div className="relative z-10 mx-auto max-w-[1060px] px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <h2 className="section-heading">{PRICING.title}</h2>
          <p className="section-sub mt-3">Tudo o que você vai ter acesso:</p>
        </motion.div>

        {/* Two columns */}
        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1.1fr_1fr]">
          {/* Left — Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="frame"
          >
            <div className="space-y-3.5">
              {PRICING.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="check-dot">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-[14px] text-gray-light">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Price card */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="frame text-center"
          >
            <p className="mb-2 text-sm text-gray-text">
              De <span className="price-old text-lg">{PRICING.originalPrice}</span>
            </p>
            <p className="mb-1 text-sm text-gray-text">por apenas</p>
            <p className="mb-2 text-5xl font-extrabold text-white md:text-6xl">
              12x R$ 30,72
            </p>
            <p className="mb-8 text-sm text-gray-text">
              ou <span className="font-bold text-gold">{PRICING.price}</span> à vista
              <span className="mx-2 text-[#2a2a2a]">|</span>
              {PRICING.accessPeriod}
            </p>

            <div className="mb-5 flex items-center justify-center gap-2 text-xs text-gray-text">
              <span className="rounded-md bg-[#161616] px-2.5 py-1">Cartão</span>
              <span className="rounded-md bg-[#161616] px-2.5 py-1">Pix</span>
              <span className="rounded-md bg-[#161616] px-2.5 py-1">Boleto</span>
            </div>

            <CtaButton className="w-full text-base">{PRICING.cta}</CtaButton>

            <p className="mt-3 text-xs text-gray-text">
              Pagamento seguro · Acesso imediato
            </p>
          </motion.div>
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 frame flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left"
        >
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gold/8">
            <ShieldCheck className="h-8 w-8 text-gold" />
          </div>
          <div>
            <h3 className="mb-1 text-lg font-bold text-white">{GUARANTEE.title}</h3>
            <p className="mb-1 text-sm font-semibold text-gold">{GUARANTEE.subtitle}</p>
            <p className="text-sm leading-relaxed text-gray-text">{GUARANTEE.text}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
