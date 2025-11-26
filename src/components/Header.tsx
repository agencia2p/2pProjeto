import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-foreground">2P</span>
          <span className="text-primary"> Agência Digital</span>
        </div>
        
        <button 
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-background md:bg-transparent border-b md:border-b-0 border-border md:gap-8 gap-0`}>
          <a href="#home" className="text-muted-foreground hover:text-primary transition px-4 py-3 md:p-0">Home</a>
          <a href="#servicos" className="text-muted-foreground hover:text-primary transition px-4 py-3 md:p-0">Serviços</a>
          <a href="#clientes" className="text-muted-foreground hover:text-primary transition px-4 py-3 md:p-0">Clientes</a>
          <div className="px-4 py-2 md:p-0">
            <Button asChild variant="hero" size="default">
              <a href="#contato">Contato</a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
