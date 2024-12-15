// app/(marketing)/pricing/page.tsx
import { PricingCards } from "~/components/marketing/pricing-card";
import { PricingFAQ } from "~/components/marketing/pricing-faq";
import Link from "next/link";
import { ComparisonTable } from "~/components/marketing/comparison-table";
import { Button } from "~/components/ui/button";

export const metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for teams of all sizes.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center py-20">
      {/* Hero Section */}
      <div className="mb-16 space-y-4 text-center">
        <h1 className="text-4xl font-bold md:text-6xl">
          Simple, transparent pricing
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Start free and scale as your team grows. No hidden fees or surprises.
        </p>
      </div>

      {/* Pricing Cards */}
      <PricingCards />

      {/* Comparison Table */}
      <div className="mt-20 w-full max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Compare Plans</h2>
        <ComparisonTable />
      </div>

      {/* FAQ Section */}
      <div className="mt-20 w-full max-w-3xl px-4">
        <PricingFAQ />
      </div>

      {/* CTA Section */}
      <div className="mt-20 space-y-4 text-center">
        <h3 className="text-2xl font-bold">
          Ready to streamline your code reviews?
        </h3>
        <p className="text-muted-foreground">
          Get started with a 14-day free trial. No credit card required.
        </p>
        <Button asChild size="lg">
          <Link href="/signup">Start Free Trial</Link>
        </Button>
      </div>
    </div>
  );
}
