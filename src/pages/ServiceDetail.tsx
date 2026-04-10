import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBanner from "@/components/PageBanner";
import { servicesData } from "@/data/services";
import serviceDetailBanner from "@/assets/banners/service-detail-banner.jpg";

const ServiceDetail = () => {
  const { slug } = useParams();
  const normalizedSlug = slug === "specialized-electrical-panel" ? "alco-composit-panal" : slug;
  const service = servicesData.find((s) => s.slug === normalizedSlug);

  if (!service) {
    return (
      <>
        <Header />
        <div className="pt-32 pb-20 text-center container-wide">
          <h1 className="text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <Header />
      <main>
        <PageBanner
          title={service.title}
          subtitle={service.shortDesc}
          breadcrumbs={[
            { label: "Home", to: "/" },
            { label: "Services", to: "/services" },
            { label: service.title },
          ]}
          bgImage={serviceDetailBanner}
        />

        {/* Description */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl gradient-orange flex items-center justify-center">
                    <Icon size={32} className="text-accent-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">About This Service</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">{service.fullDesc}</p>

                {/* Sub-services */}
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-foreground mb-6">What's Included</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.subServices.map((sub) => (
                      <div key={sub} className="flex items-center gap-3 bg-secondary rounded-lg p-4">
                        <CheckCircle size={20} className="text-accent shrink-0" />
                        <span className="text-foreground font-medium">{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar CTA */}
              <div>
                <div className="gradient-navy rounded-xl p-8 sticky top-28">
                  <h3 className="text-xl font-bold text-primary-foreground mb-3">Get a Free Quote</h3>
                  <p className="text-primary-foreground/70 text-sm mb-6">
                    Ready to get started? Contact us for a free consultation and quote for your {service.title.toLowerCase()} project.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full gradient-orange text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
                      Request Quote <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </Link>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      className="w-full mt-3 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                    >
                      WhatsApp Us
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="section-padding bg-secondary">
          <div className="container-wide">
            <div className="text-center mb-14">
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">How It Works</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Our Process</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.process.map((p, i) => (
                <div key={i} className="relative">
                  <div className="bg-card border border-border rounded-lg p-6 h-full">
                    <div className="w-10 h-10 rounded-full gradient-orange flex items-center justify-center text-accent-foreground font-bold text-lg mb-4">
                      {i + 1}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{p.step}</h3>
                    <p className="text-muted-foreground text-sm">{p.desc}</p>
                  </div>
                  {i < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-4 z-10">
                      <ArrowRight size={20} className="text-accent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding">
          <div className="container-wide">
            <h2 className="text-2xl font-extrabold text-foreground mb-8">Other Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData
                .filter((s) => s.slug !== normalizedSlug)
                .slice(0, 3)
                .map(({ slug: s, icon: SIcon, title, shortDesc }) => (
                  <Link key={s} to={`/services/${s}`} className="bg-card border border-border rounded-lg p-6 hover-lift group">
                    <div className="w-12 h-12 rounded-lg gradient-navy flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <SIcon size={24} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                    <p className="text-muted-foreground text-sm">{shortDesc}</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ServiceDetail;
