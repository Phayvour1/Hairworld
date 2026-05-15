"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/exhibition", label: "Exhibition" },
  { href: "/gallery", label: "Gallery" },
  { href: "/register", label: "Register" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl md:text-3xl tracking-tight uppercase">
          World <span className="font-serif-italic lowercase">Hair</span> Expo
        </Link>
        <div className="hidden lg:flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.25em]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "hover:text-primary transition-colors",
                pathname === l.href ? "text-primary" : "text-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/exhibition"
            className="ml-2 px-6 py-2 rounded-full border border-foreground hover:bg-foreground hover:text-background transition-all"
          >
            Buy Tickets
          </Link>
        </div>
        <button
          aria-label="Menu"
          className="lg:hidden font-mono text-[11px] uppercase tracking-widest"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background px-6 py-8 flex flex-col gap-5 font-mono text-xs uppercase tracking-[0.2em]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "transition-colors",
                pathname === l.href ? "text-primary" : "text-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
