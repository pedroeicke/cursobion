"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, DollarSign } from "lucide-react";

const PAINS = [
  {
    icon: DollarSign,
    num: "R$ 300+",
    title: "Gastos mensais",
    desc: "em manutenção no salão que poderiam ser evitados",
  },
  {
    icon: Clock,
    num: "2h+",
    title: "Tempo perdido",
    desc: "dependendo da agenda de outra pessoa toda vez",
  },
  {
    icon: AlertTriangle,
    num: "100%",
    title: "Dependência total",
    desc: "sem saber o que fazer quando a prótese começa a descolar",
  },
];

export default function PainSection() {
  return (
    <section className="section-accent noise relative py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-[1100px] px-6">
        {/* Two-column: text left, cards right */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Left — headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">O problema</span>
            <h2 className="section-title mb-5">
              Você ainda depende de alguém para cuidar da sua prótese?
            </h2>
            <p className="text-[15px] leading-[1.8] text-gray-text">
              A maioria dos usuários gasta centenas de reais e horas preciosas
              todo mês — sem nunca aprender a fazer sozinho. Esse ciclo de
              dependência custa caro e gera insegurança.
            </p>
          </motion.div>

          {/* Right — stacked cards */}
          <div className="space-y-4">
            {PAINS.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="feature-card flex items-center gap-5"
                >
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gold/10">
                    <Icon className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-gold">{p.num}</span>
                      <span className="text-sm font-semibold text-white">{p.title}</span>
                    </div>
                    <p className="text-sm text-gray-text">{p.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
