import { PageHero } from "@/components/PageHero";
import editorial2 from "@/assets/editorial-2.jpg";
import { ContactForm } from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — World Hair Expo",
  description: "Get in touch with the World Hair Expo team for press, partnerships, or general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Inquiries"
        title={<>Connect with the <span className="font-serif-italic text-primary lowercase">collective</span>.</>}
        subtitle="Our team is dedicated to providing support for press accreditation, brand partnerships, and attendee experiences. Reach out and let's shape the narrative together."
        image={editorial2}
      />

      <section className="py-24 md:py-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid md:grid-cols-12 gap-16 md:gap-24">
          <div className="md:col-span-5">
            <div className="space-y-16">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-6">General Inquiries</p>
                <p className="font-display text-2xl uppercase tracking-tight mb-2">hello@worldhairexpo.com</p>
                <p className="text-muted-foreground text-sm">+44 (0) 20 7946 0123</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-6">Press & Media</p>
                <p className="font-display text-2xl uppercase tracking-tight mb-2">press@worldhairexpo.com</p>
                <p className="text-muted-foreground text-sm">Download Press Kit (ZIP) →</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-6">The Atelier</p>
                <p className="font-display text-2xl uppercase tracking-tight mb-2">Design District · No. 42</p>
                <p className="text-muted-foreground text-sm">Metropolis City, EX1 4HA</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 bg-secondary/30 p-8 md:p-16">
            <h3 className="font-display text-4xl md:text-5xl uppercase tracking-tight mb-12">Send a <span className="font-serif-italic text-primary lowercase">message</span></h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
