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
    <section id="paraquem" className="noise relative overflow-hidden py-20 md:py-28">
      {/* Background glows */}
      <div className="glow-blob absolute -right-40 top-0 h-[500px] w-[500px] bg-gold/6" />
      <div className="glow-blob absolute -left-40 bottom-0 h-[400px] w-[400px] bg-gold/5" />

      <div className="relative z-10 mx-auto max-w-[1000px] px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-heading">
            Para quem é o{" "}
            <span className="shimmer-text">Curso?</span>
          </h2>
        </motion.div>

        {/* 2-column grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {FOR_WHO.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-5 rounded-2xl border border-[#1f1f1f] bg-[#111111]/80 px-5 py-5 transition-colors hover:border-gold/15"
            >
              {/* Square image — like CNP illustrations */}
              <div className="relative h-[72px] w-[72px] flex-shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={ICON_IMAGES[i] || ICON_IMAGES[0]}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text — italic like CNP */}
              <p className="text-[15px] font-medium italic leading-snug text-gray-light">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
