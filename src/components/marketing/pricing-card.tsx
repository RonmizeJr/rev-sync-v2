// components/marketing/pricing-card.tsx
import { CheckCircle2 } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { cn } from "~/lib/utils";
import Link from "next/link";

interface PricingProps {
  data: {
    title: string;
    description: string;
    price: string;
    duration: string;
    highlighted?: boolean;
    features: string[];
    ctaText: string;
    ctaLink: string;
  };
}

export function PricingCards() {
  const plans = [
    {
      title: "Free",
      description: "Perfect for small teams getting started",
      price: "$0",
      duration: "/month",
      features: [
        "Up to 5 team members",
        "Basic review assignment",
        "GitHub integration",
        "Email notifications",
        "Basic analytics",
        "Community support",
      ],
      ctaText: "Get Started",
      ctaLink: "/signup",
    },
    {
      title: "Pro",
      description: "For growing teams that need more",
      price: "$29",
      duration: "/month",
      highlighted: true,
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
      ctaText: "Start Free Trial",
      ctaLink: "/signup?plan=pro",
    },
    {
      title: "Enterprise",
      description: "For large organizations with custom needs",
      price: "Custom",
      duration: "",
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
      ctaText: "Contact Sales",
      ctaLink: "/contact",
    },
  ];

  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
      {plans.map((plan) => (
        <PricingCard key={plan.title} data={plan} />
      ))}
    </div>
  );
}

function PricingCard({ data }: PricingProps) {
  return (
    <Card
      className={cn(
        "flex flex-col",
        data.highlighted && "border-primary shadow-lg",
      )}
    >
      <CardHeader>
        <CardTitle className="text-xl">{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="mb-6">
          <span className="text-4xl font-bold">{data.price}</span>
          <span className="ml-1 text-muted-foreground">{data.duration}</span>
        </div>
        <ul className="mb-6 space-y-2">
          {data.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className="w-full"
          variant={data.highlighted ? "default" : "outline"}
        >
          <Link href={data.ctaLink}>{data.ctaText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
