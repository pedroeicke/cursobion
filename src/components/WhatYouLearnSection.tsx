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
      <section id="conteudo" className="relative overflow-hidden py-20 md:py-24">
        <div className="relative z-10 mx-auto max-w-[1060px] px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="section-heading">O que você vai aprender</h2>
          </motion.div>

          {/* Two columns */}
          <div className="grid items-start gap-8 lg:grid-cols-2">
            {/* Left — Video preview */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-[#1c1c1c] bg-[#111]"
            >
              <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-[#141414] to-[#0d0d0d]">
                <div className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-gold/20 bg-gold/10 text-gold transition-all hover:scale-105 hover:bg-gold/15">
                  <Play className="h-6 w-6 fill-gold" />
                </div>
                <p className="absolute bottom-4 text-xs text-gray-text">Prévia do conteúdo</p>
              </div>
              <div className="flex items-center justify-between border-t border-[#1c1c1c] px-5 py-3.5">
                <div>
                  <p className="text-sm font-semibold text-white">8 módulos práticos</p>
                  <p className="text-xs text-gray-text">Assista no seu ritmo</p>
                </div>
                <span className="rounded-full bg-gold/8 px-3 py-1 text-xs font-semibold text-gold">
                  1 ano de acesso
                </span>
              </div>
            </motion.div>

            {/* Right — 3 topics + VER MAIS */}
            <div className="space-y-5">
              {MODULES.items.slice(0, 3).map((mod, i) => (
                <motion.div
                  key={mod.title}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="relative h-[56px] w-[56px] flex-shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={TOPIC_IMAGES[i]}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-white">{mod.title}</h3>
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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setPopupOpen(false)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-[760px] rounded-2xl border border-[#1c1c1c] bg-[#0d0d0d] p-8 md:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPopupOpen(false)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-text transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              <h3 className="mb-6 text-xl font-bold text-white">Todos os módulos</h3>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {MODULES.items.map((mod, i) => (
                  <div key={i}>
                    <h3 className="mb-1.5 text-sm font-bold text-white">
                      {mod.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-gray-text">
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
