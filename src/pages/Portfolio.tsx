import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBanner from "@/components/PageBanner";
import portfolioBanner from "@/assets/banners/portfolio-banner-web.jpg";

import signage1 from "@/assets/portfolio/signage-1.jpg";
import signage2 from "@/assets/portfolio/signage-2.jpg";
import printing1 from "@/assets/portfolio/printing-1.jpg";
import printing2 from "@/assets/portfolio/printing-2.jpg";
import branding1 from "@/assets/portfolio/branding-1.jpg";
import events1 from "@/assets/portfolio/events-1.jpg";

const projects = [
  { id: 1, title: "Restaurant Channel Letters", category: "Signage", image: signage1, aspect: "tall" },
  { id: 2, title: "Event Banner Printing", category: "Printing", image: printing1, aspect: "square" },
  { id: 3, title: "Corporate Office Branding", category: "Branding", image: branding1, aspect: "tall" },
  { id: 4, title: "Corporate Conference Stage", category: "Events", image: events1, aspect: "square" },
  { id: 5, title: "Retail Window Graphics", category: "Signage", image: signage2, aspect: "tall" },
  { id: 6, title: "Office Wall Mural", category: "Printing", image: printing2, aspect: "tall" },
];

const categories = ["All", "Signage", "Printing", "Branding", "Events"];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Our Portfolio"
          subtitle="Explore our recent projects across signage, printing, branding, and events."
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Portfolio" }]}
          bgImage={portfolioBanner}
        />

        <section className="section-padding">
          <div className="container-wide">
            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                    active === cat
                      ? "gradient-orange text-accent-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {filtered.map((project) => (
                <div
                  key={project.id}
                  className="break-inside-avoid group relative overflow-hidden rounded-lg cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/70 transition-all duration-300 flex items-end">
                    <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-accent text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                      <h3 className="text-primary-foreground text-lg font-bold mt-1">{project.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-16">No projects found in this category.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Portfolio;
