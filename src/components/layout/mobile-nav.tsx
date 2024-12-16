// components/layout/mobile-nav.tsx
"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Button } from "~/components/ui/button";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { cn } from "~/lib/utils";

const routes = [
  {
    href: "/reviews",
    label: "Reviews",
    pattern: /^\/reviews/,
  },
  {
    href: "/settings/team",
    label: "Team",
    pattern: /^\/settings\/team/,
  },
  {
    href: "/settings/github",
    label: "GitHub",
    pattern: /^\/settings\/github/,
  },
  {
    href: "/settings/profile",
    label: "Profile",
    pattern: /^\/settings\/profile/,
  },
  {
    href: "/settings",
    label: "Settings",
    pattern: /^\/settings$/,
  },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="w-10 px-0 dark:text-foreground md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="px-2 py-6">
          <Logo />
          <nav className="mt-6 flex flex-col space-y-2">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center rounded-lg px-3 py-2 text-lg hover:bg-accent",
                  route.pattern.test(pathname)
                    ? "bg-accent font-medium text-primary"
                    : "text-muted-foreground",
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
