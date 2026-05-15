import Image, { StaticImageData } from "next/image";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  image?: string | StaticImageData;
}

export function PageHero({ eyebrow, title, subtitle, image }: PageHeroProps) {
  return (
    <section className="relative pt-40 pb-20 md:pt-52 md:pb-28 overflow-hidden">
      {image && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        </div>
      )}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary mb-8 animate-reveal">
          {eyebrow}
        </p>
        <h1 className="font-display text-[14vw] md:text-[8vw] leading-[0.9] tracking-tight max-w-5xl animate-reveal">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-10 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed animate-reveal">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
