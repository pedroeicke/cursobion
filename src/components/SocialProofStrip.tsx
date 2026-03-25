"use client";

import { motion } from "framer-motion";
import { Star, Users, Award } from "lucide-react";

export default function SocialProofStrip() {
  return (
    <section className="relative border-y border-white/5 bg-dark-card/50 py-6">
      <div className="mx-auto flex max-w-[900px] flex-col items-center justify-center gap-6 px-5 sm:flex-row sm:gap-12 md:px-10">
        {/* Students */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <Users className="h-5 w-5 text-gold" />
          <span className="text-sm text-white">
            <strong className="text-gold">500+</strong> alunos matriculados
          </span>
        </motion.div>

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center gap-2"
        >
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="h-4 w-4 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-sm text-white">Nota 5.0</span>
        </motion.div>

        {/* Highlight testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center gap-3"
        >
          <Award className="h-5 w-5 text-gold" />
          <span className="text-sm text-gray-text">
            &ldquo;Economizei mais de R$ 2.000&rdquo; — <strong className="text-white">Felipe T.</strong>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
