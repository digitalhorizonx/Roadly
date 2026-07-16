import type { FaqItem } from "./types";

/**
 * General company FAQs shown on the homepage and /faq.
 * Tokens are localized with the default city where relevant.
 */
export const generalFaqs: FaqItem[] = [
  {
    question: "How quickly can Roadly reach me?",
    answer:
      "Average arrival in {city} is {arrival}, and often faster near major expressways. When you call, the dispatcher gives you a realistic ETA for your exact location — and we keep you updated by text while the truck is en route.",
  },
  {
    question: "Are you really available 24/7?",
    answer:
      "Yes — nights, weekends and holidays, with the same pricing around the clock. Breakdowns don't wait for business hours, so there is always a dispatcher answering and trucks on the road.",
  },
  {
    question: "Do I need a membership to use Roadly?",
    answer:
      "No. Roadly is pay-per-use: call when you need help, get an upfront price, and pay only for that service. No annual fees, no waiting periods, no fine print.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Every job is quoted upfront on the phone before a truck is dispatched, and the quote is the final price. Simple services like jump starts and lockouts cost less than towing; there are no hidden after-hours surcharges.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "All major credit and debit cards, Apple Pay and Google Pay, paid on completion. You'll receive an itemized receipt by email or text — handy if your insurance reimburses roadside costs.",
  },
  {
    question: "Will my insurance cover the service?",
    answer:
      "Many auto policies include roadside or towing reimbursement. We can't bill your insurer directly, but our itemized receipts are accepted for reimbursement claims — check your policy or ask your agent.",
  },
  {
    question: "Are your drivers licensed and insured?",
    answer:
      "Yes. Every Roadly operator is licensed, background-checked and fully insured, and our trucks carry commercial coverage. You'll get the driver's name and vehicle description before they arrive.",
  },
  {
    question: "What should I do while I wait for help?",
    answer:
      "On a highway: stay buckled inside the vehicle, well off the travel lanes, with hazards on. On a quiet street: waiting outside, away from traffic, is fine. Keep your phone handy — your driver may call to confirm details.",
  },
];
