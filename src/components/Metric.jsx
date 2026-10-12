import { useEffect, useState } from 'react';

// Counters and bars animate once per session; later mounts render final values.
let played = false;

const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// "89%" -> 89 ticks up to "89%"; "7,000+" and "0.957" keep their format.
function useCountUp(display, animate) {
  const [shown, setShown] = useState(animate ? null : display);

  useEffect(() => {
    const m = /^([\d,]*\.?\d+)(.*)$/.exec(display);
    if (!animate || !m) { setShown(display); return; }

    const raw = m[1];
    const target = parseFloat(raw.replace(/,/g, ''));
    const decimals = (raw.split('.')[1] || '').length;
    const grouped = raw.includes(',');
    const format = (n) => {
      const fixed = n.toFixed(decimals);
      return (grouped ? Number(fixed).toLocaleString('en-US', { minimumFractionDigits: decimals }) : fixed) + m[2];
    };

    let frame;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / 900, 1);
      setShown(format(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) frame = requestAnimationFrame(tick);
      else setShown(display);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [display, animate]);

  return shown ?? display;
}

export default function Metric({ metric, animate = false }) {
  // Decided once at mount so siblings all animate together and re-renders don't cancel it.
  const [run] = useState(() => animate && !played && !reduceMotion());
  const [filled, setFilled] = useState(!run);
  const shown = useCountUp(metric.display, run);

  useEffect(() => {
    if (!run) return;
    const id = requestAnimationFrame(() => setFilled(true));
    played = true;
    return () => cancelAnimationFrame(id);
  }, [run]);

  const width = (f) => `${filled ? f * 100 : 0}%`;

  return (
    <figure className="metric" aria-label={`${metric.display} ${metric.label}`}>
      <div className="metric__value" aria-hidden="true">{shown}</div>
      {metric.fill != null && (
        <div className="metric__bars" aria-hidden="true">
          {metric.baseline && (
            <div className="metric__track">
              <span className="metric__bar metric__bar--base" style={{ width: width(metric.baseline.fill) }} />
              <span className="metric__note">{metric.baseline.label}</span>
            </div>
          )}
          <div className="metric__track">
            <span className="metric__bar" style={{ width: width(metric.fill) }} />
          </div>
        </div>
      )}
      <figcaption className="metric__label">{metric.label}</figcaption>
    </figure>
  );
}
