import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="Pradip Arts printing workshop"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-navy-dark/80" />

    <div className="relative z-10 container-wide px-4 md:px-8 text-center">
      <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in-up">
        Premium Printing & Signage
      </p>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
        Transforming Ideas into{" "}
        <span className="text-gradient-orange">Powerful Visual</span> Experiences
      </h1>
      <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
        Printing, signage & branding solutions for modern businesses. We deliver quality that speaks for itself.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
        <Button size="lg" className="gradient-orange text-accent-foreground font-semibold text-lg px-8 hover:opacity-90 transition-opacity">
          Get a Free Quote <ArrowRight className="ml-2" size={20} />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-semibold text-lg px-8"
        >
          <Eye className="mr-2" size={20} /> View Portfolio
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
