"use client";

import Link from "next/link";

const navGroups = [
  {
    title: "Navigate",
    links: [
      { href: "/", label: "Home" },
      { href: "/experience", label: "Experience" },
      { href: "/exhibition", label: "Exhibition" },
      { href: "/gallery", label: "Gallery" },
    ],
  },
] as const;

const partners = ["KÉRASTASE", "DYSON", "L'ORÉAL", "GHD", "VOGUE", "HARPER'S BAZAAR"];

export function SiteFooter() {
  return (
    <footer className="border-t border-border pt-24 pb-10 px-6 lg:px-12 bg-background">
      <div className="max-w-[1600px] mx-auto">
        {/* Partner strip */}
        <div className="mb-20 pb-16 border-b border-border">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-8">
            In partnership with
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((p) => (
              <span
                key={p}
                className="font-display text-xl tracking-[0.2em] text-foreground/40 hover:text-foreground transition-colors text-center uppercase"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          <div className="lg:col-span-5">
            <h4 className="font-display text-5xl md:text-6xl mb-3 leading-[0.95] uppercase">
              The <span className="font-serif-italic text-primary lowercase">invitation</span>
            </h4>
            <p className="text-sm text-muted-foreground mb-8 max-w-md">
              Join the world's most discerning hair and beauty community. Editorial drops, exclusive previews, and front-row access.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                (e.currentTarget as HTMLFormElement).reset();
              }}
              className="flex gap-4 border-b border-foreground/30 pb-3 max-w-md"
            >
              <input
                type="email"
                required
                placeholder="EMAIL ADDRESS"
                className="bg-transparent w-full font-mono text-xs outline-none uppercase placeholder:text-foreground/40"
              />
              <button className="font-mono text-xs uppercase tracking-widest hover:text-primary transition-colors">
                Subscribe →
              </button>
            </form>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 font-mono text-[10px] uppercase tracking-[0.2em]">
            {navGroups.map((g) => (
              <div key={g.title} className="flex flex-col gap-3">
                <span className="text-primary">{g.title}</span>
                {g.links.map((l) => (
                  <Link key={l.href} href={l.href} className="hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="flex flex-col gap-3">
              <span className="text-primary">Follow</span>
              <a href="#" className="hover:text-primary">Instagram</a>
              <a href="#" className="hover:text-primary">TikTok</a>
              <a href="#" className="hover:text-primary">YouTube</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-primary">Legal</span>
              <a href="#" className="hover:text-primary">Privacy</a>
              <a href="#" className="hover:text-primary">Terms</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 pt-8 border-t border-border font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>© {new Date().getFullYear()} World Hair Expo</span>
          <span>Editorial Sculpture Edition</span>
          <Link href="/gallery" className="hover:text-primary">Press · Inquiries</Link>
        </div>
      </div>
    </footer>
  );
}
