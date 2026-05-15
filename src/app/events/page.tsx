import { PageHero } from "@/components/PageHero";
import editorial3 from "@/assets/editorial-3.jpg";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events — World Hair Expo",
  description: "Explore the satellite events, workshops, and evening runways that make up the World Hair Expo calendar.",
};

const events = [
  {
    category: "Main Stage",
    title: "The Opening Runway",
    date: "Oct 12, 2026",
    location: "Grand Pavilion",
    description: "A cinematic film and live runway collection featuring the year's headline collaborators."
  },
  {
    category: "Workshop",
    title: "Mastering the Silhouette",
    date: "Oct 13, 2026",
    location: "Atelier Studio 4",
    description: "An intensive technical session led by Julian Thorne on architectural hair design."
  },
  {
    category: "Awards",
    title: "The Global Hair Awards",
    date: "Oct 15, 2026",
    location: "Gala Ballroom",
    description: "Celebrating the visionaries who have redefined the boundaries of the industry this year."
  },
  {
    category: "Satellite",
    title: "Innovation Lab Preview",
    date: "Oct 14, 2026",
    location: "The Glass House",
    description: "First look at the biomaterials and AI tools presented by our lead innovation partners."
  }
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Calendar"
        title={<>Events that shape the <span className="font-serif-italic text-primary lowercase">culture</span>.</>}
        subtitle="From high-production runways to intimate technical workshops, our calendar is designed to provide depth and inspiration at every level."
        image={editorial3}
      />

      <section className="py-24 md:py-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid gap-px bg-border border border-border">
          {events.map((event, i) => (
            <div key={i} className="bg-background p-8 md:p-12 grid md:grid-cols-12 gap-8 hover:bg-secondary transition-colors group">
              <div className="md:col-span-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-4">{event.category}</p>
                <p className="font-display text-2xl tracking-tight">{event.date}</p>
              </div>
              <div className="md:col-span-6">
                <h3 className="font-display text-3xl md:text-5xl tracking-tight uppercase group-hover:text-primary transition-colors mb-6">{event.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">{event.description}</p>
              </div>
              <div className="md:col-span-3 flex md:flex-col justify-between items-end md:items-end">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{event.location}</p>
                <Link href="/exhibition" className="font-mono text-[10px] uppercase tracking-widest border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-all">
                  Get Tickets →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-44 px-6 lg:px-12 bg-secondary/30">
        <div className="max-w-[1600px] mx-auto text-center">
          <h2 className="font-display text-4xl md:text-6xl mb-12 uppercase tracking-tight">Host Your Own <span className="font-serif-italic text-primary lowercase">Activation</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
            We provide space and technical support for brands looking to host independent workshops, press previews, or satellite events during the Expo week.
          </p>
          <Link href="/exhibition#exhibit-apply" className="px-10 py-5 bg-foreground text-background font-mono text-[11px] uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all">
            Inquire as Host
          </Link>
        </div>
      </section>
    </>
  );
}
