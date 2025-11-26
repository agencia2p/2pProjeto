import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BannerSection from '@/components/BannerSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import AdditionalServicesSection from '@/components/AdditionalServicesSection';
import ClientsSection from '@/components/ClientsSection';
import ContactSection from '@/components/ContactSection';
import ContactInfoSection from '@/components/ContactInfoSection';
import Footer from '@/components/Footer';
const Index = () => {
  return <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BannerSection />
        <AboutSection />
        <ServicesSection />
        <AdditionalServicesSection />
        <ClientsSection />
        <ContactSection />
        
      </main>
      <Footer />
    </div>;
};
export default Index;