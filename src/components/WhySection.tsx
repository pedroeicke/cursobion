"use client";

import { motion } from "framer-motion";
import { BookOpen, RefreshCw, Users, Gem, Compass, MessageCircle } from "lucide-react";
import { DIFFERENTIALS } from "@/lib/constants";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen, RefreshCw, Users, Gem, Compass, MessageCircle,
};

export default function WhySection() {
  return (
    <section className="noise relative overflow-hidden py-20 md:py-28">
      <div className="glow-blob absolute -left-20 top-1/2 h-[300px] w-[300px] bg-gold/8" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6">
        {/* Heading — centered like CNP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="section-heading">
            O que torna o{" "}
            <span className="shimmer-text">Guia Prático</span>{" "}
            diferente?
          </h2>
        </motion.div>

        {/* Stacked full-width cards — like CNP differentials */}
        <div className="space-y-4">
          {DIFFERENTIALS.items.map((d, i) => {
            const Icon = ICONS[d.icon] || BookOpen;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`frame flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 ${
                  isEven ? "" : "sm:flex-row-reverse"
                }`}
              >
                <div className="icon-circle h-16 w-16">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold text-white">{d.title}</h3>
                  <p className="text-[15px] leading-relaxed text-gray-text">{d.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
