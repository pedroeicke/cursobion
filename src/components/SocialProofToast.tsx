"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BUYERS = [
  { name: "Carlos M.", city: "São Paulo, SP" },
  { name: "Lucas R.", city: "Rio de Janeiro, RJ" },
  { name: "André S.", city: "Belo Horizonte, MG" },
  { name: "Felipe T.", city: "Curitiba, PR" },
  { name: "Marcos A.", city: "Salvador, BA" },
  { name: "Bruno L.", city: "Florianópolis, SC" },
  { name: "Rafael P.", city: "Goiânia, GO" },
  { name: "Thiago C.", city: "Recife, PE" },
  { name: "Diego F.", city: "Porto Alegre, RS" },
  { name: "Gustavo N.", city: "Brasília, DF" },
  { name: "João V.", city: "Fortaleza, CE" },
  { name: "Pedro H.", city: "Campinas, SP" },
  { name: "Matheus B.", city: "Manaus, AM" },
  { name: "Henrique D.", city: "Vitória, ES" },
  { name: "Leandro K.", city: "Joinville, SC" },
];

function getRandomBuyer(lastIndex: number) {
  let idx = lastIndex;
  while (idx === lastIndex) {
    idx = Math.floor(Math.random() * BUYERS.length);
  }
  return idx;
}

function timeAgo() {
  const mins = Math.floor(Math.random() * 10) + 1;
  return `há ${mins} min`;
}

export default function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [buyerIdx, setBuyerIdx] = useState(0);
  const [time, setTime] = useState("há 2 min");

  const showToast = useCallback(() => {
    setBuyerIdx((prev) => getRandomBuyer(prev));
    setTime(timeAgo());
    setVisible(true);
    setTimeout(() => setVisible(false), 5000);
  }, []);

  useEffect(() => {
    // First toast after 8 seconds
    const initial = setTimeout(showToast, 8000);
    // Then every 40 seconds
    const interval = setInterval(showToast, 40000);
    return () => {
      clearTimeout(initial);
      clearInterval(interval);
    };
  }, [showToast]);

  const buyer = BUYERS[buyerIdx];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-24 left-4 z-50 flex items-center gap-3 rounded-lg border border-white/10 bg-[#1a1a1a]/95 px-4 py-3 shadow-2xl backdrop-blur-sm md:bottom-6"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-lg">
            🔥
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white">
              {buyer.name}
            </span>
            <span className="text-xs text-gray-400">
              acabou de se inscrever
            </span>
            <span className="text-[10px] text-gray-500">
              {buyer.city} · {time}
            </span>
          </div>
          <button
            onClick={() => setVisible(false)}
            className="ml-2 text-gray-500 hover:text-white"
            aria-label="Fechar"
          >
            ✕
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
