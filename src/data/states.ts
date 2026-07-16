import type { StateData } from "./types";

export const states: StateData[] = [
  {
    slug: "illinois",
    name: "Illinois",
    abbr: "IL",
  },
];

export function getState(slug: string): StateData {
  const state = states.find((s) => s.slug === slug);
  if (!state) throw new Error(`Unknown state: ${slug}`);
  return state;
}
