import { PageHero } from "@/components/PageHero";
import heroPortrait from "@/assets/hero-portrait.jpg";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us — World Hair Expo",
  description: "Learn about the mission, history, and the visionaries behind the World Hair Expo.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Legacy"
        title={<>Defining the future of <span className="font-serif-italic text-primary lowercase">beauty</span>.</>}
        subtitle="Since its inception, World Hair Expo has stood as a beacon of innovation and artistic excellence, bridging the gap between traditional craft and future technology."
        image={heroPortrait}
      />

      <section className="py-24 md:py-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-6">Our Mission</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight uppercase">
              A platform for the <span className="font-serif-italic text-primary lowercase">unseen</span> talent.
            </h2>
          </div>
          <div className="md:col-span-7 text-muted-foreground leading-relaxed space-y-8 text-lg">
            <p>
              World Hair Expo was founded on the belief that the hair and beauty industry is not just about aesthetics, but about identity, culture, and innovation. We provide a cinematic stage where global icons and independent visionaries can share their narrative without compromise.
            </p>
            <p>
              Our annual gathering is more than a trade show; it is a choreographed experience designed to inspire the next generation of creative directors, stylists, and brand founders.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-44 px-6 lg:px-12 bg-foreground text-background">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-3 gap-12 md:gap-24">
            <div>
              <h3 className="font-display text-7xl md:text-9xl text-primary mb-6">25+</h3>
              <p className="font-mono text-[10px] uppercase tracking-widest text-background/60">Years of Excellence</p>
            </div>
            <div>
              <h3 className="font-display text-7xl md:text-9xl text-primary mb-6">140</h3>
              <p className="font-mono text-[10px] uppercase tracking-widest text-background/60">Countries Represented</p>
            </div>
            <div>
              <h3 className="font-display text-7xl md:text-9xl text-primary mb-6">2k+</h3>
              <p className="font-mono text-[10px] uppercase tracking-widest text-background/60">Master Classes Held</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="text-center mb-20">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-6">The Collective</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight uppercase">The Minds Behind <span className="font-serif-italic text-primary lowercase">The Expo</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Julian Thorne", role: "Creative Director", image: heroPortrait },
            { name: "Elena Rossi", role: "Curator of Innovation", image: heroPortrait },
            { name: "Marcus Chen", role: "Director of Partnerships", image: heroPortrait },
          ].map((member, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-secondary">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                />
              </div>
              <h4 className="font-display text-2xl uppercase tracking-tight">{member.name}</h4>
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
