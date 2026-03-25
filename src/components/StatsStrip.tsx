"use client";

import { motion } from "framer-motion";

const STATS = [
  { number: "500+", label: "alunos" },
  { number: "10+", label: "anos de experiência" },
  { number: "R$ 2.000+", label: "economia anual média" },
  { number: "7 dias", label: "de garantia" },
];

export default function StatsStrip() {
  return (
    <section className="section-raised border-y border-dark-border">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`py-8 text-center ${
                i < STATS.length - 1 ? "md:border-r md:border-dark-border" : ""
              } ${i < 2 ? "border-b border-dark-border md:border-b-0" : ""}`}
            >
              <p className="stat-number mb-1">{s.number}</p>
              <p className="text-xs uppercase tracking-wider text-gray-text">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
