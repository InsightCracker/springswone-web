import useCountUp from "../hooks/useCountUp";
import useInView from "../hooks/useInView";

const STATS = [
  { target: 12, suffix: "", label: "Years of continuous work" },
  { target: 40, suffix: "", label: "Communities served" },
  { target: 5000, suffix: "+", label: "People directly supported" },
  { target: 180, suffix: "", label: "Skills-training graduates" },
];

function Stat({ target, suffix, label, active }) {
  const value = useCountUp(target, { start: active, duration: 1600 });
  return (
    <div className="border-l border-border pl-5 first:border-l-0 first:pl-0 sm:first:border-l sm:first:pl-5 lg:first:border-l-0 lg:first:pl-0">
      <p className="font-display text-4xl font-semibold text-text-primary sm:text-5xl">
        {value.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-text-secondary">{label}</p>
    </div>
  );
}

export default function ImpactStats() {
  const [ref, inView] = useInView({ threshold: 0.4 });

  return (
    <section id="impact" className="border-y border-border bg-surface">
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-16 sm:px-8 lg:grid-cols-4 lg:gap-6"
      >
        {STATS.map((stat) => (
          <Stat key={stat.label} {...stat} active={inView} />
        ))}
      </div>
    </section>
  );
}
