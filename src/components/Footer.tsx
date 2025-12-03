import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, MessageCircle, Send, Mail, Phone } from "lucide-react";

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative border-t bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Stay Connected Section */}
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Fique Conectado</h2>
            <p className="mb-6 text-muted-foreground">
              Cadastre-se em nossa newsletter para receber as últimas atualizações e ofertas exclusivas.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Digite seu e-mail"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Inscrever-se</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Links Rápidos</h3>
            <nav className="space-y-2 text-sm">
              <a 
                href="#home" 
                onClick={(e) => scrollToSection(e, 'home')}
                className="block transition-colors hover:text-primary cursor-pointer"
              >
                Início
              </a>
              <a 
                href="#sobre" 
                onClick={(e) => scrollToSection(e, 'sobre')}
                className="block transition-colors hover:text-primary cursor-pointer"
              >
                Sobre Nós
              </a>
              <a 
                href="#servicos" 
                onClick={(e) => scrollToSection(e, 'servicos')}
                className="block transition-colors hover:text-primary cursor-pointer"
              >
                Serviços
              </a>
              <a 
                href="#clientes" 
                onClick={(e) => scrollToSection(e, 'clientes')}
                className="block transition-colors hover:text-primary cursor-pointer"
              >
                Clientes
              </a>
              <a 
                href="#contato" 
                onClick={(e) => scrollToSection(e, 'contato')}
                className="block transition-colors hover:text-primary cursor-pointer"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Fale Conosco</h3>
            <address className="space-y-2 text-sm not-italic">
              <a 
                href="tel:+5519982752079"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                <span>+55 19 98275-2079</span>
              </a>
              <a 
                href="mailto:contato@agencia2p.com.br"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                <span>contato@agencia2p.com.br</span>
              </a>
              <a 
                href="https://wa.me/5519982752079"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </address>
          </div>

          {/* Follow Us Section */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Siga-nos</h3>
            <div className="mb-6 flex space-x-4">
              <a
                href="https://www.instagram.com/2pagenciadigital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da 2P Agência Digital"
              >
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                  <Instagram className="h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://wa.me/5519982752079"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da 2P Agência Digital"
              >
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 2P Agência Digital. Todos os direitos reservados.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#privacy" className="transition-colors hover:text-primary">
              Política de Privacidade
            </a>
            <a href="#terms" className="transition-colors hover:text-primary">
              Termos de Serviço
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
