"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  const items = [...TESTIMONIALS.items, ...TESTIMONIALS.items, ...TESTIMONIALS.items];

  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 px-6"
        >
          <h2 className="section-heading">{TESTIMONIALS.title}</h2>
          <p className="section-sub mt-3">{TESTIMONIALS.subtitle}</p>
        </motion.div>

        <div className="mt-10 scrollbar-hide w-full overflow-hidden">
          <div className="testimonial-track">
            {items.map((t, i) => (
              <div
                key={i}
                className="w-[300px] flex-shrink-0 rounded-2xl border border-[#1c1c1c] bg-[#111] p-6 sm:w-[340px]"
              >
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mb-5 text-[14px] leading-relaxed text-[#aaa]">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-[#1c1c1c] pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/10 text-xs font-bold text-gold">
                    {t.initials}
                  </div>
                  <span className="text-sm font-semibold text-white">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
