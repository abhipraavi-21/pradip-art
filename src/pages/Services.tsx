import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBanner from "@/components/PageBanner";
import { servicesData } from "@/data/services";
import servicesBanner from "@/assets/banners/services-banner-web.jpg";

const Services = () => (
  <>
    <Header />
    <main>
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive printing, signage, and branding solutions tailored to your business needs."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
        bgImage={servicesBanner}
      />

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map(({ slug, image, cardImagePosition, title, shortDesc, subServices }) => (
              <div key={slug} className="bg-card border border-border rounded-lg overflow-hidden hover-lift group">
                <div className="gradient-navy p-6">
                  <div className="mb-4 relative rounded-lg overflow-hidden border border-primary-foreground/15 bg-navy-dark">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: cardImagePosition }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/30 to-transparent" />
                    <h3 className="absolute bottom-3 left-4 right-4 text-xl font-bold text-primary-foreground leading-tight">
                      {title}
                    </h3>
                  </div>
                  <p className="text-primary-foreground/70 text-sm">{shortDesc}</p>
                </div>
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">What's included:</h4>
                  <ul className="space-y-1.5 mb-6">
                    {subServices.slice(0, 4).map((s) => (
                      <li key={s} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {s}
                      </li>
                    ))}
                    {subServices.length > 4 && (
                      <li className="text-sm text-accent font-medium">+{subServices.length - 4} more</li>
                    )}
                  </ul>
                  <Link to={`/services/${slug}`}>
                    <Button variant="outline" className="w-full group/btn">
                      Learn More <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-orange section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-accent-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-accent-foreground/80 text-lg max-w-xl mx-auto mb-8">
            We offer tailored solutions for unique requirements. Let's discuss your project.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground font-semibold text-lg px-8 hover:bg-navy-light transition-colors">
              Contact Us <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Services;
