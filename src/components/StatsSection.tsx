import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "Projects Completed" },
  { value: 500, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Satisfaction Rate" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-accent">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const StatsSection = () => (
  <section className="gradient-navy section-padding">
    <div className="container-wide grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
      {stats.map((s) => (
        <div key={s.label}>
          <Counter target={s.value} suffix={s.suffix} />
          <p className="mt-2 text-primary-foreground/70 font-medium text-sm">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;
