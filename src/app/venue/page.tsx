import { PageHero } from "@/components/PageHero";
import venueRender from "@/assets/venue-render.jpg";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Event Venue — World Hair Expo",
  description: "Discover the Grand Pavilion, the architectural masterpiece hosting the World Hair Expo.",
};

export default function VenuePage() {
  return (
    <>
      <PageHero
        eyebrow="The Space"
        title={<>A sanctuary of <span className="font-serif-italic text-primary lowercase">architecture</span>.</>}
        subtitle="The Grand Pavilion is more than a venue; it is an immersive canvas designed to highlight the intersection of form, light, and creative expression."
        image={venueRender}
      />

      <section className="py-24 md:py-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-24 items-center">
          <div className="md:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden group">
              <Image 
                src={venueRender} 
                alt="Grand Pavilion Interior" 
                fill 
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out" 
              />
            </div>
          </div>
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-6">The Grand Pavilion</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight uppercase mb-8 leading-tight">
              Crafted for <span className="font-serif-italic text-primary lowercase">visionaries</span>.
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Spanning over 12,000 square meters, the Pavilion features soaring glass ceilings, modular exhibition spaces, and a state-of-the-art acoustic design optimized for high-production runway shows.
              </p>
              <p>
                Located in the heart of the city's Design District, it serves as the ultimate backdrop for the global beauty industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-44 px-6 lg:px-12 bg-foreground text-background">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-12">Facilities</p>
              <div className="space-y-12">
                {[
                  { t: "The Main Runway", d: "A 40-meter kinetic stage with 360-degree viewing and advanced lighting rigging." },
                  { t: "Atelier Suites", d: "Dedicated, private suites for technical workshops, press consults, and VIP lounges." },
                  { t: "Innovation Lab", d: "A specialized wing with laboratory-grade ventilation and tech-integration for hardware showcases." },
                  { t: "Press Center", d: "High-speed fiber connectivity, broadcast booths, and dedicated interview lounges." },
                ].map((f, i) => (
                  <div key={i}>
                    <h4 className="font-display text-3xl uppercase tracking-tight mb-4">{f.t}</h4>
                    <p className="text-background/60 text-sm max-w-sm">{f.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="border border-background/10 aspect-square relative overflow-hidden bg-background/5 p-12 flex flex-col justify-center text-center">
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-8">Location</p>
                <h3 className="font-display text-4xl md:text-6xl uppercase tracking-tight mb-8">Design District · No. 42</h3>
                <p className="text-background/60 text-sm mb-12">The Grand Pavilion, Design District, Metropolis City</p>
                <button className="px-8 py-4 border border-background/20 font-mono text-[10px] uppercase tracking-widest hover:bg-background hover:text-foreground transition-all mx-auto">
                  Get Directions →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
