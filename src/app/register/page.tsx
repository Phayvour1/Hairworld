import { PageHero } from "@/components/PageHero";
import editorial1 from "@/assets/editorial-1.jpg";
import { RegisterForm } from "@/components/RegisterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration — World Hair Expo",
  description: "Register for the World Hair Expo to join the most influential gathering of hair and beauty professionals.",
};

export default function RegisterPage() {
  return (
    <>
      <PageHero
        eyebrow="Attend"
        title={<>Secure your place in the <span className="font-serif-italic text-primary lowercase">dialogue</span>.</>}
        subtitle="Join over 50,000 global professionals for five days of innovation, artistry, and networking. Select your tier below to begin."
        image={editorial1}
      />

      <section className="py-24 md:py-32 px-6 lg:px-12 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-6">Delegate Portal</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight uppercase mb-8">
              Registration <span className="font-serif-italic text-primary lowercase">Guide</span>.
            </h2>
            <ul className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <li>
                <span className="text-primary font-mono mr-2">I.</span> All passes provide full access to the exhibition floor and satellite networking events.
              </li>
              <li>
                <span className="text-primary font-mono mr-2">II.</span> Professional and VIP Elite tiers require industry verification upon check-in.
              </li>
              <li>
                <span className="text-primary font-mono mr-2">III.</span> Group bookings of 10+ attract a 15% reduction in total cost.
              </li>
            </ul>
          </div>
          <div className="lg:col-span-8">
            <RegisterForm />
          </div>
        </div>
      </section>
    </>
  );
}
