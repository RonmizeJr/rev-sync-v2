// app/(marketing)/about/page.tsx
import { Button } from "~/components/ui/button";
import { TeamMember, OurTeam } from "~/components/about/team";
import { Values } from "~/components/about/values";
import Link from "next/link";

export const metadata = {
  title: "About - RevSync",
  description:
    "Our mission is to make code reviews efficient, enjoyable, and educational for development teams everywhere.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-slate-50 to-white px-4 py-20 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto max-w-4xl space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Making Code Reviews Better
          </h1>
          <p className="text-xl text-muted-foreground">
            Our mission is to make code reviews efficient, enjoyable, and
            educational for development teams everywhere.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full px-4 py-20">
        <div className="container mx-auto max-w-4xl space-y-6">
          <h2 className="mb-8 text-center text-3xl font-bold">Our Story</h2>
          <p className="text-lg text-muted-foreground">
            RevSync started from a common frustration: code reviews were
            becoming bottlenecks. Teams were growing, codebases were expanding,
            but the review process wasn&apos;t scaling.
          </p>
          <p className="text-lg text-muted-foreground">
            We built RevSync to solve this problem, focusing on intelligent
            automation and team collaboration. Today, we help hundreds of teams
            streamline their review process, leading to faster deployments and
            better code quality.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <Values />

      {/* Team Section */}
      <OurTeam />

      {/* CTA Section */}
      <section className="w-full bg-slate-50 px-4 py-20 dark:bg-slate-900">
        <div className="container mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-3xl font-bold">Join Us on Our Mission</h2>
          <p className="text-xl text-muted-foreground">
            Start improving your team&apos;s code review process today.
          </p>
          <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
