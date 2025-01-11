"use client";
import Link from "next/link";
import { cn } from "@/app/lib/utils";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
              <span className="hidden font-bold lg:inline-block">
                StellarUI
              </span>
            </Link>
            <nav className="flex items-center gap-4  xl:gap-6">
              <Link
                href="/docs"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === "/docs"
                    ? "text-foreground"
                    : "text-foreground/80"
                )}
              >
                Docs
              </Link>
              <Link
                href="/docs/components"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/docs/components") &&
                    !pathname?.startsWith("/docs/component/chart")
                    ? "text-foreground"
                    : "text-foreground/80"
                )}
              >
                Components
              </Link>
              <Link
                href="/blocks"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/blocks")
                    ? "text-foreground"
                    : "text-foreground/80"
                )}
              >
                Blogs
              </Link>
              <Link
                href="/playground"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname?.startsWith("/playground")
                    ? "text-foreground"
                    : "text-foreground/80"
                )}
              >
                Playground
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none"></div>
            <nav className="flex items-center gap-0.5">
              <button>Hello</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
