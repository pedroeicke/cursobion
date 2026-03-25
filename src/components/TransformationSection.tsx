"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Clock, Shield, DollarSign } from "lucide-react";
import CtaButton from "./CtaButton";
import { HERO } from "@/lib/constants";

const TRANSFORMATIONS = [
  { icon: DollarSign, text: "Economizando centenas de reais todos os meses" },
  { icon: Clock, text: "Fazendo manutenção no seu próprio tempo, sem depender de ninguém" },
  { icon: Shield, text: "Com total segurança e confiança em cada etapa do processo" },
  { icon: TrendingUp, text: "Aumentando a durabilidade da sua prótese com técnica profissional" },
  { icon: Sparkles, text: "No controle total da sua aparência e autoestima" },
];

export default function TransformationSection() {
  return (
    <section className="noise-bg relative py-20 md:py-28">
      <div className="glow-blob right-0 top-1/4 h-[400px] w-[400px] bg-[rgba(200,160,74,0.04)]" />

      <div className="relative z-10 mx-auto max-w-[750px] px-5 md:px-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="infame-title mb-3">
            Imagine Você Daqui a{" "}
            <span className="text-gold">30 Dias...</span>
          </h2>
        </motion.div>

        {/* Transformation items */}
        <div className="space-y-5">
          {TRANSFORMATIONS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold/10">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <p className="text-base text-white/90">{item.text}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="mb-6 text-sm text-gray-text">
            Tudo isso é possível com o guia certo nas suas mãos.
          </p>
          <CtaButton>{HERO.cta}</CtaButton>
        </motion.div>
      </div>
    </section>
  );
}
