"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { GUARANTEE } from "@/lib/constants";

export default function GuaranteeSection() {
  return (
    <section className="relative py-16">
      <div className="relative z-10 mx-auto max-w-[600px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card flex flex-col items-center gap-4 p-8 text-center sm:flex-row sm:text-left"
        >
          <ShieldCheck className="h-12 w-12 flex-shrink-0 text-gold" />
          <div>
            <p className="mb-1 text-base font-bold text-white">{GUARANTEE.title}</p>
            <p className="text-sm leading-relaxed text-gray-text">{GUARANTEE.text}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
