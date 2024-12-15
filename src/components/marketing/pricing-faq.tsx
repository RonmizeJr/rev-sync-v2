// components/marketing/pricing-faq.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the free trial work?",
    answer:
      "Start with our 14-day free trial of the Pro plan with full access to all features. No credit card required and you can cancel anytime. If you don't cancel before the trial ends, you'll be automatically enrolled in the plan you selected.",
  },
  {
    question: "What happens when I upgrade or downgrade?",
    answer:
      "You can change your plan at any time. When upgrading, the new price will be prorated based on the time remaining in your billing period. When downgrading, the new price will take effect at the start of your next billing period.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with ReviewFlow for any reason, contact our support team within 30 days of your purchase for a full refund.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express) through Stripe. For Enterprise plans, we also support invoicing and bank transfers.",
  },
  {
    question: "Is there a limit on repositories?",
    answer:
      "Free plans include up to 3 repositories. Pro plans support up to 10 repositories. Enterprise plans have unlimited repository connections. Additional repositories can be added to Pro plans for an extra fee.",
  },
  {
    question: "Can I use ReviewFlow with private repositories?",
    answer:
      "Yes, ReviewFlow works with both public and private repositories. Our GitHub integration maintains your repository's privacy settings and security.",
  },
  {
    question: "Do you offer team discounts?",
    answer:
      "Yes, we offer discounts for annual billing (save 20%). For Enterprise customers, we provide custom pricing based on your team's size and needs. Contact our sales team to learn more.",
  },
  {
    question: "How does support work?",
    answer:
      "Free plans include community support. Pro plans include email support with 24-hour response time. Enterprise plans include dedicated support with custom SLAs and a dedicated account manager.",
  },
];

export function PricingFAQ() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
