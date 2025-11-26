import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export default function AdditionalServicesSection() {
  const services = [
    {
      title: "Branding",
      description: "Criamos marcas autênticas e estratégicas, com propósito e identidade visual sólida. Do conceito ao posicionamento, sua marca ganha voz e presença."
    },
    {
      title: "Redes Sociais",
      description: "Gerimos suas redes com estratégia, calendário de postagens e métricas de engajamento. Conteúdos criativos que conectam sua marca com o público."
    },
    {
      title: "Criação de Blogs",
      description: "Desenvolvemos blogs otimizados para SEO que fortalecem o tráfego orgânico e posicionam sua marca como autoridade no setor."
    },
    {
      title: "Tráfego Pago",
      description: "Campanhas de alta performance em Google Ads, Meta Ads e outras plataformas. Foco total em resultados e retorno sobre investimento."
    },
    {
      title: "Criativos em Alta",
      description: "Produzimos vídeos e peças criativas com base em dados e tendências de mercado. Comunicação visual que atrai e converte."
    },
    {
      title: "Landing Pages",
      description: "Landing pages rápidas e otimizadas, criadas para captar leads e aumentar conversões em campanhas digitais."
    }
  ];

  return (
    <section className="py-20 px-4 bg-[var(--gradient-subtle)]">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Além do <span className="text-primary">E-commerce</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-background border-border hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
