import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import ShaderBackground from "./ShaderBackground";

export default function HeroSection() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["lucrativo", "escalável", "estratégico", "lucrativo", "imbatível"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  // Função de scroll suave + destaque no formulário
  const scrollToForm = () => {
    const section = document.getElementById("contato");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // Destaque visual
      section.classList.add("highlight-form");
      setTimeout(() => {
        section.classList.remove("highlight-form");
      }, 1500);
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Fundo animado */}
      <ShaderBackground />

      {/* Gradiente laranja + preto */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-orange-600/60 via-black/70 to-orange-900/40 mix-blend-overlay"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Leve vinheta nas bordas (opcional) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,black_100%)] pointer-events-none" />

      <div className="relative z-10 container mx-auto h-full flex items-center justify-center px-4">
        <div className="flex gap-8 items-center justify-center flex-col text-center">
          <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tighter font-regular leading-tight text-white">
            Seu e-commerce pode ser muito mais do que bonito —
            <br />
            <span className="text-white font-bold">pode ser</span>
            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
              &nbsp;
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute font-semibold text-white"
                  initial={{ opacity: 0, y: "-100" }}
                  transition={{ type: "spring", stiffness: 50 }}
                  animate={
                    titleNumber === index
                      ? { y: 0, opacity: 1 }
                      : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                  }
                >
                  {title}
                </motion.span>
              ))}
            </span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-white/90 max-w-2xl">
            Na <strong className="text-white">2P Marketing Digital</strong>, unimos estratégia, design e tecnologia
            para transformar lojas virtuais em negócios que vendem todos os dias.
          </p>

          <div className="flex flex-row gap-3 mt-6">
            <Button size="lg" className="gap-4" variant="hero" asChild>
              <a href="#contato">
                Quero vender mais <MoveRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" className="gap-4" variant="outline" onClick={scrollToForm}>
              Falar com especialista <PhoneCall className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Efeito CSS do destaque no formulário */}
      <style>{`
        .highlight-form {
          animation: pulseHighlight 1.5s ease-in-out;
        }
        @keyframes pulseHighlight {
          0% {
            box-shadow: 0 0 0px hsl(var(--primary) / 0);
          }
          50% {
            box-shadow: 0 0 25px hsl(var(--primary) / 0.6);
          }
          100% {
            box-shadow: 0 0 0px hsl(var(--primary) / 0);
          }
        }
      `}</style>
    </section>
  );
}
