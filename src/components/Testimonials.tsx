import { Star } from "lucide-react";

const testimonials = [
  { name: "Rajesh Mehta", role: "CEO, BrandVista", text: "Pradip Arts delivered exceptional signage for our retail chain. The quality and turnaround time exceeded our expectations." },
  { name: "Priya Sharma", role: "Marketing Director, TechCorp", text: "Their attention to detail in our office branding project was remarkable. Highly recommend their services." },
  { name: "Amit Patel", role: "Event Manager, CelebEvents", text: "We've been working with Pradip Arts for 5 years. Consistent quality and reliability every single time." },
];

const Testimonials = () => (
  <section className="section-padding">
    <div className="container-wide">
      <div className="text-center mb-14">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">What Our Clients Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card border border-border rounded-lg p-8 hover-lift">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="font-bold text-foreground">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
