import { ShoppingBag, Building2, GraduationCap, HeartPulse } from "lucide-react";

const industries = [
  { icon: ShoppingBag, title: "Retail", desc: "POS displays, window graphics, in-store branding" },
  { icon: Building2, title: "Corporate", desc: "Office signage, reception branding, wayfinding" },
  { icon: GraduationCap, title: "Education", desc: "Campus signage, event banners, wall murals" },
  { icon: HeartPulse, title: "Healthcare", desc: "Wayfinding, safety signage, patient information" },
];

const IndustrySolutions = () => (
  <section className="section-padding bg-secondary">
    <div className="container-wide">
      <div className="text-center mb-14">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Industries We Serve</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Industry Solutions</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-card rounded-lg p-6 text-center hover-lift border border-border">
            <Icon size={40} className="text-accent mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustrySolutions;
