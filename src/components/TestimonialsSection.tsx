"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  const items = [...TESTIMONIALS.items, ...TESTIMONIALS.items, ...TESTIMONIALS.items];

  return (
    <section className="noise relative overflow-hidden py-20 md:py-28">
      <div className="relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 px-6"
        >
          <h2 className="section-heading">{TESTIMONIALS.title}</h2>
          <p className="section-sub mt-3">{TESTIMONIALS.subtitle}</p>
        </motion.div>

        {/* Carousel — like CNP testimonials */}
        <div className="mt-12 scrollbar-hide w-full overflow-hidden">
          <div className="testimonial-track">
            {items.map((t, i) => (
              <div
                key={i}
                className="frame w-[320px] flex-shrink-0 sm:w-[360px]"
              >
                {/* Stars */}
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mb-6 text-[15px] leading-relaxed text-gray-light">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 border-t border-dark-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-sm font-bold text-gold">
                    {t.initials}
                  </div>
                  <span className="font-semibold text-white">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
