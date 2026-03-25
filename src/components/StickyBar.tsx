"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CtaButton from "./CtaButton";
import { HERO } from "@/lib/constants";

export default function StickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="sticky-bar"
        >
          <div className="mx-auto flex max-w-[600px] items-center justify-center gap-4">
            <CtaButton floating className="w-full sm:w-auto">
              {HERO.cta}
            </CtaButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
