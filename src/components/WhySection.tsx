"use client";

import { motion } from "framer-motion";
import { BookOpen, RefreshCw, Users, Gem, Compass, MessageCircle } from "lucide-react";
import { DIFFERENTIALS } from "@/lib/constants";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen, RefreshCw, Users, Gem, Compass, MessageCircle,
};

export default function WhySection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="relative z-10 mx-auto max-w-[1060px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-heading">
            O que torna o{" "}
            <span className="text-gold">Curso</span>{" "}
            diferente?
          </h2>
        </motion.div>

        <div className="space-y-3">
          {DIFFERENTIALS.items.map((d, i) => {
            const Icon = ICONS[d.icon] || BookOpen;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="frame flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5"
              >
                <div className="icon-circle">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1.5 text-lg font-bold text-white">{d.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-text">{d.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
