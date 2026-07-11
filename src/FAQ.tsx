import { useState } from "react";

const faqs = [
  {
    question: "How long does a full set take?",
    answer:
      "Most full sets take between 2 and 3 hours depending on the style you choose and the condition of your natural lashes.",
  },
  {
    question: "How long do lash extensions last?",
    answer:
      "With proper aftercare, lash extensions usually last between 2–4 weeks. We recommend infills every 2–3 weeks.",
  },
  {
    question: "How should I prepare for my appointment?",
    answer:
      "Please arrive with clean lashes free from makeup, oils and strip lash glue. Avoid caffeine immediately before your appointment if possible.",
  },
  {
    question: "Can I wear makeup afterwards?",
    answer:
      "Yes, but avoid oil-based products around your eyes and do not get your lashes wet for the first 24 hours.",
  },
  {
    question: "Do you offer infills?",
    answer:
      "Yes. We offer infills for all lash styles. Regular infills help keep your lashes looking full and fresh.",
  },
  {
    question: "What happens if I'm late?",
    answer:
      "Clients arriving more than 10 minutes late may need to have their appointment shortened or rescheduled depending on availability.",
  },
  {
    question: "Do I need a patch test?",
    answer:
      "Patch tests may be recommended for new clients or anyone with sensitive skin or allergies.",
  },
  {
    question: "How do I book?",
    answer:
      "Simply complete the booking form on this website. Once we receive your request, we'll contact you to confirm your appointment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq">
      <p className="sectionTag">FREQUENTLY ASKED QUESTIONS</p>
      <h2>Everything You Need To Know</h2>

      <div className="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="faqItem" key={faq.question}>
            <button
              className="faqQuestion"
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            <div
              className={openIndex === index ? "faqAnswer open" : "faqAnswer"}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
