"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const SLIDES = [
  {
    tag: "Uma nova oportunidade",
    text: "A prótese capilar não é apenas um serviço estético. É uma das maiores oportunidades de crescimento dentro do mercado da beleza hoje.",
    gold: false,
  },
  {
    tag: "Pense comigo\u2026",
    text: "Um barbeiro tradicional precisa fazer 8, 10 ou até mais cortes por dia, cobrando entre R$30 e R$50, para ter um faturamento razoável. É uma rotina cansativa, corrida e muitas vezes limitada.",
    gold: false,
  },
  {
    tag: "Agora imagine\u2026",
    text: "Dominar uma técnica que permite você realizar uma única aplicação e faturar muito mais do que vários cortes somados. Manutenções recorrentes de R$120 a R$150 ou mais, criando um fluxo constante de renda mensal.",
    gold: true,
  },
  {
    tag: "Serviços de alto valor",
    text: "Você deixa de depender apenas de volume de cortes e passa a trabalhar com serviços de alto valor.",
    gold: false,
  },
  {
    tag: "Além do financeiro",
    text: "Quando você aplica uma prótese capilar, você devolve algo que muitos clientes perderam há anos: a autoestima, o sorriso e a confiança. Isso não tem preço.",
    gold: false,
  },
  {
    tag: "O mercado está crescendo.",
    text: "A pergunta é: você vai assistir ou vai fazer parte dele?",
    gold: true,
    cta: true,
  },
];

const COUNT = SLIDES.length;

function Slide({
  slide,
  index,
  scrollYProgress,
}: {
  slide: (typeof SLIDES)[number];
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const oneSlide = 1 / COUNT;
  const start = index * oneSlide;
  const enterDone = start + oneSlide * 0.25;
  const exitStart = start + oneSlide * 0.75;
  const end = (index + 1) * oneSlide;

  const isFirst = index === 0;
  const isLast = index === COUNT - 1;

  const x = useTransform(
    scrollYProgress,
    [start, enterDone, exitStart, end],
    ["60vw", "0vw", "0vw", "-60vw"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [start, enterDone, exitStart, end],
    [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]
  );

  const finalX = isFirst
    ? useTransform(
        scrollYProgress,
        [start, exitStart, end],
        ["0vw", "0vw", "-60vw"]
      )
    : isLast
      ? useTransform(
          scrollYProgress,
          [start, enterDone, 1],
          ["60vw", "0vw", "0vw"]
        )
      : x;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      style={{ x: finalX, opacity }}
    >
      <div className="w-full max-w-[540px] px-8">
        {/* Tag */}
        <p
          className={`mb-5 text-[11px] font-semibold uppercase tracking-[0.2em] ${
            slide.gold ? "text-gold" : "text-gold/50"
          }`}
        >
          {slide.tag}
        </p>

        {/* Text */}
        <p
          className={`text-[clamp(18px,3vw,26px)] font-medium leading-[1.6] ${
            slide.gold ? "text-white" : "text-gray-light"
          }`}
        >
          {slide.text}
        </p>

        {/* CTA on last slide */}
        {slide.cta && (
          <a href="#paraquem" className="btn-cta mt-10 inline-flex">
            <span>QUERO ME TORNAR ESPECIALISTA</span>
          </a>
        )}

        {/* Dots */}
        <div className="mt-10 flex items-center gap-2">
          {SLIDES.map((_, j) => (
            <div
              key={j}
              className={`h-[2px] rounded-full transition-all duration-300 ${
                j === index ? "w-6 bg-gold" : "w-2 bg-[#2a2a2a]"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SalesPitchSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: "250vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Subtle top line */}
        <div className="absolute inset-x-0 top-0 z-20 h-[1px] bg-gradient-to-r from-transparent via-[#1c1c1c] to-transparent" />

        {/* Stacked slides */}
        <div className="relative h-full w-full">
          {SLIDES.map((slide, i) => (
            <Slide
              key={i}
              slide={slide}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
