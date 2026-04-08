import { Link } from "react-router-dom";
import { Target, Eye, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBanner from "@/components/PageBanner";
import teamImg from "@/assets/team.jpg";
import aboutBanner from "@/assets/banners/about-banner.jpg";

const processSteps = [
  { num: "01", title: "Consultation", desc: "We listen to your requirements and understand your brand vision." },
  { num: "02", title: "Design", desc: "Our creative team develops concepts and presents options for your approval." },
  { num: "03", title: "Production", desc: "Using premium materials and cutting-edge technology for flawless output." },
  { num: "04", title: "Installation", desc: "Professional installation and delivery with ongoing support." },
];

const About = () => (
  <>
    <Header />
    <main>
      <PageBanner
        title="About Pradip Arts"
        subtitle="A decade of excellence in printing, signage, and branding solutions."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
        bgImage={aboutBanner}
      />

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                Building Brands Since 2014
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pradip Arts was founded with a simple mission: to help businesses communicate visually with clarity, impact, and professionalism. What started as a small printing shop has grown into a full-service visual solutions company serving clients across industries.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Over the past decade, we've invested in the latest printing technology, expanded our service offerings, and built a team of skilled professionals who are passionate about delivering exceptional results. Today, we serve 500+ clients ranging from startups to Fortune 500 companies.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["10+ Years Experience", "1000+ Projects", "500+ Clients", "99% Satisfaction"].map((stat) => (
                  <div key={stat} className="flex items-center gap-2">
                    <CheckCircle size={18} className="text-accent shrink-0" />
                    <span className="text-sm font-medium text-foreground">{stat}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img src={teamImg} alt="Pradip Arts team" loading="lazy" width={1280} height={720} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-14 h-14 rounded-xl gradient-orange flex items-center justify-center mb-5">
                <Target size={28} className="text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-extrabold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with premium visual solutions that enhance brand presence, drive customer engagement, and deliver measurable results. We are committed to quality, innovation, and customer satisfaction in every project we undertake.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="w-14 h-14 rounded-xl gradient-navy flex items-center justify-center mb-5">
                <Eye size={28} className="text-accent" />
              </div>
              <h3 className="text-2xl font-extrabold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted visual solutions partner, recognized for our innovation, craftsmanship, and commitment to helping businesses transform their brand visibility through cutting-edge printing and signage technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="section-padding gradient-navy">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((s) => (
              <div key={s.num} className="text-center">
                <span className="text-5xl font-extrabold text-accent/30">{s.num}</span>
                <h3 className="text-lg font-bold text-primary-foreground mt-2 mb-2">{s.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-orange section-padding">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-accent-foreground mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-accent-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Let's discuss how we can help elevate your brand presence.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground font-semibold text-lg px-8 hover:bg-navy-light transition-colors">
              Get In Touch <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default About;
