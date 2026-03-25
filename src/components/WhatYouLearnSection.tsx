"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { MODULES } from "@/lib/constants";

const TOPIC_IMAGES = ["/icon2/11.png", "/icon2/12.png", "/icon2/10.png"];

export default function WhatYouLearnSection() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <section id="conteudo" className="noise relative overflow-hidden py-20 md:py-28">
        <div className="glow-blob absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 bg-gold/8" />

        <div className="relative z-10 mx-auto max-w-[1100px] px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <h2 className="section-heading">O que você vai aprender</h2>
          </motion.div>

          {/* Two columns: video left, topics right */}
          <div className="grid items-start gap-8 lg:grid-cols-2">
            {/* Left — Video preview */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="frame overflow-hidden p-0"
            >
              <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-[#151515] to-[#0a0a0a]">
                <div className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-gold/20 text-gold transition-all hover:scale-110 hover:bg-gold/30">
                  <Play className="h-8 w-8 fill-gold" />
                </div>
                <p className="absolute bottom-4 text-sm text-gray-text">Prévia do conteúdo</p>
              </div>
              <div className="flex items-center justify-between border-t border-dark-border px-6 py-4">
                <div>
                  <p className="font-semibold text-white">8 módulos práticos</p>
                  <p className="text-xs text-gray-text">Assista no seu ritmo</p>
                </div>
                <span className="rounded-full bg-gold/10 px-3 py-1 text-xs font-bold text-gold">
                  1 ano de acesso
                </span>
              </div>
            </motion.div>

            {/* Right — 3 topics (no cards, just image + text) + VER MAIS */}
            <div className="space-y-6">
              {MODULES.items.slice(0, 3).map((mod, i) => (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="flex items-center gap-5"
                >
                  <div className="relative h-[64px] w-[64px] flex-shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={TOPIC_IMAGES[i]}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-white">{mod.title}</h3>
                    <p className="text-sm text-gray-text">{mod.description}</p>
                  </div>
                </motion.div>
              ))}

              <button
                onClick={() => setPopupOpen(true)}
                className="btn-ghost w-full gap-2"
              >
                VER MAIS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popup modal */}
      <AnimatePresence>
        {popupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setPopupOpen(false)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[800px] rounded-3xl border border-[#1f1f1f] bg-[#0a0a0a] p-8 md:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPopupOpen(false)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-text transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {MODULES.items.map((mod, i) => (
                  <div key={i}>
                    <h3 className="mb-2 text-base font-bold text-white">
                      {mod.title}:
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-text">
                      {mod.description}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setPopupOpen(false)}
                className="mx-auto mt-8 block text-sm text-gray-text transition-colors hover:text-white"
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
