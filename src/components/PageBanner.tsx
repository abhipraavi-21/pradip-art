import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; to?: string }[];
  bgImage?: string;
  bgPosition?: string;
}

const PageBanner = ({ title, subtitle, breadcrumbs, bgImage, bgPosition }: PageBannerProps) => (
  <section className="relative">
    <div className="pt-20 md:pt-24 relative overflow-hidden gradient-navy">
      {bgImage && (
        <>
          <img
            src={bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover scale-105 blur-[2px] opacity-30"
            style={{ objectPosition: bgPosition ?? "center" }}
            loading="lazy"
          />
          <img
            src={bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-contain opacity-75"
            style={{ objectPosition: bgPosition ?? "center" }}
            loading="lazy"
          />
          <div className="absolute inset-0 gradient-navy opacity-55" />
        </>
      )}
      <div className="relative z-10 container-wide px-4 md:px-8 h-[260px] md:h-[300px] lg:h-[320px] flex flex-col justify-center">
        <nav className="flex items-center gap-1 text-sm text-primary-foreground/60 mb-4">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1">
              {i > 0 && <ChevronRight size={14} />}
              {crumb.to ? (
                <Link to={crumb.to} className="hover:text-accent transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-accent">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground">{title}</h1>
        {subtitle && <p className="mt-3 text-lg text-primary-foreground/70 max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  </section>
);

export default PageBanner;
