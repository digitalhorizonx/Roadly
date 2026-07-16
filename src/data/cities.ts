import type { CityData } from "./types";

/**
 * City registry. To launch a new city, add an entry here — every service
 * page, sitemap entry and schema block is generated from this data.
 */
export const cities: CityData[] = [
  {
    slug: "chicago",
    name: "Chicago",
    stateSlug: "illinois",
    geo: { lat: 41.8781, lng: -87.6298 },
    population: "2.7 million",
    avgArrival: "30–45 minutes",
    drivingConditions:
      "Chicago is one of the toughest cities in America to be a driver. Lake-effect snow and sub-zero January nights kill batteries by the thousands, spring pothole season eats tires on the Kennedy and Lake Shore Drive, and rush-hour congestion on the Dan Ryan means a breakdown in a live lane is genuinely dangerous. Our drivers work these roads every day and know exactly where to stage, how to reach you, and how to get you moving again quickly and safely.",
    neighborhoods: [
      "The Loop",
      "River North",
      "West Loop",
      "South Loop",
      "Lincoln Park",
      "Lakeview",
      "Wicker Park",
      "Logan Square",
      "Bucktown",
      "Hyde Park",
      "Bronzeville",
      "Pilsen",
      "Uptown",
      "Edgewater",
      "Rogers Park",
      "Avondale",
      "Portage Park",
      "Jefferson Park",
      "Beverly",
      "Chatham",
      "Austin",
      "Garfield Ridge",
    ],
    suburbs: [
      "Evanston",
      "Skokie",
      "Oak Park",
      "Cicero",
      "Berwyn",
      "Oak Lawn",
      "Evergreen Park",
      "Elmwood Park",
      "Norridge",
      "Lincolnwood",
      "Burbank",
      "Blue Island",
    ],
    highways: [
      {
        name: "I-90/94 — Kennedy & Dan Ryan Expressways",
        note: "The busiest corridor in Illinois. Shoulder space is tight, so we prioritize fast, safe extractions here.",
      },
      {
        name: "I-290 — Eisenhower Expressway",
        note: "Heavy commuter traffic from the western suburbs into the Loop, with frequent stop-and-go breakdowns.",
      },
      {
        name: "I-55 — Stevenson Expressway",
        note: "The main route to Midway Airport — we keep response times tight for travelers on a schedule.",
      },
      {
        name: "I-57 & the Bishop Ford (I-94)",
        note: "Long, exposed stretches on the South Side where you don't want to wait alone at night.",
      },
      {
        name: "DuSable Lake Shore Drive",
        note: "Beautiful, but brutal in winter — black ice, lake spray and pothole season keep us busy here.",
      },
      {
        name: "I-294 — Tri-State Tollway",
        note: "We cover the Tri-State around the city for breakdowns heading to and from O'Hare.",
      },
    ],
    landmarks: [
      "O'Hare International Airport",
      "Midway International Airport",
      "McCormick Place",
      "United Center",
      "Navy Pier",
      "Guaranteed Rate Field",
      "Wrigley Field",
    ],
    localNotes: {
      "roadside-assistance":
        "In Chicago, most of the calls we take are weather-driven. Polar-vortex mornings bring waves of dead batteries from Rogers Park to Beverly; July heat blows radiators on the Eisenhower; and pothole season punishes tires on Lake Shore Drive and the Kennedy. Because our drivers are staged across the North, West and South Sides — not dispatched from one central lot — help usually reaches you in 30–45 minutes, even during rush hour.",
      towing:
        "Towing in Chicago takes local knowledge. A breakdown in the Loop means navigating one-way streets and Lower Wacker; a dead car on the Dan Ryan means working a narrow shoulder with traffic flying past. Our operators tow on these roads daily, carry equipment suited to tight city alleys and parking garages with low clearance, and can deliver your vehicle to any repair shop or dealership in Cook County.",
      "jump-start":
        "Dead batteries are practically a season in Chicago. When overnight temperatures drop below zero, battery capacity can fall by more than a third — which is why the first cold snap in January fills our dispatch board by 7 a.m. We send trucks with professional-grade jump packs that safely start everything from a Civic parked on a Lakeview side street to a diesel truck at a Pilsen job site.",
      "battery-replacement":
        "Chicago winters are the hardest thing that ever happens to a car battery. Most batteries here give out a year or two earlier than they would in a mild climate, and they usually fail on the coldest morning of the year. We deliver and install the correct-fit battery at your home, office or roadside — from an apartment garage in Edgewater to a commuter lot in Jefferson Park — so you skip the parts-store trip entirely.",
      "flat-tire-change":
        "Ask any Chicago driver about pothole season. The freeze-thaw cycle from February through April opens craters on Lake Shore Drive, Western Avenue and the Kennedy that can blow a sidewall outright. We change tires on city streets, expressway shoulders and parking garages across Chicago — and if the damage is beyond a spare, we can tow you straight to a tire shop.",
      "fuel-delivery":
        "Running out of gas in Chicago traffic is easier than people admit — the gauge says 30 miles, the Dan Ryan says otherwise. We bring fuel directly to you anywhere in the city, whether you're stopped on the Stevenson on the way to Midway or parked dry on a side street in Logan Square. A few gallons of fresh fuel gets you safely to the nearest station.",
      "car-lockout":
        "Lockouts in Chicago have a way of happening at the worst moments — keys locked in a running car warming up in Lincoln Park in January, or fobs left in trunks at Wrigley Field after a game. Our technicians open modern vehicles with professional tools that leave no damage to doors, locks or weather seals, and they can reach garages and street parking anywhere in the city.",
      "vehicle-recovery":
        "Chicago recovery work is winter work. Cars slide off icy side streets into snowbanks, get stuck in unplowed alleys after a lake-effect storm, or drop a wheel off soft gravel shoulders on the West Side. Our winch-equipped trucks recover vehicles from ditches, deep snow, mud and tight spots without adding damage — and we'll assess the vehicle before you drive on.",
      "vehicle-inspection":
        "Buying a used car in the Chicago area? Road salt hides sins. Our mobile inspectors check for the rust, flood damage and patched-over accident repairs common in Midwest vehicles — and because we come to the seller anywhere in the city or suburbs, you get an independent report before you hand over a dollar.",
    },
    faqs: [
      {
        question: "Do you cover O'Hare and Midway airports?",
        answer:
          "Yes. We regularly assist travelers in and around both O'Hare and Midway, including the economy lots and the surrounding hotel corridors. Tell the dispatcher which terminal or lot you're in and we'll route the nearest truck.",
      },
      {
        question: "Can you reach me on Lower Wacker Drive or in a parking garage?",
        answer:
          "Yes. Our Chicago fleet includes low-clearance-capable trucks for underground streets and parking structures. Note the level and nearest entrance if you can — it speeds things up.",
      },
      {
        question: "Do you serve the suburbs or just the city?",
        answer:
          "We cover all of Chicago plus the inner suburbs, including Evanston, Skokie, Oak Park, Cicero, Berwyn and Oak Lawn. If you're just outside that area, call anyway — we can usually still help or refer a trusted partner.",
      },
    ],
  },
];

export function getCity(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}
