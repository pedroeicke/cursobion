"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { LEAD_CAPTURE, FAQ_ITEMS } from "@/lib/constants";

export default function LeadFaqSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="noise relative overflow-hidden py-20 md:py-28">
      <div className="glow-blob absolute -right-20 bottom-0 h-[300px] w-[400px] bg-gold/8" />

      <div className="relative z-10 mx-auto max-w-[1100px] px-6">
        {/* Two columns: form left, FAQ right — like CNP */}
        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* Left — Lead capture form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="frame"
            style={{ borderRadius: "32px", padding: "40px" }}
          >
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              {LEAD_CAPTURE.title}
            </h2>
            <p className="mb-8 text-base text-gray-text">
              Preencha o formulário e receba uma{" "}
              <span className="font-bold text-gold">AULA GRATUITA</span>{" "}
              para conhecer o conteúdo por dentro.
            </p>

            {submitted ? (
              <div className="py-8 text-center">
                <p className="text-xl font-bold text-gold">Pronto! Verifique seu e-mail.</p>
                <p className="mt-2 text-sm text-gray-text">
                  Enviamos o link da aula gratuita para você.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder={LEAD_CAPTURE.fields.name}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder={LEAD_CAPTURE.fields.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input"
                />
                <input
                  type="tel"
                  placeholder={LEAD_CAPTURE.fields.phone}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input"
                />
                <button type="submit" className="btn-cta mt-2 w-full">
                  <span>{LEAD_CAPTURE.cta}</span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Right — FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="mb-8 text-2xl font-bold text-white md:text-3xl">
              Dúvidas Frequentes
            </h2>

            <div>
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className="faq-item">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-[15px] font-medium text-white">{item.question}</span>
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                      {openFaq === i ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-sm leading-relaxed text-gray-text">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
