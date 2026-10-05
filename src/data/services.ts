import {
  BatteryCharging,
  Car,
  Droplets,
  Fuel,
  KeyRound,
  LifeBuoy,
  SearchCheck,
  Truck,
  Zap,
} from "lucide-react";
import type { ServiceData } from "./types";

/**
 * Service registry. Every service page is generated from this data.
 * Copy may use the tokens {city}, {state}, {stateAbbr}, {phone}, {arrival} —
 * resolved per city by `localize()` in src/lib/content.ts.
 */
export const services: ServiceData[] = [
  {
    slug: "roadside-assistance",
    name: "Roadside Assistance",
    shortName: "Roadside Assistance",
    icon: LifeBuoy,
    excerpt:
      "One call covers it all — jump starts, tire changes, fuel, lockouts and towing, 24 hours a day.",
    h1: "24/7 Roadside Assistance in {city}, {stateAbbr}",
    heroLead:
      "Stranded in {city}? One call gets a professional to your location in about {arrival} — day or night, any weather.",
    metaTitle: "Roadside Assistance {city}, {stateAbbr} | 24/7 Help | Roadly",
    metaDescription:
      "24 hour roadside assistance in {city}. Jump starts, tire changes, fuel delivery, lockouts & towing. Avg. {arrival} arrival. Call {phone} now.",
    overview: [
      "Roadside assistance is the umbrella over everything we do. Whether your battery died, a tire let go, you ran out of gas, or the car simply won't move, one phone call puts a trained technician on the way with the equipment to handle it. You don't need to diagnose the problem first — describe what happened and our dispatcher figures out the rest.",
      "Every Roadly truck runs fully equipped: professional jump packs, tire tools, fuel cans, lockout kits and winch gear. That means the person who shows up can almost always fix the problem on the spot instead of just looking at it. And when a repair genuinely needs a shop, we tow you there in the same visit — no second call, no second wait.",
      "There's no membership required and no annual fee. You pay a fair, quoted price for the help you actually need, and we tell you that price before a truck ever rolls.",
    ],
    situations: [
      {
        title: "Car won't start",
        description:
          "Dead battery, bad starter, or something less obvious — we'll get it running or get it towed, in one visit.",
      },
      {
        title: "Flat tire on a busy road",
        description:
          "We'll reach you safely, swap on your spare, or tow you to a tire shop if the damage is worse.",
      },
      {
        title: "Out of fuel",
        description:
          "We bring gasoline or diesel directly to your location so you can reach the nearest station.",
      },
      {
        title: "Keys locked inside",
        description:
          "Damage-free entry on virtually any make and model, usually in minutes.",
      },
      {
        title: "Breakdown you can't diagnose",
        description:
          "Warning lights, strange noises, sudden loss of power — call us and we'll take it from there.",
      },
      {
        title: "Stuck in snow, mud or a ditch",
        description:
          "Winch-equipped trucks pull your vehicle back to solid ground without adding damage.",
      },
    ],
    benefits: [
      {
        title: "One number for every problem",
        description:
          "No guessing which service you need. Describe the situation and we send the right truck with the right gear.",
      },
      {
        title: "No membership required",
        description:
          "Pay only when you actually need help. No annual fees, no fine print, no waiting period.",
      },
      {
        title: "Upfront pricing",
        description:
          "You get a clear quote on the phone before we dispatch. The price you're told is the price you pay.",
      },
      {
        title: "Available around the clock",
        description:
          "Breakdowns don't keep business hours. Neither do we — nights, weekends and holidays included.",
      },
    ],
    steps: [
      {
        title: "Call or request help",
        description:
          "Tell us where you are and what happened. A dispatcher confirms your location and gives you an upfront price.",
      },
      {
        title: "We dispatch the nearest truck",
        description:
          "The closest equipped technician heads your way immediately. Average arrival in {city} is {arrival}.",
      },
      {
        title: "Track your technician",
        description:
          "We keep you updated by text so you're never left wondering where your help is.",
      },
      {
        title: "Get back on the road",
        description:
          "Most problems are fixed on the spot. If not, we tow you to the shop of your choice in the same visit.",
      },
    ],
    faqs: [
      {
        question: "How fast can you get to me in {city}?",
        answer:
          "Average arrival is {arrival}, and often faster near major expressways. The dispatcher gives you a realistic ETA for your exact location when you call — not a generic promise.",
      },
      {
        question: "Do I need a membership or subscription?",
        answer:
          "No. Roadly is pay-per-use. You call when you need help, get a quoted price upfront, and pay only for that service. There are no annual fees.",
      },
      {
        question: "How much does roadside assistance cost?",
        answer:
          "It depends on the service and your location, but you'll always know the exact price before we dispatch. Simple services like jump starts and lockouts cost less than towing, and there are no hidden after-hours surcharges.",
      },
      {
        question: "What information should I have ready when I call?",
        answer:
          "Your location (a cross street, exit number or landmark works), your vehicle's make and model, and a quick description of the problem. That's enough for us to send the right truck.",
      },
      {
        question: "What if you can't fix my car on the spot?",
        answer:
          "Then we tow it — in the same visit, with the same truck whenever possible. You choose the destination: your mechanic, a dealership or home.",
      },
    ],
    related: ["towing", "jump-start", "flat-tire-change", "fuel-delivery"],
  },
  {
    slug: "towing",
    name: "Emergency Towing",
    shortName: "Towing",
    icon: Truck,
    excerpt:
      "Flatbed and wheel-lift towing to any shop, dealership or driveway — damage-free, 24/7.",
    h1: "24/7 Tow Truck Service in {city}, {stateAbbr}",
    heroLead:
      "Need a tow truck in {city} right now? We dispatch the nearest flatbed in minutes — average arrival {arrival}.",
    metaTitle: "Tow Truck {city}, {stateAbbr} | 24 Hr Emergency Towing | Roadly",
    metaDescription:
      "Emergency towing in {city} — flatbed & wheel-lift tow trucks, 24/7. Upfront pricing, avg. {arrival} arrival. Call {phone} for a tow now.",
    overview: [
      "When your car genuinely can't move — engine failure, transmission trouble, accident damage, or a repair that can't happen curbside — you need a tow that's fast, careful and fairly priced. Roadly dispatches flatbed and wheel-lift trucks across {city} around the clock, operated by professionals who hook, load and secure vehicles hundreds of times a month.",
      "We tow everything from daily drivers to all-wheel-drive SUVs, low-clearance sports cars and motorcycles, and we match the equipment to the vehicle: flatbeds for AWD and low vehicles, wheel-lift for tight spots a flatbed can't reach. Your car arrives at its destination in the same condition we found it — that's the whole job.",
      "You choose where it goes: your trusted mechanic, a dealership, a tire shop or your own driveway. We quote the full price — hook-up plus mileage — before the truck moves, so there's never a surprise on arrival.",
    ],
    situations: [
      {
        title: "Engine or transmission failure",
        description:
          "When the car won't drive, we tow it safely to your mechanic or dealership of choice.",
      },
      {
        title: "Accident and collision towing",
        description:
          "After a crash, we clear your vehicle from the roadway and deliver it to a body shop or storage.",
      },
      {
        title: "Car won't start and can't be revived",
        description:
          "If a jump start doesn't do it, the same visit becomes a tow — no second call needed.",
      },
      {
        title: "Overheating that keeps coming back",
        description:
          "Driving a hot engine destroys it. A short tow is far cheaper than a new head gasket.",
      },
      {
        title: "Low-clearance and specialty vehicles",
        description:
          "Flatbeds with extended ramps for sports cars, lowered vehicles and classics.",
      },
      {
        title: "Motorcycle towing",
        description:
          "Proper wheel chocks and soft straps — not a repurposed car setup.",
      },
    ],
    benefits: [
      {
        title: "Right truck for the vehicle",
        description:
          "Flatbed for AWD, low or damaged vehicles; wheel-lift for garages and tight alleys. We ask the right questions and send the right rig.",
      },
      {
        title: "Damage-free guarantee mindset",
        description:
          "Soft straps, wheel nets and careful loading on every job. Your car arrives exactly as it left.",
      },
      {
        title: "Transparent per-mile pricing",
        description:
          "Hook-up fee plus mileage, quoted in full before dispatch. No storage games, no surprise add-ons.",
      },
      {
        title: "Any destination",
        description:
          "Your mechanic, the dealership, a tire shop or your driveway — local or longer-distance tows welcome.",
      },
    ],
    steps: [
      {
        title: "Tell us about the vehicle",
        description:
          "Make, model, drivetrain and condition — this determines whether you get a flatbed or wheel-lift truck.",
      },
      {
        title: "Get a full quote",
        description:
          "Hook-up plus mileage to your destination, quoted before the truck rolls.",
      },
      {
        title: "We load it right",
        description:
          "Your operator positions, hooks and secures the vehicle properly — the step where cheap towing goes wrong.",
      },
      {
        title: "Delivered where you need it",
        description:
          "We confirm drop-off details and place the vehicle exactly where the shop or you want it.",
      },
    ],
    faqs: [
      {
        question: "How much does a tow cost in {city}?",
        answer:
          "Towing is priced as a hook-up fee plus a per-mile rate to your destination. You'll get the exact total on the phone before we dispatch — the quote is the final price, day or night.",
      },
      {
        question: "Do you have flatbed tow trucks?",
        answer:
          "Yes. Flatbeds are our default for all-wheel-drive, low-clearance and damaged vehicles. If your car needs one, that's what we send.",
      },
      {
        question: "Can you tow my car to any shop I choose?",
        answer:
          "Absolutely. You pick the destination — your regular mechanic, a dealership, a tire shop or your home. We never steer you to a shop you didn't choose.",
      },
      {
        question: "Can I ride along in the tow truck?",
        answer:
          "In most cases yes, one passenger can ride in the cab. Mention it when you call so the dispatcher confirms with your driver.",
      },
      {
        question: "Do you tow motorcycles and AWD vehicles?",
        answer:
          "Yes to both. Motorcycles ride on flatbeds with chocks and soft straps; AWD vehicles are always flat-towed to protect the drivetrain.",
      },
    ],
    related: ["roadside-assistance", "vehicle-recovery", "jump-start", "flat-tire-change"],
  },
  {
    slug: "jump-start",
    name: "Jump Start Service",
    shortName: "Jump Start",
    icon: Zap,
    excerpt:
      "Dead battery? A technician with a professional jump pack gets you started in minutes.",
    h1: "Car Jump Start Service in {city}, {stateAbbr}",
    heroLead:
      "Dead battery in {city}? We'll be there in about {arrival} with professional equipment — no cables, no second car needed.",
    metaTitle: "Jump Start Service {city}, {stateAbbr} | Dead Battery Help | Roadly",
    metaDescription:
      "Fast car jump start in {city}, 24/7. Professional dead battery service, avg. {arrival} arrival, safe for modern electronics. Call {phone}.",
    overview: [
      "A dead battery is the single most common reason cars won't start — and the fix takes minutes when the right equipment shows up. Roadly technicians carry commercial-grade jump packs that deliver clean, regulated power, safe for the sensitive electronics in modern vehicles. No flagging down strangers, no cheap cables, no guessing at polarity.",
      "We do more than clamp and go. Your technician checks the battery's voltage and charging behavior after the start, so you'll know whether this was a one-off (lights left on, a long airport stay) or a battery at the end of its life. If it's dying, we can replace it on the spot — most common sizes ride on the truck.",
      "Gas or diesel, car or truck, parking garage or expressway shoulder: if it has a 12-volt battery, we can start it.",
    ],
    situations: [
      {
        title: "Lights or accessories left on",
        description:
          "The classic. A healthy battery drained overnight starts right up and recharges as you drive.",
      },
      {
        title: "Cold snap killed the battery",
        description:
          "Freezing weather can cut battery power by a third or more — cold mornings are our busiest hours.",
      },
      {
        title: "Car sat unused too long",
        description:
          "Airport lots, street parking, work-from-home weeks — batteries self-drain when cars sit.",
      },
      {
        title: "Battery is simply old",
        description:
          "Most batteries last 3–5 years. If yours keeps dying, we can test and replace it on the spot.",
      },
      {
        title: "Clicking but not starting",
        description:
          "Rapid clicking usually means a weak battery; a single loud click may be the starter. We diagnose both.",
      },
    ],
    benefits: [
      {
        title: "Safe for modern vehicles",
        description:
          "Regulated, spike-free power that won't damage ECUs, infotainment or hybrid systems.",
      },
      {
        title: "Free battery health check",
        description:
          "Every jump includes a voltage and charging test, so you know if a replacement is coming.",
      },
      {
        title: "Replacement on the spot",
        description:
          "If the battery is done, we can usually install a new correct-fit battery in the same visit.",
      },
      {
        title: "Minutes, not hours",
        description:
          "Jump starts are our fastest call. Most customers are driving again within minutes of our arrival.",
      },
    ],
    steps: [
      {
        title: "Call with your location",
        description:
          "Street parking, garage or highway shoulder — tell us where the car is and what it's doing.",
      },
      {
        title: "Technician arrives equipped",
        description:
          "Commercial jump pack, protective gear and a battery tester on every truck.",
      },
      {
        title: "Safe start and health check",
        description:
          "We start the vehicle and test the battery and charging system while it runs.",
      },
      {
        title: "Drive off with a clear answer",
        description:
          "You'll know whether the battery is fine, fading or due for replacement — no guesswork.",
      },
    ],
    faqs: [
      {
        question: "Will a jump start damage my car's electronics?",
        answer:
          "Not the way we do it. Our jump packs deliver regulated power without the voltage spikes that make cable-to-cable jumps from another car risky for modern vehicles.",
      },
      {
        question: "How long does a jump start take?",
        answer:
          "The start itself takes a few minutes. With the battery health check included, most visits are done in under fifteen minutes from arrival.",
      },
      {
        question: "My car keeps needing jumps. What's wrong?",
        answer:
          "Repeated jump starts almost always mean the battery is at end of life, or something is draining it. We test for both and can replace the battery on the spot if needed.",
      },
      {
        question: "Can you jump start a diesel or a hybrid?",
        answer:
          "Yes. Our equipment handles diesel trucks' higher cranking demands, and our technicians know the correct jump points and procedures for hybrids.",
      },
      {
        question: "What if the jump start doesn't work?",
        answer:
          "Then the problem is likely the starter, alternator or fuel system — and we'll tow you to a shop in the same visit, with the jump attempt's cost applied toward the tow.",
      },
    ],
    related: ["battery-replacement", "roadside-assistance", "towing"],
  },
  {
    slug: "battery-replacement",
    name: "Battery Replacement",
    shortName: "Battery Replacement",
    icon: BatteryCharging,
    excerpt:
      "We deliver and install the right battery at your location — home, work or roadside.",
    h1: "Mobile Car Battery Replacement in {city}, {stateAbbr}",
    heroLead:
      "Skip the parts store. We bring the correct battery to you in {city} and install it on the spot — usually within {arrival}.",
    metaTitle: "Mobile Car Battery Replacement {city}, {stateAbbr} | Roadly",
    metaDescription:
      "Mobile car battery replacement in {city}. We deliver & install the right battery at your home, office or roadside — 24/7. Call {phone}.",
    overview: [
      "When a battery dies for good, the errand is worse than the part: get the car started somehow, drive to a store, hope they stock your size, and hope the parking-lot install goes well. Roadly removes the whole trip. Tell us your vehicle's year, make and model, and we arrive with the correct battery and install it where the car sits.",
      "We stock quality batteries in the most common group sizes and match cold-cranking amps to your vehicle and climate — which matters enormously in a place with real winters. Installation includes terminal cleaning, secure hold-down mounting, a charging system test, and responsible recycling of your old battery.",
      "Modern vehicles often need more than a swap: many require battery registration or coding so the charging system manages the new battery correctly. Our technicians handle that too, which is something a parking-lot favor can't do.",
    ],
    situations: [
      {
        title: "Battery won't hold a charge",
        description:
          "Needing a jump every morning means the battery is done. Replacement fixes it for years.",
      },
      {
        title: "Battery is 4–5 years old",
        description:
          "That's the typical lifespan — shorter in cold climates. Replacing on schedule beats getting stranded.",
      },
      {
        title: "Swollen case or corroded terminals",
        description:
          "Visible damage means replace it now, before it leaves you stuck or leaks acid.",
      },
      {
        title: "Battery warning light is on",
        description:
          "We test whether it's the battery or the alternator before selling you anything.",
      },
      {
        title: "Died in your own driveway",
        description:
          "The most common battery call there is — and the easiest for us to fix at your home.",
      },
    ],
    benefits: [
      {
        title: "Correct fit, guaranteed",
        description:
          "We confirm group size, CCA and terminal layout for your exact vehicle before we dispatch.",
      },
      {
        title: "Test first, replace second",
        description:
          "If the real problem is the alternator or a parasitic drain, we tell you — we don't sell batteries people don't need.",
      },
      {
        title: "Full professional install",
        description:
          "Terminal service, hold-down mounting, system registration where required, and old-battery recycling.",
      },
      {
        title: "Warranty included",
        description:
          "Every battery we install carries a nationwide manufacturer warranty, honored wherever you drive.",
      },
    ],
    steps: [
      {
        title: "Share your vehicle details",
        description:
          "Year, make, model and engine — enough to bring the exact battery your car needs.",
      },
      {
        title: "We test before we swap",
        description:
          "Battery, alternator and starter draw are checked so the diagnosis is right.",
      },
      {
        title: "Professional installation",
        description:
          "Clean terminals, correct torque, secure mounting and battery registration where the vehicle requires it.",
      },
      {
        title: "Old battery recycled",
        description:
          "We take the old unit for responsible recycling — nothing left for you to deal with.",
      },
    ],
    faqs: [
      {
        question: "How do I know it's the battery and not the alternator?",
        answer:
          "You often can't tell from the driver's seat — that's why we test both before replacing anything. If the alternator is the culprit, we'll tell you and help you get to a shop instead.",
      },
      {
        question: "Do you have my battery size in stock?",
        answer:
          "We stock the group sizes that fit the vast majority of cars, trucks and SUVs on American roads. Give us your year, make and model and the dispatcher confirms fit before the truck rolls.",
      },
      {
        question: "How long does mobile battery replacement take?",
        answer:
          "Most installations take 20–30 minutes on site. Vehicles that need battery registration or have batteries in trunks or under seats can take slightly longer.",
      },
      {
        question: "Is a mobile install more expensive than a store?",
        answer:
          "Pricing is comparable to retail plus a modest service call — and you skip the tow or the risky drive with a dying battery. You'll get the full price upfront when you call.",
      },
      {
        question: "What happens to my old battery?",
        answer:
          "We take it with us and recycle it through certified channels. Lead-acid batteries are among the most recycled products in the world, and yours won't end up in a landfill.",
      },
    ],
    related: ["jump-start", "roadside-assistance", "vehicle-inspection"],
  },
  {
    slug: "flat-tire-change",
    name: "Flat Tire Change",
    shortName: "Flat Tire",
    icon: Droplets,
    excerpt:
      "We mount your spare safely on the roadside — or tow you to a tire shop if the damage is worse.",
    h1: "Flat Tire Change Service in {city}, {stateAbbr}",
    heroLead:
      "Flat tire in {city}? Stay in the car — a technician will mount your spare safely, usually within {arrival}.",
    metaTitle: "Flat Tire Service {city}, {stateAbbr} | 24/7 Tire Change | Roadly",
    metaDescription:
      "Flat tire change in {city}, 24/7. We mount your spare roadside — safely, in minutes — or tow you to a tire shop. Call {phone} now.",
    overview: [
      "Changing a tire on the shoulder of a busy road is one of the most dangerous things an ordinary driver can do. Roadly exists so you never have to. Our technicians position their trucks to shield the work area, set up proper lighting and cones at night, and swap your flat for the spare with professional equipment in a fraction of the time.",
      "We handle the details people don't think about until they're stuck: seized lug nuts torqued on by the last shop, locking wheel nuts with missing keys, spares buried under trunk floors, and the correct torque spec when the spare goes on. If your spare is flat too — it happens more than you'd think — we can inflate it, or tow you straight to a tire shop.",
      "No spare at all? Many newer cars ship without one. We'll tow you to the tire shop of your choice so the day is still salvaged with one phone call.",
    ],
    situations: [
      {
        title: "Blowout on the highway",
        description:
          "Get well clear of traffic, stay in the vehicle and call. We handle the dangerous part.",
      },
      {
        title: "Pothole damage",
        description:
          "Bent rims and blown sidewalls from winter potholes are a specialty of Midwest roads.",
      },
      {
        title: "Slow leak finally gave out",
        description:
          "That tire you've been topping up every week picked its moment. We'll get the spare on.",
      },
      {
        title: "No spare or a flat spare",
        description:
          "We can inflate, plug where appropriate, or tow you to a tire shop — your call.",
      },
      {
        title: "Locking lug nut trouble",
        description:
          "Missing wheel-lock keys and seized lug nuts don't stop professional equipment.",
      },
    ],
    benefits: [
      {
        title: "Safety-first roadside setup",
        description:
          "Truck positioning, cones and lighting protect you and the technician on busy shoulders.",
      },
      {
        title: "Professional tools",
        description:
          "Impact tools for seized lug nuts, proper jacks for every vehicle, and torque wrenches for correct spare installation.",
      },
      {
        title: "Plan B included",
        description:
          "Unusable spare? The same call becomes a tow to your preferred tire shop — no starting over.",
      },
      {
        title: "Fast by design",
        description:
          "Most tire changes are done within 15 minutes of arrival, day or night.",
      },
    ],
    steps: [
      {
        title: "Get somewhere safe",
        description:
          "Pull as far from traffic as possible, turn on hazards and stay in the vehicle if you're on a highway.",
      },
      {
        title: "Call with your location",
        description:
          "Mile markers, exit numbers or cross streets help us reach you fastest.",
      },
      {
        title: "We swap the tire safely",
        description:
          "Protected work zone, professional equipment, correct torque on every lug.",
      },
      {
        title: "Follow-up guidance",
        description:
          "We'll tell you the safe speed and distance for your spare, and where to go next.",
      },
    ],
    faqs: [
      {
        question: "What if I don't have a spare tire?",
        answer:
          "No problem — many newer cars don't. We'll tow you to the tire shop of your choice, or to your home if you'd rather deal with it tomorrow.",
      },
      {
        question: "Can you repair the flat tire on the spot?",
        answer:
          "Simple tread punctures can sometimes be plugged as a temporary fix, and we can inflate a slow leak to get you to a shop. Sidewall damage always means the spare or a tow.",
      },
      {
        question: "How fast is a roadside tire change?",
        answer:
          "Once we arrive, most changes take 10–15 minutes. Seized lug nuts or buried spares add a little time — still far faster and safer than wrestling it yourself.",
      },
      {
        question: "How far can I drive on my spare?",
        answer:
          "Compact 'donut' spares are typically rated for about 50 miles at up to 50 mph. Your technician will check your specific spare and give you honest guidance before you drive off.",
      },
      {
        question: "Is it safe to wait in my car on the highway shoulder?",
        answer:
          "On a highway, yes — buckled up, in the vehicle, as far from the traffic side as possible. Our trucks position behind you as a shield when they arrive. On quiet streets, waiting outside away from the road is fine.",
      },
    ],
    related: ["towing", "roadside-assistance", "vehicle-recovery"],
  },
  {
    slug: "fuel-delivery",
    name: "Fuel Delivery",
    shortName: "Fuel Delivery",
    icon: Fuel,
    excerpt:
      "Ran out of gas? We bring fresh gasoline or diesel straight to your location, 24/7.",
    h1: "Emergency Fuel Delivery in {city}, {stateAbbr}",
    heroLead:
      "Out of gas in {city}? We'll bring enough fuel to reach a station — usually within {arrival}. No lecture, no judgment.",
    metaTitle: "Fuel Delivery {city}, {stateAbbr} | Out of Gas Help 24/7 | Roadly",
    metaDescription:
      "Emergency gas delivery in {city}. We bring gasoline or diesel to your location 24/7 — avg. {arrival} arrival. Out of fuel? Call {phone}.",
    overview: [
      "Running out of fuel happens to careful people. Gauges mis-read, traffic burns more than the trip computer promised, and 'I'll stop after this errand' becomes a car coasting to the shoulder. Roadly brings fuel to you — enough to comfortably reach the nearest station — anywhere in {city}, at any hour.",
      "We deliver regular gasoline and diesel in clean, sealed containers, and our technicians add it safely with proper equipment. If you drove a diesel dry, we know that some engines need a primed fuel system before they'll restart — our technicians handle that instead of leaving you cranking uselessly.",
      "One honest note: if the car still won't start after refueling, the problem may be a fuel pump that ran hot while starving. If that happens, we'll tow you to a shop in the same visit rather than leave you guessing.",
    ],
    situations: [
      {
        title: "Coasted to a stop on the expressway",
        description:
          "Stay in the car with hazards on. We'll bring fuel to the shoulder and get you moving.",
      },
      {
        title: "Misjudged the range",
        description:
          "The gauge said 30 miles; the traffic disagreed. It's the most common fuel call we take.",
      },
      {
        title: "Diesel ran dry",
        description:
          "Diesels often need fuel-system priming after running out — we bring the know-how with the fuel.",
      },
      {
        title: "Stranded far from a station",
        description:
          "Industrial areas and highway stretches can be miles from a pump. We close that gap.",
      },
      {
        title: "Wrong-fuel prevention",
        description:
          "Not sure what your rental or borrowed car takes? Ask when you call — we'll bring the right one.",
      },
    ],
    benefits: [
      {
        title: "Fresh, correct fuel",
        description:
          "Sealed containers, gasoline or diesel to match your vehicle — never stale gas from someone's garage.",
      },
      {
        title: "Safe handling",
        description:
          "Technicians add fuel with proper spouts and grounding practices, even on windy shoulders.",
      },
      {
        title: "Enough to get you there",
        description:
          "We bring enough fuel to reach a station comfortably — typically 2–3 gallons — included in the quoted price.",
      },
      {
        title: "Backup plan built in",
        description:
          "If the car won't restart after refueling, the same visit becomes a tow. No second dispatch.",
      },
    ],
    steps: [
      {
        title: "Call with your location and fuel type",
        description:
          "Gasoline or diesel, plus where you are — exits and mile markers help on highways.",
      },
      {
        title: "We load and roll",
        description:
          "The nearest truck picks up fresh fuel and heads your way with a live ETA.",
      },
      {
        title: "Safe refuel on site",
        description:
          "Your technician adds the fuel properly and makes sure the engine starts and runs.",
      },
      {
        title: "You're pointed to a station",
        description:
          "We'll tell you the nearest station on your route so you can fill up and move on.",
      },
    ],
    faqs: [
      {
        question: "How much fuel do you bring?",
        answer:
          "Typically 2–3 gallons — comfortably enough to reach a nearby station. The fuel itself is included in the price you're quoted on the phone.",
      },
      {
        question: "Do you deliver diesel?",
        answer:
          "Yes, both regular gasoline and diesel. Tell the dispatcher which your vehicle takes, and if you're not sure, we'll help you figure it out before anything goes in the tank.",
      },
      {
        question: "My car won't start even after adding fuel. Why?",
        answer:
          "Running dry can overheat the fuel pump or leave air in a diesel's fuel system. Our technicians can prime diesels on site; if a pump has failed, we'll tow you to a shop in the same visit.",
      },
      {
        question: "Is it bad for the car to run out of gas?",
        answer:
          "Occasionally, no lasting harm. But repeatedly running low forces the fuel pump to work hot and can shorten its life — worth knowing, not worth a lecture when you're stranded.",
      },
      {
        question: "Can you bring premium fuel?",
        answer:
          "We carry regular gasoline and diesel. A few gallons of regular is safe in virtually every gas engine, including those that recommend premium — top up with premium at the station.",
      },
    ],
    related: ["roadside-assistance", "towing", "jump-start"],
  },
  {
    slug: "car-lockout",
    name: "Car Lockout Service",
    shortName: "Car Lockout",
    icon: KeyRound,
    excerpt:
      "Locked out? Damage-free entry on virtually any vehicle, usually in minutes.",
    h1: "Car Lockout Service in {city}, {stateAbbr}",
    heroLead:
      "Keys locked in your car in {city}? We open doors without damage — usually within {arrival} of your call.",
    metaTitle: "Car Lockout {city}, {stateAbbr} | Locked Keys in Car | Roadly",
    metaDescription:
      "Locked keys in your car in {city}? Fast, damage-free car lockout service, 24/7. Avg. {arrival} arrival. Call {phone} — we'll get you in.",
    overview: [
      "Few feelings sink faster than seeing your keys on the seat as the door clicks shut. The good news: professional entry is quick and leaves no trace. Roadly technicians use the same specialized tools automotive locksmiths use — air wedges, long-reach tools and lock picks — to open your vehicle without harming the door, the paint, the weather seals or the electronics.",
      "That last part matters. Coat hangers and DIY videos cause real damage: scratched paint, bent window frames, torn seals that leak in the next rainstorm, and damaged wiring in doors packed with electronics. A professional entry costs far less than any of those repairs.",
      "Keys locked in the trunk, a fob dead or lost, a child or pet inside a locked car — we handle all of it, and we prioritize emergencies involving kids and pets ahead of everything else. We will ask you to verify ownership before we open the vehicle; it's how you'd want it to work if it were your car.",
    ],
    situations: [
      {
        title: "Keys visible on the seat",
        description:
          "The classic lockout. Damage-free entry usually takes just a few minutes.",
      },
      {
        title: "Keys locked in the trunk",
        description:
          "We open the cabin and use the trunk release or fold-down seats — no drilling, no damage.",
      },
      {
        title: "Child or pet locked inside",
        description:
          "Call 911 first if there's any distress — then us. These calls jump our queue, always.",
      },
      {
        title: "Dead key fob",
        description:
          "Many 'lockouts' are just a dead fob battery. We can get you in and often get you started.",
      },
      {
        title: "Car locked while running",
        description:
          "Remote starts and auto-lock features strand people regularly, especially in winter.",
      },
    ],
    benefits: [
      {
        title: "Damage-free methods",
        description:
          "Professional tools and trained hands — no scratched paint, bent frames or torn seals.",
      },
      {
        title: "Works on modern vehicles",
        description:
          "Push-button start, laser-cut keys, luxury makes — our techniques evolve with the cars.",
      },
      {
        title: "Ownership verified",
        description:
          "We check registration or ID before opening any vehicle. It protects you, too.",
      },
      {
        title: "Faster than a dealership",
        description:
          "Dealers can take days for key issues. We're measured in minutes for entry.",
      },
    ],
    steps: [
      {
        title: "Call with your location",
        description:
          "Parking garage, street, lot or driveway — and tell us if a child or pet is inside.",
      },
      {
        title: "Technician arrives with entry tools",
        description:
          "Equipped for your specific make and model's locks.",
      },
      {
        title: "Ownership check, then entry",
        description:
          "A quick ID/registration check, then damage-free entry — usually minutes.",
      },
      {
        title: "Back in your car",
        description:
          "We make sure you're in, started and set before we leave.",
      },
    ],
    faqs: [
      {
        question: "Will unlocking my car cause any damage?",
        answer:
          "No. Our technicians use professional air wedges and long-reach tools designed to open vehicles without marking paint, bending frames or tearing weather seals.",
      },
      {
        question: "What do I need to show to prove the car is mine?",
        answer:
          "A driver's license plus the registration or insurance card (which can be inside the car — we verify once it's open). If the car is borrowed or a rental, tell the dispatcher and we'll explain what works.",
      },
      {
        question: "My key fob won't work. Am I locked out?",
        answer:
          "Possibly not — most fobs hide a mechanical key for the driver's door, and a dead fob battery is a five-minute fix. Call us and we'll sort out which situation you're in.",
      },
      {
        question: "A child is locked in the car. What do I do?",
        answer:
          "If the child is in any distress or the weather is hot or freezing, call 911 immediately — they can break a window without liability. Then call us; child-in-car calls go to the front of our queue, no exceptions.",
      },
      {
        question: "Can you make me a new car key?",
        answer:
          "We focus on getting you back into your vehicle. For lost keys needing replacement and programming, we'll get you into the car and help you plan the cheapest path to a new key.",
      },
    ],
    related: ["roadside-assistance", "jump-start", "towing"],
  },
  {
    slug: "vehicle-recovery",
    name: "Vehicle Recovery",
    shortName: "Vehicle Recovery",
    icon: Car,
    excerpt:
      "Stuck in snow, mud, or a ditch? Winch-equipped trucks recover your vehicle without added damage.",
    h1: "Vehicle Recovery Service in {city}, {stateAbbr}",
    heroLead:
      "Off the road in {city}? Our winch-equipped trucks pull vehicles from snow, mud and ditches — carefully, 24/7.",
    metaTitle: "Vehicle Recovery {city}, {stateAbbr} | 24/7 Winch-Out | Roadly",
    metaDescription:
      "Stuck in snow, mud or a ditch near {city}? Professional winch-out & vehicle recovery, 24/7, without added damage. Call {phone} now.",
    overview: [
      "Recovery is different from towing. A tow moves a car that's on the pavement; recovery gets a car back to the pavement — out of a snowbank, a muddy shoulder, a ditch or a spot too tight to drive out of. It takes winches, rigging know-how and patience, because a careless pull can do more damage than the slide-off itself.",
      "Roadly recovery operators evaluate before they rig: where the vehicle sits, what it's resting on, which recovery points are safe to use, and what angle brings it out cleanly. Soft straps and proper attachment points mean no bent tow hooks, torn bumpers or damaged suspension components — the difference between professional recovery and a well-meaning friend with a pickup.",
      "Once you're out, we check the vehicle with you: tires, leaks, alignment feel. If it's driveable, you drive away. If the slide-off broke something, the same truck tows you to a shop.",
    ],
    situations: [
      {
        title: "Slid into a snowbank or off an icy street",
        description:
          "Winter's signature move. We winch you out and check the car before you drive on.",
      },
      {
        title: "Stuck in mud or soft ground",
        description:
          "Grass parking, construction zones and soft shoulders swallow wheels — spinning makes it worse.",
      },
      {
        title: "Dropped a wheel into a ditch",
        description:
          "A controlled-angle winch pull brings you out without tearing up the underside.",
      },
      {
        title: "High-centered on a curb or snow pile",
        description:
          "When the frame rests on the obstacle, driving out is impossible — lifting and pulling isn't, for us.",
      },
      {
        title: "Stuck in sand or gravel",
        description:
          "Lakefront lots and unpaved alleys claim their share of victims year-round.",
      },
    ],
    benefits: [
      {
        title: "Damage-conscious rigging",
        description:
          "Correct recovery points, soft straps and controlled winch pulls — no yanking, no chains on the bumper.",
      },
      {
        title: "Assessment before and after",
        description:
          "We plan the extraction before rigging, and check the vehicle with you after it's out.",
      },
      {
        title: "Equipment for real situations",
        description:
          "Winch-equipped trucks, recovery boards and rigging that handles everything from sedans to full-size SUVs.",
      },
      {
        title: "Tow standing by",
        description:
          "If the vehicle took damage, the recovery truck becomes your tow truck — one call, one visit.",
      },
    ],
    steps: [
      {
        title: "Stop spinning, call us",
        description:
          "Spinning wheels dig you deeper and cook the transmission. Set the brake and call.",
      },
      {
        title: "Describe the situation",
        description:
          "What you're stuck in, how deep, and which wheels — photos help if it's safe to take them.",
      },
      {
        title: "Planned, controlled extraction",
        description:
          "Your operator rigs to proper recovery points and winches the vehicle out on the best line.",
      },
      {
        title: "Vehicle check before you go",
        description:
          "Quick walk-around together — tires, leaks, steering — so you leave with confidence.",
      },
    ],
    faqs: [
      {
        question: "Will winching damage my car?",
        answer:
          "Not when it's done right. We attach only to manufacturer recovery points with appropriate straps, and pull on a planned line. The damage horror stories almost always involve chains, bumpers and impatience.",
      },
      {
        question: "What should I do while I wait?",
        answer:
          "Stop trying to drive out — spinning digs the car deeper and overheats the transmission. Stay warm, keep the exhaust pipe clear if you're running the engine in snow, and stay visible.",
      },
      {
        question: "How much does a winch-out cost?",
        answer:
          "It depends on how stuck the vehicle is and the rigging required. Simple pulls cost about as much as a local tow; you'll get an upfront quote when you call, refined on scene if conditions differ.",
      },
      {
        question: "Can you recover AWD and 4x4 vehicles?",
        answer:
          "Yes — being AWD doesn't prevent getting stuck, it just changes the technique. We recover everything from compact cars to full-size trucks and SUVs.",
      },
      {
        question: "My car seems fine after the recovery. Should I still get it checked?",
        answer:
          "We do a walk-around with you on scene. If the impact was more than a gentle slide — a curb strike, a hard drop into a ditch — an alignment check at a shop is cheap insurance.",
      },
    ],
    related: ["towing", "roadside-assistance", "flat-tire-change"],
  },
  {
    slug: "vehicle-inspection",
    name: "Vehicle Inspection",
    shortName: "Vehicle Inspection",
    icon: SearchCheck,
    excerpt:
      "Mobile pre-purchase and safety inspections — an independent expert eye, wherever the car is.",
    h1: "Mobile Vehicle Inspection in {city}, {stateAbbr}",
    heroLead:
      "Buying a used car in {city}? Get an independent mobile inspection before you pay — we come to the seller.",
    metaTitle: "Vehicle Inspection {city}, {stateAbbr} | Pre-Purchase | Roadly",
    metaDescription:
      "Mobile vehicle inspection in {city} — independent pre-purchase & safety checks at the seller's location. Book yours: call {phone}.",
    overview: [
      "A used car is one of the largest purchases most people make with the least information. The seller knows the car's history; you get twenty minutes and a test drive. A professional pre-purchase inspection levels that field — an independent technician examines the vehicle top to bottom and gives you a written report before money changes hands.",
      "Because our inspections are mobile, the car doesn't need to go anywhere. We meet the seller — private driveway, dealership lot or office parking garage — and spend a thorough session on the vehicle: body panels and paint depth for hidden accident repair, underbody rust and frame condition, fluid condition, tire and brake life, suspension play, electronics, and an OBD scan for stored and pending trouble codes.",
      "The report is yours, not the seller's. Sometimes it confirms the car is a solid buy; sometimes it saves you from a flood car with new carpet. Either way, a few hundred dollars of inspection routinely changes negotiations by thousands.",
    ],
    situations: [
      {
        title: "Buying from a private seller",
        description:
          "No dealership recourse, no warranty — an independent inspection is your only safety net.",
      },
      {
        title: "Buying a car sight-unseen",
        description:
          "Relocating or buying remotely? We're your eyes on the ground before you wire anything.",
      },
      {
        title: "Off-lease or auction vehicle",
        description:
          "Clean photos can hide worn brakes, tired suspension and patched paint. We find what photos don't show.",
      },
      {
        title: "End-of-warranty checkup",
        description:
          "Find issues while the manufacturer still pays for them — weeks before warranty expiry, not after.",
      },
      {
        title: "Post-repair verification",
        description:
          "Just got major work done? An independent check confirms the repair was done right.",
      },
    ],
    benefits: [
      {
        title: "Truly independent",
        description:
          "We don't sell cars and we don't do the repairs we recommend — the report has no thumb on the scale.",
      },
      {
        title: "We come to the car",
        description:
          "Seller's driveway, dealer lot or garage — no need to talk a stranger into driving to your mechanic.",
      },
      {
        title: "Written, photo-documented report",
        description:
          "Findings with photos, severity ratings and estimated repair context — real leverage in negotiation.",
      },
      {
        title: "Midwest-specific eyes",
        description:
          "Rust, salt damage and flood histories are regional specialties. We know where to look.",
      },
    ],
    steps: [
      {
        title: "Book with the vehicle details",
        description:
          "Year, make, model and the seller's location — we coordinate timing with them if you'd like.",
      },
      {
        title: "Thorough on-site inspection",
        description:
          "Body, underbody, engine bay, fluids, tires, brakes, electronics, OBD scan and a road test where possible.",
      },
      {
        title: "Written report with photos",
        description:
          "Clear findings ranked by severity, delivered the same day.",
      },
      {
        title: "Decide with confidence",
        description:
          "Buy it, negotiate with evidence, or walk away — you'll know which one the car deserves.",
      },
    ],
    faqs: [
      {
        question: "What does the inspection cover?",
        answer:
          "Exterior and paint (including accident-repair detection), underbody and frame rust, engine bay and fluid condition, tires and brakes, suspension and steering, lights and electronics, plus an OBD-II scan for stored and pending codes. A road test is included when the seller permits it.",
      },
      {
        question: "How long does it take and when do I get the report?",
        answer:
          "Plan on 60–90 minutes at the vehicle. You receive the written, photo-documented report the same day — usually within a couple of hours of the inspection.",
      },
      {
        question: "Do you inspect cars at dealerships?",
        answer:
          "Yes, and reputable dealers allow it readily. A dealer who refuses an independent inspection is telling you something worth hearing.",
      },
      {
        question: "Can the inspection tell me what the car is worth?",
        answer:
          "The report documents condition, which is the biggest driver of value. Most clients use it to negotiate — documented findings routinely move prices by far more than the inspection costs.",
      },
      {
        question: "Do you do safety inspections for cars I already own?",
        answer:
          "Yes — pre-road-trip checks, end-of-warranty inspections and second opinions after major repairs are all common requests.",
      },
    ],
    related: ["battery-replacement", "roadside-assistance", "towing"],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
