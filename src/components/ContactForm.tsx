"use client";

export function ContactForm() {
  return (
    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
      <div className="grid sm:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Full Name</label>
          <input type="text" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors" />
        </div>
        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email Address</label>
          <input type="email" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors" />
        </div>
      </div>
      <div className="space-y-2">
        <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Subject</label>
        <select className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors appearance-none">
          <option>Partnership Inquiry</option>
          <option>Press Accreditation</option>
          <option>Speaker Application</option>
          <option>General Support</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Message</label>
        <textarea className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors h-32 resize-none" />
      </div>
      <button type="submit" className="w-full py-5 bg-foreground text-background font-mono text-[11px] uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all">
        Send Message
      </button>
    </form>
  );
}
