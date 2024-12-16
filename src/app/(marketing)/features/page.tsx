// app/(marketing)/features/page.tsx
import { Button } from "~/components/ui/button";
import {
  GitPullRequest,
  Users,
  Clock,
  BarChart,
  Zap,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Features - ReviewFlow",
  description:
    "Discover how ReviewFlow can streamline your code review process.",
};

export default function FeaturesPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-b from-slate-50 to-white px-4 py-20 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto max-w-4xl space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Features that make code reviews better
          </h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to streamline your review process and boost team
            productivity.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="/signup">Get Started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features */}
      {features.map((feature, index) => (
        <section
          key={feature.title}
          className={`w-full px-4 py-20 ${
            index % 2 === 1 ? "bg-slate-50 dark:bg-slate-900" : ""
          }`}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div
                className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}
              >
                <feature.icon className="h-12 w-12 text-primary" />
                <h2 className="text-3xl font-bold">{feature.title}</h2>
                <p className="text-xl text-muted-foreground">
                  {feature.description}
                </p>
                <ul className="space-y-4">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                <div className="aspect-video rounded-lg bg-gray-200 dark:bg-gray-800" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="w-full px-4 py-20">
        <div className="container mx-auto max-w-4xl space-y-6 text-center">
          <h2 className="text-3xl font-bold">
            Ready to transform your code review process?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of teams who have improved their workflow with
            ReviewFlow.
          </p>
          <div className="pt-4">
            <Button asChild size="lg">
              <Link href="/signup">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Smart Review Assignment",
    description: "Automatically assign the right reviewer at the right time.",
    icon: Users,
    points: [
      "AI-powered reviewer selection based on expertise and availability",
      "Workload balancing across team members",
      "Time zone aware scheduling",
      "Custom assignment rules and preferences",
    ],
  },
  {
    title: "GitHub Integration",
    description: "Seamlessly integrates with your existing workflow.",
    icon: GitPullRequest,
    points: [
      "One-click installation for your repositories",
      "Automatic PR detection and assignment",
      "Custom review rules and workflows",
      "Branch protection and status checks",
    ],
  },
  {
    title: "Review Analytics",
    description: "Gain insights into your review process.",
    icon: BarChart,
    points: [
      "Track review times and bottlenecks",
      "Team performance metrics",
      "Review quality insights",
      "Custom reports and dashboards",
    ],
  },
  {
    title: "SLA Monitoring",
    description: "Ensure timely reviews and maintain momentum.",
    icon: Clock,
    points: [
      "Customizable SLA targets",
      "Real-time monitoring and alerts",
      "Review aging notifications",
      "Team performance tracking",
    ],
  },
  {
    title: "Quick Setup",
    description: "Get started in minutes, not hours.",
    icon: Zap,
    points: [
      "Simple GitHub App installation",
      "Guided team onboarding",
      "Pre-built workflows and templates",
      "No complex configuration required",
    ],
  },
];
