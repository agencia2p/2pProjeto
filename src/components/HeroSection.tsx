"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Melhorias aplicadas:
 * - ElegantShape memoizado para performance
 * - Respeito a prefers-reduced-motion
 * - Novo prop `title3` que pode ser string[] ou string; se for array, ele cicla as palavras
 * - Acessibilidade (aria) e pequenas correções de classes
 * - Comentários e instruções de uso logo abaixo
 */

/* ---------- ElegantShape ---------- */
type ElegantShapeProps = {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
};

const ElegantShape: React.FC<ElegantShapeProps> = React.memo(function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
      aria-hidden
    >
      <motion.div
        animate={prefersReduced ? undefined : { y: [0, 15, 0] }}
        transition={
          prefersReduced
            ? undefined
            : {
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }
        }
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
});

/* ---------- HeroSection ---------- */
export default function HeroSection({
  badge = "2P Agencia Digital",
  title1 = "Seu e-commerce pode ser muito mais do que bonito",
  title2 = "pode ser",
  // title3 aceita string (fixo) ou string[] (vai ciclar)
  title3 = ["lucrativo", "escalável", "estratégico", "imbatível"],
  // opcional: tempo de troca em ms
  cycleInterval = 3000,
}: {
  badge?: string;
  title1?: string;
  title2?: string;
  title3?: string | string[];
  cycleInterval?: number;
}) {
  const prefersReduced = useReducedMotion();

  // transforma title3 em array consistente
  const title3Array = useMemo(() => {
    if (Array.isArray(title3)) return title3;
    if (typeof title3 === "string") {
      // se string, tenta separar por vírgula ou barra, senão usa a string inteira
      const parts = title3.split(/\s*[,|\/]\s*/).map((s) => s.trim()).filter(Boolean);
      return parts.length ? parts : [title3];
    }
    return [String(title3)];
  }, [title3]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (prefersReduced) return;
    if (title3Array.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % title3Array.length);
    }, cycleInterval);
    return () => clearInterval(id);
  }, [title3Array, cycleInterval, prefersReduced]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.18,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]"
      aria-label="Hero - 2P Agência"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
            role="status"
            aria-live="polite"
          >
            <Circle className="h-2 w-2 fill-rose-500/80" />
            <span className="text-sm text-white/60 tracking-wide">{badge}</span>
          </motion.div>

          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
          <h1 className="text-4xl sm:text-6xl md:text-[85px] font-bold mb-6 md:mb-8 tracking-tight leading-tight">
            {/* TITLE 1 */}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
              {title1}
            </span>

            {/* TITLE 2 */}
            <span
              className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 block mt-2"
              )}
            >
              {title2}
            </span>

            {/* TITLE 3 — mesmo estilo, mesmo tamanho */}
            <span
              aria-live="polite"
              className="block mt-4 mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
            >

              {prefersReduced ? (
                title3Array[activeIndex]
              ) : (
                <motion.span
                  key={activeIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.45 }}
                  className="inline-block"
                >
                  {title3Array[activeIndex]}
                </motion.span>
              )}
            </span>

            </h1>

          </motion.div>

          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              Na 2P Marketing Digital, unimos estratégia, design e tecnologia para transformar lojas virtuais
              em negócios que vendem todos os dias.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </section>
  );
}
