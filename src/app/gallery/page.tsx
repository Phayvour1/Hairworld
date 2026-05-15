import { PageHero } from "@/components/PageHero";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import editorial1 from "@/assets/editorial-1.jpg";
import editorial2 from "@/assets/editorial-2.jpg";
import editorial3 from "@/assets/editorial-3.jpg";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery & Archive — World Hair Expo",
  description: "Explore past editions, press kits, and frequently asked questions.",
  openGraph: {
    title: "Gallery — World Hair Expo",
    images: [{ url: gallery1.src }],
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="The Archive"
        title={<>Past editions. Future <span className="font-serif-italic text-primary">vision</span>.</>}
        subtitle="A visual record of the brands, talent, and moments that have shaped the World Hair Expo over the years."
        image={gallery3}
      />

      <section className="py-24 md:py-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-8">
          <div className="md:col-span-8 relative aspect-video overflow-hidden group">
            <Image src={gallery1} alt="" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
          </div>
          <div className="md:col-span-4 relative aspect-[4/5] overflow-hidden group">
            <Image src={gallery2} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
          </div>
          <div className="md:col-span-4 relative aspect-square overflow-hidden group">
            <Image src={editorial1} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
          </div>
          <div className="md:col-span-8 relative aspect-video overflow-hidden group">
            <Image src={gallery3} alt="" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
          </div>
          <div className="md:col-span-6 relative aspect-video overflow-hidden group">
            <Image src={editorial2} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
          </div>
          <div className="md:col-span-6 relative aspect-video overflow-hidden group">
            <Image src={editorial3} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
          </div>
        </div>
      </section>

      {/* PRESS KIT */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-secondary/30">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-6">Media</p>
            <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95] mb-8 uppercase">
              The <span className="font-serif-italic text-primary lowercase">Press</span> Kit.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              High-resolution imagery, brand guidelines, and official press releases from the current and past editions.
            </p>
            <button className="px-10 py-5 bg-foreground text-background font-mono text-[11px] uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all">
              Download Kit (ZIP)
            </button>
          </div>
          <div className="bg-background border border-border p-12">
            <h3 className="font-display text-3xl mb-8 uppercase tracking-tight">Recent Coverage</h3>
            <ul className="space-y-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <li className="flex justify-between border-b border-border pb-4">
                <span>Vogue International</span>
                <span className="text-primary cursor-pointer">Read →</span>
              </li>
              <li className="flex justify-between border-b border-border pb-4">
                <span>Dazed Digital</span>
                <span className="text-primary cursor-pointer">Read →</span>
              </li>
              <li className="flex justify-between border-b border-border pb-4">
                <span>Hypebeast Beauty</span>
                <span className="text-primary cursor-pointer">Read →</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-44 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-12 text-center">Inquiries</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[1] mb-20 text-center uppercase">
            Frequently Asked <span className="font-serif-italic lowercase text-primary">Questions</span>
          </h2>
          <div className="space-y-12">
            {[
              { q: "How can I apply for media accreditation?", a: "Media accreditation opens three months prior to the event. Please download the press kit for contact details." },
              { q: "Is the event open to the general public?", a: "World Hair Expo is a professional industry event. Limited public tickets are available for the evening runway sessions." },
              { q: "Where is the venue located?", a: "The main exhibition is held at the Grand Pavilion, with satellite events across the city's design district." },
            ].map((f, i) => (
              <div key={i} className="group">
                <h4 className="font-display text-2xl md:text-3xl mb-4 uppercase tracking-tight group-hover:text-primary transition-colors cursor-pointer flex justify-between items-center">
                  {f.q}
                  <span className="text-primary text-sm">+</span>
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
