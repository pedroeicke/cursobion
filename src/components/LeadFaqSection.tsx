"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

export default function LeadFaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="relative z-10 mx-auto max-w-[760px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-8 text-center text-2xl font-bold text-white md:text-3xl">
            Dúvidas Frequentes
          </h2>

          <div>
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="faq-item">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-[14px] font-medium text-white">{item.question}</span>
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                    {openFaq === i ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-4 text-sm leading-relaxed text-gray-text">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
