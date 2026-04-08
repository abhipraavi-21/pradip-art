import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import IndustrySolutions from "@/components/IndustrySolutions";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <ServicesGrid />
      <WhyChooseUs />
      <StatsSection />
      <IndustrySolutions />
      <Testimonials />
      <CTABanner />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
