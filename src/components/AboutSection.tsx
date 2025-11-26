import { ArrowDown } from "lucide-react";

export default function AboutSection() {
  const scrollToServices = () => {
    const section = document.getElementById("servicos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="sobre" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900">
          Quem é a <span className="text-primary">2P</span>
        </h2>
        <div className="text-lg text-gray-700 space-y-4 leading-relaxed">
          <p>
            A 2P é uma agência digital especializada na criação, gestão e suporte de e-commerces. Nosso propósito é conectar sua marca ao seu cliente, por meio de estratégias inteligentes e estudos focados na jornada do consumidor.
          </p>
          <p>
            Somos especialistas em implementação, gestão e otimização de lojas virtuais, garantindo desempenho, experiência e resultados reais.
          </p>
          <p className="text-xl font-semibold text-primary text-center pt-4">
            2P Agência Digital - Criamos para conectar e movimentamos para crescer.
          </p>
        </div>

        {/* Seta para próxima seção */}
        <div className="flex justify-center mt-12">
          <button
            onClick={scrollToServices}
            className="group cursor-pointer flex flex-col items-center gap-3"
            aria-label="Ver serviços"
          >
            <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-all duration-300">
              <ArrowDown className="w-6 h-6 text-primary group-hover:text-white animate-bounce" />
            </div>
            <span className="text-sm text-gray-600 group-hover:text-primary transition-colors">
              Ver nossos serviços
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
