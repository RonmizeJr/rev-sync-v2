// app/(marketing)/page.tsx
import Link from "next/link";
import { ArrowRight, Github, CheckCircle2 } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Features } from "~/components/marketing/features";
import { Testimonials } from "~/components/marketing/testimonials";
import { Pricing } from "~/components/marketing/pricing";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-20 dark:from-slate-950 dark:to-slate-900 md:py-32">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h1 className="dark:text-gradient-to-r text-4xl font-bold tracking-tight dark:text-white md:text-6xl">
              Code Reviews,{" "}
              <span className="text-primary">Automatically Organized</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              RevSync intelligently assigns and schedules code reviews,
              eliminating bottlenecks and ensuring timely feedback for your
              team.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/signup">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-4 w-4" />
                Connect GitHub
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mx-auto mt-20 grid max-w-4xl gap-8 dark:text-white md:grid-cols-3">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">50%</h2>
              <p className="text-muted-foreground">Faster Review Time</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">10k+</h3>
              <p className="text-muted-foreground">PRs Reviewed</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-muted-foreground">Teams Trust Us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <Features />

      {/* Integration Section */}
      <section className="bg-slate-50 px-4 py-20 dark:bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                Seamless GitHub Integration
              </h2>
              <p className="text-lg text-muted-foreground">
                Connect your GitHub repositories and start automating your code
                review process in minutes. No complex setup required.
              </p>
              <ul className="space-y-4">
                {integrationFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg bg-gray-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Pricing */}
      <Pricing />

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-3xl space-y-8 text-center">
          <h2 className="text-3xl font-bold">
            Ready to streamline your code reviews?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of teams who have improved their review process with
            ReviewFlow.
          </p>
          <Button asChild size="lg">
            <Link href="/signup">
              Get Started for Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}

const integrationFeatures = [
  "Automatic PR detection and assignment",
  "Custom review rules and workflows",
  "Branch protection rules",
  "PR status checks",
  "Review reminders and notifications",
];
