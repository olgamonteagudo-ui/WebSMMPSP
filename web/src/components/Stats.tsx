import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { STATS } from "@/data/content";

function useCountUp(target: number, start: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return value;
}

function Stat({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const n = useCountUp(value, start);
  return (
    <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
      <span className="text-4xl font-extrabold tabular-nums tracking-tight text-white sm:text-5xl">
        {n.toLocaleString("es-ES", { useGrouping: value > 2100 })}
        <span className="text-brand-300">{suffix}</span>
      </span>
      <span className="mt-2 text-sm font-medium text-brand-100/80">{label}</span>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-brand-900" aria-label="La sociedad en cifras">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)]" aria-hidden="true" />
      <Container>
        <div ref={ref} className="grid grid-cols-2 gap-10 py-14 sm:py-16 lg:grid-cols-4">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} start={visible} />
          ))}
        </div>
      </Container>
    </section>
  );
}
