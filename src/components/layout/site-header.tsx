// components/layout/site-header.tsx
import Link from "next/link";
import { MainNav } from "~/components/layout/marketing-nav";
import { UserNav } from "~/components/layout/user-nav";
import { Logo } from "~/components/layout/logo";
import { MobileNav } from "~/components/layout/mobile-nav";
import { ModeToggle } from "~/components/ui/mode-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="hidden md:flex">
            <Logo />
          </Link>
          <MainNav />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ModeToggle />
            <UserNav />
          </nav>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
