"use client";

import { motion } from "framer-motion";
import CtaButton from "./CtaButton";
import { Scissors, TrendingUp, Clock, DollarSign, Users, Heart } from "lucide-react";

export default function SalesPitchSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-[1070px] px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-[600px]"
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/60">
            Por que prótese capilar?
          </p>
          <h2 className="text-[clamp(24px,4vw,36px)] font-bold leading-[1.15] text-white">
            Pare de trocar tempo por dinheiro.{" "}
            <span className="text-gold">Comece a faturar de verdade.</span>
          </h2>
        </motion.div>

        {/* Comparison */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#1c1c1c] bg-[#0d0d0d] p-8"
          >
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#666]">
              Barbeiro tradicional
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#1a1a1a]">
                  <Scissors className="h-5 w-5 text-[#555]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#888]">8 a 10 cortes por dia</p>
                  <p className="text-xs text-[#555]">Rotina cansativa e corrida</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#1a1a1a]">
                  <DollarSign className="h-5 w-5 text-[#555]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#888]">R$30 a R$50 por corte</p>
                  <p className="text-xs text-[#555]">Faturamento limitado pelo volume</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#1a1a1a]">
                  <Clock className="h-5 w-5 text-[#555]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#888]">~R$400/dia no máximo</p>
                  <p className="text-xs text-[#555]">Teto baixo, dependência total de volume</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gold/20 bg-gold/[0.03] p-8"
          >
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              Especialista em prótese capilar
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gold/10">
                  <TrendingUp className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">1 aplicação = R$300+</p>
                  <p className="text-xs text-[#aaa]">Serviço de alto valor em 2 horas</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gold/10">
                  <DollarSign className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Manutenções de R$120 a R$150</p>
                  <p className="text-xs text-[#aaa]">Renda recorrente todo mês</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gold/10">
                  <Users className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Clientes fiéis e recorrentes</p>
                  <p className="text-xs text-[#aaa]">Agenda cheia sem depender de volume</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom emotional block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[640px] text-center"
        >
          <div className="mb-6 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10">
              <Heart className="h-6 w-6 text-gold" />
            </div>
          </div>
          <p className="mb-4 text-[16px] leading-[1.8] text-[#aaa]">
            Quando você aplica uma prótese capilar, você devolve algo que muitos
            clientes perderam há anos:{" "}
            <strong className="text-white">
              a autoestima, o sorriso e a confiança.
            </strong>
          </p>
          <p className="mb-8 text-[clamp(18px,3vw,24px)] font-bold leading-[1.4] text-white">
            O mercado está crescendo.{" "}
            <span className="text-gold">
              Você vai assistir ou vai fazer parte dele?
            </span>
          </p>
          <CtaButton>QUERO ME TORNAR ESPECIALISTA</CtaButton>
        </motion.div>
      </div>
    </section>
  );
}
