"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FOR_WHO } from "@/lib/constants";

const ICON_IMAGES = [
  "/icons/1.png",
  "/icons/2.png",
  "/icons/3.png",
  "/icons/4.png",
  "/icons/5.png",
  "/icons/6.png",
  "/icons/9.png",
];

export default function ForWhomSection() {
  return (
    <section id="paraquem" className="relative overflow-hidden py-20 md:py-24">
      <div className="relative z-10 mx-auto max-w-[960px] px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-heading">
            Para quem é o{" "}
            <span className="text-gold">Curso?</span>
          </h2>
        </motion.div>

        {/* 2-column grid */}
        <div className="grid gap-3 md:grid-cols-2">
          {FOR_WHO.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex items-center gap-4 rounded-2xl border border-[#1c1c1c] bg-[#111]/60 px-5 py-4 transition-colors hover:border-gold/10"
            >
              <div className="relative h-[64px] w-[64px] flex-shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={ICON_IMAGES[i] || ICON_IMAGES[0]}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-[14px] font-medium leading-snug text-gray-light">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
