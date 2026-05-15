import { PageHero } from "@/components/PageHero";
import aboutHero from "@/assets/about-hero.jpg";
import editorial1 from "@/assets/editorial-1.jpg";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Experience — World Hair Expo",
  description: "The vision, program pillars, and editorial imagery of the world's most influential hair exhibition.",
  openGraph: {
    title: "The Experience — World Hair Expo",
    images: [{ url: aboutHero.src }],
  },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="The Experience"
        title={<>A vision for the <span className="font-serif-italic text-primary">next</span> era.</>}
        subtitle="World Hair Expo is the global meeting point for the hair, beauty and lifestyle industries — a curated destination where international brands, master stylists and editors shape what comes next."
        image={aboutHero}
      />

      <section className="py-24 md:py-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-6">Program Pillars</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight uppercase">
              Four worlds, <span className="font-serif-italic text-primary lowercase">one</span> cinematic stage.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-16">
            {[
              { 
                n: "01", 
                t: "Runway", 
                d: "International collections, signature shows and editorial moments staged across five nights with the production value of a global fashion week.",
                img: editorial1
              },
              { 
                n: "02", 
                t: "Master Class", 
                d: "Closed-door sessions led by the world's most decorated stylists and creative directors, focusing on the future of technique and craft.",
                img: editorial1
              },
              { 
                n: "03", 
                t: "Innovation Lab", 
                d: "A curated space for the technology, biomaterials and tools shaping the next decade of beauty — from AI-driven styling to sustainable fibres.",
                img: editorial1
              },
              { 
                n: "04", 
                t: "Networking", 
                d: "Invitation-only lounges, press previews and after-hours programming designed for the people who move the global conversation forward.",
                img: editorial1
              },
            ].map((p) => (
              <div key={p.n} className="group">
                <div className="flex items-start gap-8 mb-8">
                  <span className="font-mono text-[10px] text-primary mt-1">{p.n}</span>
                  <div>
                    <h3 className="font-display text-3xl md:text-5xl mb-6 tracking-tight uppercase">{p.t}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-xl">{p.d}</p>
                  </div>
                </div>
                <div className="relative aspect-[16/9] bg-secondary overflow-hidden">
                  <Image 
                    src={p.img} 
                    alt={p.t} 
                    fill
                    sizes="(max-width: 768px) 100vw, 70vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out-expo" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 lg:px-12 bg-foreground text-background">
        <div className="max-w-[1600px] mx-auto text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-12">The Narrative</p>
          <h2 className="font-display text-5xl md:text-[8vw] leading-[0.9] tracking-tight max-w-6xl mx-auto mb-16 uppercase">
            Where the industry comes to be <span className="font-serif-italic text-primary lowercase">seen</span>.
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-left text-background/60 leading-relaxed max-w-4xl mx-auto">
            <p>
              What began as an intimate runway has evolved into the most anticipated event on the international beauty calendar. Each edition gathers the most influential houses, independent ateliers and emerging visionaries under one cinematic roof.
            </p>
            <p>
              World Hair Expo is built on a single conviction: that hair is the most personal form of expression, and that the brands shaping it deserve a stage worthy of the craft.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
