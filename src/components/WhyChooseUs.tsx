import { Zap, Award, Settings, Users } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fast Delivery", desc: "Quick turnarounds without compromising on quality" },
  { icon: Award, title: "Premium Quality", desc: "Industry-leading materials & printing technology" },
  { icon: Settings, title: "End-to-End Solutions", desc: "From design to installation — we handle it all" },
  { icon: Users, title: "Experienced Team", desc: "10+ years of expertise in printing & signage" },
];

const WhyChooseUs = () => (
  <section className="section-padding">
    <div className="container-wide">
      <div className="text-center mb-14">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Our Strengths</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Why Choose Pradip Arts</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="text-center group">
            <div className="w-16 h-16 rounded-full gradient-navy mx-auto flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Icon size={28} className="text-accent" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
