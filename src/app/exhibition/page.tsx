import { PageHero } from "@/components/PageHero";
import editorial2 from "@/assets/editorial-2.jpg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exhibition & Sponsors — World Hair Expo",
  description: "Schedule, exhibitor applications, and sponsor tiers for the World Hair Expo.",
  openGraph: {
    title: "Exhibition — World Hair Expo",
    images: [{ url: editorial2.src }],
  },
};

const days = [
  { day: "Day 01", date: "Oct 12", t: "Opening Night", items: ["18:00 — Carpet & opening film", "20:00 — Headline runway", "22:00 — Society lounge opens"] },
  { day: "Day 02", date: "Oct 13", t: "Master Class", items: ["10:00 — Atelier sessions", "14:00 — Editorial direction panel", "20:00 — Collection No. II"] },
  { day: "Day 03", date: "Oct 14", t: "Innovation", items: ["10:00 — Lab tours", "14:00 — Future of fibre", "20:00 — Collection No. III"] },
  { day: "Day 04", date: "Oct 15", t: "The Awards", items: ["18:00 — Awards ceremony", "20:00 — Tribute show", "22:00 — Industry gala"] },
  { day: "Day 05", date: "Oct 16", t: "Closing", items: ["10:00 — Buyers brunch", "14:00 — Open salons", "20:00 — Closing runway"] },
];

const sponsors = [
  { 
    tier: "Global Icon", 
    price: "Inquire", 
    features: ["Title billing across all media", "Primary runway slot", "Custom activation suite", "60 Guest passes"] 
  },
  { 
    tier: "Culture Driver", 
    price: "Inquire", 
    features: ["Category exclusivity", "Innovation lab position", "Press kit inclusion", "30 Guest passes"] 
  },
  { 
    tier: "Artisan Hub", 
    price: "Inquire", 
    features: ["Atelier floor position", "Directory listing", "Social media feature", "10 Guest passes"] 
  },
];

export default function ExhibitionPage() {
  return (
    <>
      <PageHero
        eyebrow="The Exhibition"
        title={<>A stage for global <span className="font-serif-italic text-primary">influence</span>.</>}
        subtitle="Five days of choreographed programming, exhibition spaces, and partnership opportunities — designed to showcase the industry's most influential voices."
        image={editorial2}
      />

      {/* SCHEDULE */}
      <section id="schedule" className="py-24 md:py-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-12">The Schedule</p>
        <div className="space-y-px bg-border border border-border">
          {days.map((d) => (
            <div key={d.day} className="bg-background grid md:grid-cols-12 gap-8 p-8 md:p-12 hover:bg-secondary transition-colors group">
              <div className="md:col-span-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">{d.day}</p>
                <p className="font-display text-4xl tracking-tight">{d.date}</p>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-3xl md:text-4xl tracking-tight group-hover:text-primary transition-colors uppercase">
                  {d.t}
                </h3>
              </div>
              <ul className="md:col-span-5 space-y-2 text-sm text-muted-foreground leading-relaxed font-mono">
                {d.items.map((i) => <li key={i}>· {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SPONSORS */}
      <section id="sponsors" className="py-24 md:py-44 px-6 lg:px-12 bg-foreground text-background">
        <div className="max-w-[1600px] mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-8">Partnerships</p>
          <h2 className="font-display text-5xl md:text-7xl mb-20 max-w-3xl leading-[1] tracking-tight uppercase">
            Join the company of <span className="font-serif-italic text-primary lowercase">icons</span>.
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-background/10 border border-background/10">
            {sponsors.map((s) => (
              <div key={s.tier} className="bg-foreground p-10 md:p-12 flex flex-col justify-between min-h-[400px]">
                <div>
                  <h3 className="font-display text-4xl md:text-5xl mb-4 tracking-tight uppercase">{s.tier}</h3>
                  <p className="font-mono text-[10px] text-primary mb-12 uppercase tracking-widest">{s.price}</p>
                  <ul className="space-y-4">
                    {s.features.map((f) => (
                      <li key={f} className="text-sm text-background/60 flex items-start gap-3">
                        <span className="text-primary mt-1">/</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-16 w-full py-4 border border-background/20 font-mono text-[10px] uppercase tracking-widest hover:bg-background hover:text-foreground transition-all">
                  Inquire Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXHIBIT FORM */}
      <section id="exhibit-apply" className="py-24 md:py-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-6">Exhibition</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] tracking-tight mb-8 uppercase">
              Showcase your <span className="font-serif-italic text-primary lowercase">craft</span>.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We provide a neutral, high-production canvas for brands to host activations, press previews, and trade consultations. Apply to join the exhibitor roster for the upcoming edition.
            </p>
          </div>
          <form className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Brand Name</label>
                <input type="text" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Contact Email</label>
                <input type="email" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Booth Size</label>
              <select className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors appearance-none">
                <option>Atelier Suite (12sqm)</option>
                <option>Gallery Space (30sqm)</option>
                <option>Immersive Pavilion (60sqm+)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Message / Vision</label>
              <textarea className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors h-32 resize-none" />
            </div>
            <button type="submit" className="px-10 py-5 bg-foreground text-background font-mono text-[11px] uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all">
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
