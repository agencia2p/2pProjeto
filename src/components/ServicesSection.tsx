import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export default function ServicesSection() {
  const services = [
    {
      title: "Implementação de E-commerce",
      description: "Criamos sua loja virtual do zero ou adaptamos layouts prontos em plataformas de e-commerce. Performance, carregamento rápido e experiência de compra otimizados."
    },
    {
      title: "UI/UX Design para E-commerce",
      description: "Design intuitivo e focado em conversão. Melhoramos a usabilidade e jornada do cliente com testes A/B e análise de comportamento."
    },
    {
      title: "Design Estratégico e Identidade Visual",
      description: "Desenvolvemos identidade visual e materiais digitais alinhados à sua marca. Layouts otimizados para conversão e impacto visual."
    },
    {
      title: "Suporte e Gestão de E-commerce",
      description: "Monitoramento contínuo, segurança e performance. Realizamos manutenções e otimizações para garantir estabilidade e crescimento."
    },
    {
      title: "Migração de Plataforma",
      description: "Transferimos sua loja virtual com segurança e planejamento. Migração rápida, sem perda de dados e com mínima interrupção nas vendas."
    },
    {
      title: "SEO para E-commerce",
      description: "Otimização técnica, URLs amigáveis, meta tags e conteúdo estratégico para melhorar ranqueamento e aumentar o tráfego orgânico."
    }
  ];

  return (
    <section id="servicos" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Serviços de E-commerce: Implementação, Design e Gestão de <span className="text-primary">Lojas Virtuais</span>
        </h2>
        <p className="text-base md:text-lg text-muted-foreground text-center mb-12 max-w-4xl mx-auto leading-relaxed">
          Somos especialistas em desenvolvimento de e-commerce, oferecendo soluções completas desde a criação até a otimização de lojas virtuais. Trabalhamos com as principais plataformas do mercado: Shopify, WooCommerce, Magento, VTEX, Nuvemshop e outras.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-primary/10 p-8 rounded-2xl border border-primary/30">
          <p className="text-base md:text-lg mb-6 leading-relaxed">
            Quer aumentar as vendas do seu e-commerce? Fale com nossos especialistas e descubra qual solução é ideal para sua loja virtual.<br />
            <span className="text-primary font-bold">Atendemos todo Brasil com serviços personalizados de desenvolvimento, design e gestão de e-commerce.</span>
          </p>
          <Button asChild variant="hero" size="lg">
            <a href="#contato" className="inline-flex items-center gap-2">
              Fale com um Especialista <ArrowRight />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
