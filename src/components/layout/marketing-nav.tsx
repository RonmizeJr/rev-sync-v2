// components/layout/marketing-nav.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import { SignedIn, UserButton, SignedOut } from "@clerk/nextjs";
import { ModeToggle } from "../mode-toggle";

const routes = [
  {
    href: "/features",
    label: "Features",
  },
  {
    href: "/pricing",
    label: "Pricing",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center space-x-6 md:flex md:bg-background md:text-foreground">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === route.href ? "text-primary" : "text-muted-foreground",
          )}
        >
          {route.label}
        </Link>
      ))}
      <div className="flex items-center space-x-4">
        <SignedOut>
          <ModeToggle />
          <Link href="/login">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">Get Started</Button>
          </Link>
        </SignedOut>
        <SignedIn>
          <ModeToggle />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
