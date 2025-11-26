import { LogoCarousel } from "./LogoCarousel";
import logo01 from "@/assets/logos/logo-01.png";
import logo02 from "@/assets/logos/logo-02.png";
import logo03 from "@/assets/logos/logo-03.png";
import logo04 from "@/assets/logos/logo-04.png";
import logo06 from "@/assets/logos/logo-06.png";
import logo07 from "@/assets/logos/logo-07.png";
import logo08 from "@/assets/logos/logo-08.png";
import logo09 from "@/assets/logos/logo-09.png";
import logo10 from "@/assets/logos/logo-10.png";
import logo11 from "@/assets/logos/logo-11.png";

const logos = [
  { id: 1, name: "Cliente 1", img: logo01 },
  { id: 2, name: "Cliente 2", img: logo02 },
  { id: 3, name: "Cliente 3", img: logo03 },
  { id: 4, name: "Cliente 4", img: logo04 },
  { id: 5, name: "Cliente 5", img: logo06 },
  { id: 6, name: "Cliente 6", img: logo07 },
  { id: 7, name: "Cliente 7", img: logo08 },
  { id: 8, name: "Cliente 8", img: logo09 },
  { id: 9, name: "Cliente 9", img: logo10 },
  { id: 10, name: "Cliente 10", img: logo11 },
];

export default function ClientsSection() {
  return (
    <section id="clientes" className="py-20 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Veja em quem confia na <span className="text-primary">2P</span>
        </h2>
        
        <LogoCarousel logos={logos} columnCount={5} />
      </div>
    </section>
  );
}
