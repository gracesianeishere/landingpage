/** Spiky starburst accent echoing the motif in the source portfolio. */
export function Starburst({
  className,
  spikes = 22,
  color = "var(--color-blush)",
}: {
  className?: string;
  spikes?: number;
  color?: string;
}) {
  const cx = 50;
  const cy = 50;
  const outer = 50;
  const inner = 30;
  const pts: string[] = [];
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI / spikes) * i - Math.PI / 2;
    pts.push(`${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`);
  }
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <polygon points={pts.join(" ")} fill={color} />
    </svg>
  );
}
