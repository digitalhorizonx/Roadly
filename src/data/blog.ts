import type { ArticleIdea, BlogCategory } from "./types";

/**
 * Blog architecture. Categories and a planned editorial calendar of article
 * ideas targeting real US search intent. Articles are written and published
 * later — flipping `published` to true (and adding body content) makes an
 * idea a live page; nothing else changes.
 */
export const blogCategories: BlogCategory[] = [
  {
    slug: "roadside-tips",
    name: "Roadside Tips",
    description:
      "What to do — and what not to do — when your car leaves you stranded.",
  },
  {
    slug: "battery",
    name: "Battery",
    description:
      "Dead batteries, jump starts, replacement timing and cold-weather survival.",
  },
  {
    slug: "towing",
    name: "Towing",
    description:
      "How towing works, what it costs, and how to protect your car and wallet.",
  },
  {
    slug: "car-maintenance",
    name: "Car Maintenance",
    description:
      "Simple upkeep that prevents the breakdowns we get called for most.",
  },
  {
    slug: "emergency-driving",
    name: "Emergency Driving",
    description:
      "Handling blowouts, black ice, dead steering and other moments that matter.",
  },
];

export const articleIdeas: ArticleIdea[] = [
  // ── Roadside Tips ────────────────────────────────────────────────
  {
    slug: "what-to-do-when-your-car-breaks-down-on-the-highway",
    title: "What to Do When Your Car Breaks Down on the Highway (Step by Step)",
    categorySlug: "roadside-tips",
    targetKeyword: "what to do when car breaks down on highway",
    summary:
      "A calm, sequenced guide: getting off the road, staying visible, when to exit the vehicle, and who to call.",
    published: false,
  },
  {
    slug: "is-it-safe-to-sit-in-your-car-on-the-shoulder",
    title: "Is It Safe to Sit in Your Car on the Highway Shoulder?",
    categorySlug: "roadside-tips",
    targetKeyword: "is it safe to sit in car on shoulder",
    summary:
      "What crash data says about shoulder safety, and the seatbelt-on, wheels-turned setup that minimizes risk.",
    published: false,
  },
  {
    slug: "roadside-emergency-kit-checklist",
    title: "The 15-Item Roadside Emergency Kit Worth Actually Carrying",
    categorySlug: "roadside-tips",
    targetKeyword: "roadside emergency kit checklist",
    summary:
      "A no-filler kit list with real prices, what each item is for, and the three items people forget.",
    published: false,
  },
  {
    slug: "how-much-does-roadside-assistance-cost",
    title: "How Much Does Roadside Assistance Cost in 2026? (Real Numbers)",
    categorySlug: "roadside-tips",
    targetKeyword: "how much does roadside assistance cost",
    summary:
      "Typical price ranges for jumps, tows, lockouts and fuel delivery — memberships vs. pay-per-use math.",
    published: false,
  },
  {
    slug: "roadside-assistance-vs-aaa-membership",
    title: "Pay-Per-Use Roadside Assistance vs. AAA: Which Makes Sense for You?",
    categorySlug: "roadside-tips",
    targetKeyword: "roadside assistance vs aaa",
    summary:
      "An honest cost comparison by driver profile: new car owners, older-car owners, and families.",
    published: false,
  },
  {
    slug: "does-insurance-cover-roadside-assistance",
    title: "Does Car Insurance Cover Roadside Assistance and Towing?",
    categorySlug: "roadside-tips",
    targetKeyword: "does insurance cover roadside assistance",
    summary:
      "How roadside riders work, what reimbursement claims need, and when using them raises premiums.",
    published: false,
  },
  // ── Battery ──────────────────────────────────────────────────────
  {
    slug: "how-to-jump-start-a-car-safely",
    title: "How to Jump Start a Car Safely (Without Frying the Electronics)",
    categorySlug: "battery",
    targetKeyword: "how to jump start a car",
    summary:
      "Correct cable order with photos, the mistakes that damage modern ECUs, and when not to attempt it.",
    published: false,
  },
  {
    slug: "signs-of-a-dying-car-battery",
    title: "7 Signs Your Car Battery Is Dying (Before It Strands You)",
    categorySlug: "battery",
    targetKeyword: "signs of a dying car battery",
    summary:
      "Slow cranks, dim lights, dashboard clues and the age rule — with a quick self-test anyone can do.",
    published: false,
  },
  {
    slug: "how-long-do-car-batteries-last",
    title: "How Long Do Car Batteries Really Last? (And What Kills Them Early)",
    categorySlug: "battery",
    targetKeyword: "how long do car batteries last",
    summary:
      "The 3–5 year rule, why cold climates cut battery life, and habits that quietly drain batteries.",
    published: false,
  },
  {
    slug: "why-wont-my-car-start-clicking-noise",
    title: "Car Won't Start, Just Clicks? Here's What That Sound Means",
    categorySlug: "battery",
    targetKeyword: "car wont start clicking noise",
    summary:
      "Rapid clicks vs. one loud click vs. silence — a diagnostic tree from battery to starter to alternator.",
    published: false,
  },
  {
    slug: "cold-weather-car-battery-tips",
    title: "How to Keep Your Car Battery Alive Through a Midwest Winter",
    categorySlug: "battery",
    targetKeyword: "cold weather car battery tips",
    summary:
      "Why cold cuts cranking power, garage vs. street parking, trickle chargers, and pre-winter testing.",
    published: false,
  },
  {
    slug: "battery-vs-alternator-how-to-tell",
    title: "Bad Battery or Bad Alternator? How to Tell the Difference",
    categorySlug: "battery",
    targetKeyword: "battery vs alternator symptoms",
    summary:
      "The symptoms that separate them, a voltmeter test in plain English, and why jump-start behavior is the tell.",
    published: false,
  },
  // ── Towing ───────────────────────────────────────────────────────
  {
    slug: "how-much-does-towing-cost",
    title: "How Much Does It Cost to Tow a Car? (Hook-Up Fees & Per-Mile Rates)",
    categorySlug: "towing",
    targetKeyword: "how much does towing cost",
    summary:
      "National price ranges, how quotes are built, and the red-flag fees that signal a predatory operator.",
    published: false,
  },
  {
    slug: "flatbed-vs-wheel-lift-towing",
    title: "Flatbed vs. Wheel-Lift Towing: Which Does Your Car Need?",
    categorySlug: "towing",
    targetKeyword: "flatbed vs wheel lift towing",
    summary:
      "Why AWD and low cars need flatbeds, when wheel-lift is fine, and what to tell the dispatcher.",
    published: false,
  },
  {
    slug: "can-you-tow-an-awd-car",
    title: "Can You Tow an AWD Car? What Owners Need to Know",
    categorySlug: "towing",
    targetKeyword: "can you tow an awd car",
    summary:
      "How improper towing destroys AWD drivetrains, and the right way to move one — including EVs.",
    published: false,
  },
  {
    slug: "what-to-do-after-a-car-accident-towing",
    title: "After the Crash: Who Tows Your Car, Where It Goes, and What It Costs",
    categorySlug: "towing",
    targetKeyword: "car towed after accident what to do",
    summary:
      "Police-ordered tows, storage-lot fees, insurance's role, and how to keep control of the destination.",
    published: false,
  },
  {
    slug: "predatory-towing-how-to-avoid",
    title: "Predatory Towing: How to Spot It and Protect Yourself",
    categorySlug: "towing",
    targetKeyword: "predatory towing",
    summary:
      "Bandit tows, ransom storage fees and your rights — plus the questions that scare bad operators off.",
    published: false,
  },
  {
    slug: "how-far-can-you-be-towed",
    title: "Long-Distance Towing: Costs, Options and When It Beats Repair",
    categorySlug: "towing",
    targetKeyword: "long distance towing cost",
    summary:
      "City-to-city and interstate tow pricing, shared-load transport vs. dedicated flatbed, break-even math.",
    published: false,
  },
  // ── Car Maintenance ──────────────────────────────────────────────
  {
    slug: "how-often-should-you-check-tire-pressure",
    title: "Tire Pressure: How Often to Check It and Why Winter Changes Everything",
    categorySlug: "car-maintenance",
    targetKeyword: "how often check tire pressure",
    summary:
      "The 10°F/1 PSI rule, why TPMS lights spike in cold snaps, and a 60-second monthly routine.",
    published: false,
  },
  {
    slug: "how-to-check-your-spare-tire",
    title: "When Did You Last Check Your Spare? A 5-Minute Inspection Guide",
    categorySlug: "car-maintenance",
    targetKeyword: "how to check spare tire",
    summary:
      "Flat spares strand thousands of drivers a year. Pressure, age, tools — and what if you have no spare at all.",
    published: false,
  },
  {
    slug: "dashboard-warning-lights-explained",
    title: "Dashboard Warning Lights Explained: Stop Now vs. Schedule Service",
    categorySlug: "car-maintenance",
    targetKeyword: "dashboard warning lights meaning",
    summary:
      "A triage guide to the lights that mean pull over immediately versus the ones that can wait a week.",
    published: false,
  },
  {
    slug: "pre-road-trip-car-checklist",
    title: "The Pre-Road-Trip Car Checklist Mechanics Actually Use",
    categorySlug: "car-maintenance",
    targetKeyword: "road trip car checklist",
    summary:
      "Fluids, tires, battery, belts and wipers in 20 minutes — plus what to pack for breakdowns far from home.",
    published: false,
  },
  {
    slug: "why-do-tires-go-flat-in-winter",
    title: "Why Tires Go Flat More in Winter (Potholes, PSI and Bead Leaks)",
    categorySlug: "car-maintenance",
    targetKeyword: "why do tires go flat in cold weather",
    summary:
      "Freeze-thaw potholes, pressure drops and corroded rims — and which flats you can prevent.",
    published: false,
  },
  {
    slug: "how-long-can-gas-sit-in-a-car",
    title: "How Long Can Gas Sit in a Car Before It Goes Bad?",
    categorySlug: "car-maintenance",
    targetKeyword: "how long can gas sit in car",
    summary:
      "Fuel degradation timelines, symptoms of stale gas, and what to do with a car that sat for months.",
    published: false,
  },
  {
    slug: "used-car-inspection-checklist",
    title: "The Used Car Inspection Checklist (What Pros Look For)",
    categorySlug: "car-maintenance",
    targetKeyword: "used car inspection checklist",
    summary:
      "Paint-depth tells, rust zones, flood clues and OBD scans — plus when to pay for a professional inspection.",
    published: false,
  },
  // ── Emergency Driving ────────────────────────────────────────────
  {
    slug: "how-to-handle-a-tire-blowout",
    title: "Tire Blowout at Highway Speed: The 4 Seconds That Matter",
    categorySlug: "emergency-driving",
    targetKeyword: "what to do tire blowout highway",
    summary:
      "Why braking is the wrong instinct, the gas-then-ease technique, and steering a car on three tires.",
    published: false,
  },
  {
    slug: "driving-on-black-ice",
    title: "Black Ice: How to Spot It, and What to Do When You're Already Sliding",
    categorySlug: "emergency-driving",
    targetKeyword: "how to drive on black ice",
    summary:
      "Where black ice forms first, why overpasses freeze early, and the no-pedal recovery technique.",
    published: false,
  },
  {
    slug: "stuck-in-snow-how-to-get-out",
    title: "Car Stuck in Snow? Do This Before You Spin Your Tires Bald",
    categorySlug: "emergency-driving",
    targetKeyword: "how to get car unstuck from snow",
    summary:
      "The rocking technique, traction aids that actually work, and the point where you call for a winch.",
    published: false,
  },
  {
    slug: "what-to-do-if-brakes-fail",
    title: "If Your Brakes Fail: A Survival Sequence Every Driver Should Know",
    categorySlug: "emergency-driving",
    targetKeyword: "what to do if brakes fail",
    summary:
      "Pumping vs. ABS, engine braking, the parking brake's real job, and choosing where to stop.",
    published: false,
  },
  {
    slug: "overheating-engine-what-to-do",
    title: "Engine Overheating? What to Do in the First 60 Seconds",
    categorySlug: "emergency-driving",
    targetKeyword: "car overheating what to do",
    summary:
      "Heater-on trick, when to pull over immediately, why you never open a hot radiator, and tow-vs-drive.",
    published: false,
  },
  {
    slug: "driving-in-a-snowstorm-safety",
    title: "Caught Driving in a Snowstorm: Speed, Following Distance and When to Stop",
    categorySlug: "emergency-driving",
    targetKeyword: "driving in snowstorm tips",
    summary:
      "Whiteout protocol, why hazards-while-moving is controversial, and stranded-in-snow survival basics.",
    published: false,
  },
];

export function getCategory(slug: string): BlogCategory | undefined {
  return blogCategories.find((c) => c.slug === slug);
}

export function getPublishedArticles(): ArticleIdea[] {
  return articleIdeas.filter((a) => a.published);
}
