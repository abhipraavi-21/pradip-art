import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageBanner from "@/components/PageBanner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  portfolioCategories,
  portfolioProjects,
  type PortfolioFilter,
  type PortfolioProject,
} from "@/data/portfolioProjects";
import portfolioBanner from "@/assets/banners/portfolio-banner-web.jpg";

const Portfolio = () => {
  const [active, setActive] = useState<PortfolioFilter>("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects =
    active === "All" ? portfolioProjects : portfolioProjects.filter((project) => project.category === active);

  return (
    <>
      <Header />
      <main>
        <PageBanner
          title="Our Portfolio"
          subtitle="Explore real signage, facade, LED, and installation work completed by Pradip Arts Vision."
          breadcrumbs={[{ label: "Home", to: "/" }, { label: "Portfolio" }]}
          bgImage={portfolioBanner}
        />

        <section className="section-padding">
          <div className="container-wide space-y-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">Recent Work</p>
              <h2 className="mt-3 text-3xl font-extrabold text-primary md:text-4xl">
                29 real project photos from boards, LED signs, facades, and site installations
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
                These are actual workshop and site photos from recent jobs. Every image opens in a larger preview so the
                lettering, finish, and fabrication details are easy to see.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {portfolioCategories.map((category) => {
                const count =
                  category === "All"
                    ? portfolioProjects.length
                    : portfolioProjects.filter((project) => project.category === category).length;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActive(category)}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                      active === category
                        ? "gradient-orange text-accent-foreground shadow-lg shadow-orange/20"
                        : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                    }`}
                  >
                    {category} ({count})
                  </button>
                );
              })}
            </div>

            <div className="columns-1 gap-6 space-y-6 sm:columns-2 xl:columns-3">
              {filteredProjects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="group block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="bg-slate-100 p-4 sm:p-5">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-auto w-full rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="space-y-3 p-5">
                    <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      {project.category}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <p className="py-16 text-center text-muted-foreground">No projects found in this category.</p>
            )}
          </div>
        </section>
      </main>

      <Dialog
        open={Boolean(selectedProject)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedProject(null);
          }
        }}
      >
        <DialogContent className="max-h-[92vh] max-w-6xl overflow-hidden border-0 bg-transparent p-0 shadow-none">
          {selectedProject && (
            <div className="overflow-hidden rounded-3xl bg-background shadow-2xl">
              <div className="bg-slate-100 p-3 sm:p-5">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.alt}
                  className="max-h-[70vh] w-full rounded-2xl object-contain"
                />
              </div>

              <div className="space-y-3 p-6 pr-14">
                <span className="inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {selectedProject.category}
                </span>
                <DialogTitle className="text-2xl font-extrabold text-primary">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-base leading-7 text-muted-foreground">
                  {selectedProject.description}
                </DialogDescription>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Portfolio;
