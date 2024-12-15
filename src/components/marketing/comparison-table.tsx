// components/marketing/comparison-table.tsx
import { Check, Minus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const features = [
  {
    name: "Team Members",
    free: "Up to 5",
    pro: "Up to 15",
    enterprise: "Unlimited",
  },
  {
    name: "GitHub Integration",
    free: true,
    pro: true,
    enterprise: true,
  },
  {
    name: "Review Assignment",
    free: "Basic",
    pro: "Smart",
    enterprise: "Custom",
  },
  {
    name: "Analytics",
    free: "Basic",
    pro: "Advanced",
    enterprise: "Custom",
  },
  {
    name: "SLA Monitoring",
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    name: "Custom Workflows",
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    name: "Priority Support",
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    name: "API Access",
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    name: "SSO/SAML",
    free: false,
    pro: false,
    enterprise: true,
  },
];

export function ComparisonTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Features</TableHead>
          <TableHead>Free</TableHead>
          <TableHead>Pro</TableHead>
          <TableHead>Enterprise</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {features.map((feature) => (
          <TableRow key={feature.name}>
            <TableCell className="font-medium">{feature.name}</TableCell>
            <TableCell>
              {typeof feature.free === "boolean" ? (
                feature.free ? (
                  <Check className="h-4 w-4 text-primary" />
                ) : (
                  <Minus className="h-4 w-4 text-muted-foreground" />
                )
              ) : (
                feature.free
              )}
            </TableCell>
            <TableCell>
              {typeof feature.pro === "boolean" ? (
                feature.pro ? (
                  <Check className="h-4 w-4 text-primary" />
                ) : (
                  <Minus className="h-4 w-4 text-muted-foreground" />
                )
              ) : (
                feature.pro
              )}
            </TableCell>
            <TableCell>
              {typeof feature.enterprise === "boolean" ? (
                feature.enterprise ? (
                  <Check className="h-4 w-4 text-primary" />
                ) : (
                  <Minus className="h-4 w-4 text-muted-foreground" />
                )
              ) : (
                feature.enterprise
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
