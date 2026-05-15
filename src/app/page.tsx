import Image from "next/image";
import Link from "next/link";
import heroPoster from "@/assets/hero-poster.jpg";
import editorial1 from "@/assets/editorial-1.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { NewsletterForm } from "@/components/NewsletterForm";


const ticker = [
  "200+ Global Brands",
  "International Runway",
  "Master Classes",
  "Innovation Lab",
  "Beauty Awards",
  "Press & Media",
  "Buyers Lounge",
];

export default function HomePage() {
  return (
    <>
      {/* CINEMATIC HERO */}
      <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
        {/* Using the poster image as background since the remote video asset is environment-specific */}
        <Image
          src={heroPoster}
          alt="World Hair Expo Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />

        <div className="relative z-10 h-full flex flex-col justify-between text-white px-6 lg:px-12 pt-32 pb-12 max-w-[1600px] mx-auto">
          <div className="animate-reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent">
              The Global Edition · MMXXVI
            </p>
          </div>

          <div className="animate-reveal">
            <h1 className="font-display text-[18vw] md:text-[11vw] leading-[0.85] tracking-tight uppercase">
              World <span className="font-serif-italic lowercase text-primary">Hair</span>
              <br />
              Expo
            </h1>
            <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <p className="max-w-md text-sm md:text-base text-white/80 leading-relaxed">
                Five days. One stage. The most influential gathering of hair, beauty and lifestyle brands on the planet.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/exhibition"
                  className="px-8 py-4 bg-white text-black font-mono text-[11px] uppercase tracking-[0.25em] hover:bg-primary hover:text-white transition-all text-center"
                >
                  Buy Tickets
                </Link>
                <Link
                  href="/experience"
                  className="px-8 py-4 border border-white/40 font-mono text-[11px] uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all text-center"
                >
                  The Experience
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 z-10 hidden md:flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/70">
          <span className="w-12 h-px bg-white/40" />
          Scroll
        </div>
      </section>

      {/* TICKER */}
      <div className="border-y border-border py-5 overflow-hidden bg-background">
        <div className="flex whitespace-nowrap gap-16 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground animate-marquee w-max">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-16">
              <span className="text-primary">◆</span>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* NARRATIVE TEASER */}
      <section className="py-32 md:py-48 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="md:col-span-5 md:sticky md:top-32">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] mb-10 text-primary">
              I · The Narrative
            </p>
            <p className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight uppercase">
              Where the industry comes to be{" "}
              <span className="font-serif-italic lowercase text-primary">seen</span>.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="relative aspect-[4/5] mb-10 overflow-hidden">
              <Image
                src={editorial1}
                alt="Editorial portrait"
                fill
                className="object-cover animate-clip"
              />
            </div>
            <div className="max-w-md md:ml-auto">
              <p className="text-muted-foreground leading-relaxed mb-10 text-base">
                World Hair Expo is the runway, the laboratory, and the cultural compass for the global beauty industry. A choreographed immersive edition staged every year.
              </p>
              <Link
                href="/experience"
                className="inline-block font-mono text-[10px] uppercase tracking-[0.3em] border-b border-foreground/40 pb-1 hover:border-primary hover:text-primary transition-all"
              >
                Our vision →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSOR TIER TEASER */}
      <section className="bg-foreground text-background py-32 md:py-44 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] mb-8 text-primary">II · The Partners</p>
          <h2 className="font-display text-5xl md:text-7xl mb-20 max-w-3xl leading-[1] tracking-tight uppercase">
            In the company of <span className="font-serif-italic lowercase text-primary">icons</span>.
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-background/10 border border-background/10">
            {[
              { t: "Global Icon", d: "Title billing across all media, primary runway slots and custom activation suites." },
              { t: "Culture Driver", d: "Category exclusivity, innovation lab positioning and dedicated press kit inclusions." },
              { t: "Artisan Hub", d: "Atelier floor positioning, directory listing and social media features for independent visionaries." },
            ].map((p) => (
              <div key={p.t} className="bg-foreground p-10 md:p-12 group hover:bg-white/5 transition-colors">
                <h3 className="font-display text-4xl md:text-5xl mb-6 tracking-tight uppercase group-hover:text-primary transition-colors">
                  {p.t}
                </h3>
                <p className="text-background/60 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/exhibition#sponsors" className="font-mono text-[10px] uppercase tracking-[0.3em] border-b border-background/40 pb-1 hover:text-primary hover:border-primary transition-all">
              View all tiers →
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY TEASER */}
      <section className="py-32 md:py-44 bg-background">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] mb-6 text-primary">III · The Archive</p>
              <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[1] uppercase">
                Past <span className="font-serif-italic lowercase text-primary">editions</span>
              </h2>
            </div>
            <Link href="/gallery" className="hidden md:inline font-mono text-[10px] uppercase tracking-[0.3em] hover:text-primary transition-colors">
              Full Archive →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {[gallery1, gallery2, gallery3, gallery4].map((src, i) => (
              <div key={i} className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={src}
                  alt={`Past edition ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-[1200ms] ease-out"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER FOOTER */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-secondary/50 border-t border-border">
        <div className="max-w-[1600px] mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl mb-10 uppercase tracking-tight">Stay in the <span className="font-serif-italic lowercase text-primary">loop</span>.</h2>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
