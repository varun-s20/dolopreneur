"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const links = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/playbooks", label: "Playbooks" },
  { href: "/pricing", label: "Pricing" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const pathname = usePathname();

  // Close on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while open.
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className="sticky top-0 z-40 w-full border-b border-ink/[0.08] bg-bg/85 backdrop-blur-md"
        style={{ height: "var(--nav-h)" }}
      >
        <div className="container-page flex h-full items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-ink"
            aria-label="Dolopreneur home"
          >
            <Logo className="h-8 w-8" />
            <span className="text-[15px] font-semibold tracking-tight md:text-base">
              Dolopreneur
            </span>
          </Link>

          {/* Desktop links */}
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {links.map((l) => {
                const isHashLink = l.href.includes("#");
                const isActive = !isHashLink && pathname.startsWith(l.href);
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "relative inline-flex items-center text-[14px] tracking-tight transition-colors",
                        isActive ? "text-ink" : "text-ink/60 hover:text-ink",
                      )}
                    >
                      {l.label}
                      {isActive && (
                        <span
                          aria-hidden
                          className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-3 md:gap-5">
            <Link
              href="/contact"
              className="hidden text-[14px] text-ink/65 transition-colors hover:text-ink sm:inline-flex"
            >
              Sign in
            </Link>
            <Button href="/contact" variant="primary" size="sm" className="hidden md:inline-flex">
              Book a demo
            </Button>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-md text-ink transition-colors hover:bg-ink/[0.06] md:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer, radial wipe from the hamburger corner */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            initial={
              reduced ? { opacity: 0 } : { clipPath: "circle(0% at 100% 0%)" }
            }
            animate={
              reduced ? { opacity: 1 } : { clipPath: "circle(150% at 100% 0%)" }
            }
            exit={
              reduced ? { opacity: 0 } : { clipPath: "circle(0% at 100% 0%)" }
            }
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-surface-dark text-bg md:hidden"
          >
            <div
              className="container-page flex items-center justify-between"
              style={{ height: "var(--nav-h)" }}
            >
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 text-bg"
                aria-label="Dolopreneur home"
              >
                <Logo className="h-8 w-8" />
                <span className="text-[15px] font-semibold tracking-tight">
                  Dolopreneur
                </span>
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-md text-bg transition-colors hover:bg-bg/10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <motion.div
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="container-page pt-6"
            >
              <ul className="space-y-1">
                {links.map((l) => {
                  const isActive = pathname.startsWith(l.href);
                  return (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className={cn(
                          "flex items-center justify-between border-b border-bg/10 py-5 text-3xl",
                          isActive ? "text-bg" : "text-bg/65",
                        )}
                      >
                        <span>{l.label}</span>
                        {isActive && (
                          <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-10 grid gap-3">
                <Button href="/contact" variant="primary" size="lg">
                  Book a demo
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-pill border border-bg/20 px-5 py-3 text-sm font-medium text-bg/85"
                >
                  Sign in
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
