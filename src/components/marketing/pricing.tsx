// components/marketing/pricing.tsx
import { Check } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

const plans = [
  {
    name: "Free",
    description: "Perfect for small teams getting started",
    price: "$0",
    features: [
      "Up to 5 team members",
      "Basic review assignment",
      "GitHub integration",
      "Email notifications",
      "Basic analytics",
      "Community support",
    ],
    callToAction: "Get Started",
    href: "/signup",
  },
  {
    name: "Pro",
    description: "For growing teams that need more",
    price: "$29",
    popular: true,
    features: [
      "Up to 15 team members",
      "Smart review assignment",
      "Priority reviews",
      "Advanced analytics",
      "Custom workflows",
      "Slack integration",
      "Priority email support",
      "Review SLA monitoring",
    ],
    callToAction: "Start Free Trial",
    href: "/signup?plan=pro",
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    price: "Custom",
    features: [
      "Unlimited team members",
      "Custom integrations",
      "Advanced security",
      "Audit logs",
      "Dedicated support",
      "SLA guarantees",
      "Custom contracts",
      "On-premise option",
    ],
    callToAction: "Contact Sales",
    href: "/contact",
  },
];

export function Pricing() {
  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
          Simple, transparent pricing
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Start free and scale as your team grows
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={plan.popular ? "relative border-primary" : ""}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                  Most Popular
                </span>
              </div>
            )}

            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="space-y-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && (
                  <span className="text-muted-foreground">/month</span>
                )}
              </div>

              <ul className="min-h-[320px] space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                asChild
              >
                <a href={plan.href}>{plan.callToAction}</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-[58rem] text-center">
        <h3 className="mb-4 text-xl font-bold">Frequently Asked Questions</h3>
        <div className="grid gap-8 text-left sm:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question} className="space-y-2">
              <h4 className="font-medium">{faq.question}</h4>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "How does the free trial work?",
    answer:
      "Start with our 14-day free trial of the Pro plan. No credit card required. Cancel anytime.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Charges are prorated.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards and can arrange bank transfers for enterprise customers.",
  },
  {
    question: "Do you offer custom pricing?",
    answer:
      "Yes, contact our sales team for custom pricing if you have specific needs or a large team.",
  },
];
