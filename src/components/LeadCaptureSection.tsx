"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { LEAD_CAPTURE } from "@/lib/constants";

export default function LeadCaptureSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: Integrate with Google Sheets / email service
    setSubmitted(true);
  }

  return (
    <section className="noise relative py-24">
      <div className="relative z-10 mx-auto max-w-[500px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-tag mx-auto justify-center">Aula grátis</span>
          <h2 className="section-title mb-3">{LEAD_CAPTURE.title}</h2>
          <p className="section-subtitle mx-auto mb-10">{LEAD_CAPTURE.subtitle}</p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="solid-card p-8 text-center"
          >
            <p className="text-lg font-semibold text-gold">Pronto! Verifique seu e-mail.</p>
            <p className="mt-2 text-sm text-gray-text">
              Enviamos o link da aula gratuita para você.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="solid-card flex flex-col gap-4 p-8"
          >
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
            <button type="submit" className="btn-cta mt-2">
              <span>{LEAD_CAPTURE.cta}</span>
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
