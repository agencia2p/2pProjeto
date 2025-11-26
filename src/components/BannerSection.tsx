import { ShoppingCart } from 'lucide-react';

export default function BannerSection() {
  return (
    <section className="py-32 px-4 bg-[#FF6B35]">
      <div className="container mx-auto text-center">
        <ShoppingCart size={64} className="mx-auto mb-8 text-black" />
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Especialistas em E-commerce
        </h2>
        <p className="text-xl text-black max-w-3xl mx-auto">
          Somos especialistas em implementação, gestão e suporte para o seu e-commerce
        </p>
      </div>
    </section>
  );
}
