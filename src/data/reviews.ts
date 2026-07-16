import type { Review } from "./types";

/**
 * Customer reviews displayed on the site.
 *
 * NOTE: Per Google's structured-data guidelines, self-serving review markup
 * (Review/AggregateRating on your own LocalBusiness) is not eligible for
 * rich results and can trigger manual actions — so these are intentionally
 * rendered as visible content only, with no Review schema.
 */
export const reviews: Review[] = [
  {
    name: "Marcus T.",
    location: "Logan Square",
    service: "Jump Start",
    rating: 5,
    text: "Battery died in the Target parking lot at 9pm in January. The dispatcher gave me a price and a 35-minute ETA — the truck showed up in 28. Tested my battery after the jump and told me honestly it still had life left. That's why I'm writing this.",
  },
  {
    name: "Priya S.",
    location: "West Loop",
    service: "Towing",
    rating: 5,
    text: "Transmission gave out on the Kennedy during rush hour. Terrifying. They talked me through where to wait, the flatbed positioned behind my car to shield it, and my car got to the dealership without a scratch. Price matched the phone quote exactly.",
  },
  {
    name: "Dan K.",
    location: "Evanston",
    service: "Flat Tire",
    rating: 5,
    text: "Pothole on Lake Shore Drive blew my tire at 6am. The tech had my spare on in about ten minutes and torqued everything properly — then told me exactly how far the donut was good for. Professional from start to finish.",
  },
  {
    name: "Alicia R.",
    location: "Hyde Park",
    service: "Car Lockout",
    rating: 5,
    text: "Locked my keys in a running car with the heat on, which apparently is a whole genre in Chicago winters. They checked my ID, had the door open in maybe four minutes, zero damage. Cheaper than I feared, faster than I hoped.",
  },
  {
    name: "James W.",
    location: "Portage Park",
    service: "Battery Replacement",
    rating: 5,
    text: "Car wouldn't start in my own garage. Instead of just selling me a battery, the tech tested the alternator first, confirmed it really was the battery, and installed the right one on the spot. Old battery taken away for recycling. Easiest car fix I've ever had.",
  },
  {
    name: "Sofia M.",
    location: "Pilsen",
    service: "Fuel Delivery",
    rating: 5,
    text: "Ran out of gas on the Stevenson heading to Midway — with a flight in three hours. No lecture, just 'stay in the car, we're 25 minutes out.' Made the flight. Forever grateful.",
  },
];
