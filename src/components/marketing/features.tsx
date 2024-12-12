// components/marketing/features.tsx
import {
  BarChart3,
  GitPullRequest,
  Clock,
  Users,
  ZapIcon,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    title: "Smart Assignment",
    description:
      "Automatically assigns reviewers based on expertise, workload, and availability to ensure balanced distribution.",
    icon: Users,
  },
  {
    title: "Review Scheduling",
    description:
      "Intelligently schedules reviews across different time zones to optimize team productivity.",
    icon: Clock,
  },
  {
    title: "GitHub Integration",
    description:
      "Seamlessly integrates with your GitHub workflow. Just install and let ReviewFlow handle the rest.",
    icon: GitPullRequest,
  },
  {
    title: "Analytics & Insights",
    description:
      "Track review metrics, identify bottlenecks, and make data-driven decisions to improve your process.",
    icon: BarChart3,
  },
  {
    title: "Quick Setup",
    description:
      "Get started in minutes with zero configuration. No complex setup or training required.",
    icon: ZapIcon,
  },
  {
    title: "SLA Monitoring",
    description:
      "Set and monitor review time targets to ensure timely feedback and maintain team velocity.",
    icon: CheckCircle2,
  },
];

export function Features() {
  return (
    <section className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need to streamline your code review process
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="flex flex-col justify-between">
            <CardHeader>
              <div className="flex items-center gap-4">
                <feature.icon className="h-8 w-8 text-primary" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
