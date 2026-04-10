import { Link } from "react-router-dom";
import { servicesData } from "@/data/services";

const ServicesGrid = () => (
  <section className="section-padding bg-secondary">
    <div className="container-wide">
      <div className="text-center mb-14">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">What We Do</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Our Services</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map(({ slug, image, cardImagePosition, title, shortDesc }) => (
          <Link
            key={slug}
            to={`/services/${slug}`}
            className="relative block h-72 rounded-lg overflow-hidden border border-border hover-lift group"
          >
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: cardImagePosition }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/45 to-navy-dark/20" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="text-2xl font-extrabold text-primary-foreground leading-tight mb-2">{title}</h3>
              <p className="text-primary-foreground/85 text-sm leading-relaxed">{shortDesc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
