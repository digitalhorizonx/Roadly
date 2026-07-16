import { BadgeCheck, Clock, DollarSign, Timer } from "lucide-react";

const badges = [
  { icon: Clock, label: "Open 24/7", detail: "Nights, weekends & holidays" },
  { icon: Timer, label: "30–45 min avg. arrival", detail: "Live ETA when you call" },
  { icon: DollarSign, label: "Upfront pricing", detail: "Quoted before dispatch" },
  { icon: BadgeCheck, label: "Licensed & insured", detail: "Background-checked pros" },
];

export function TrustBadges() {
  return (
    <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {badges.map(({ icon: Icon, label, detail }) => (
        <li key={label} className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
            <Icon className="size-5" aria-hidden />
          </span>
          <div>
            <p className="text-sm font-semibold text-ink-950">{label}</p>
            <p className="mt-0.5 text-xs text-ink-500">{detail}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
