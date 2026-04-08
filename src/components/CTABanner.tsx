import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTABanner = () => (
  <section className="gradient-orange section-padding">
    <div className="container-wide text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-accent-foreground mb-4">
        Let's Build Your Brand Visibility Today
      </h2>
      <p className="text-accent-foreground/80 text-lg max-w-xl mx-auto mb-8">
        Ready to transform your brand presence? Get in touch and let's create something extraordinary.
      </p>
      <Button
        asChild
        size="lg"
        className="bg-primary text-primary-foreground font-semibold text-lg px-8 hover:bg-navy-light transition-colors"
      >
        <Link to="/contact">
          Start Your Project <ArrowRight className="ml-2" size={20} />
        </Link>
      </Button>
    </div>
  </section>
);

export default CTABanner;
