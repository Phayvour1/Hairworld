"use client";

export function NewsletterForm() {
  return (
    <form className="max-w-md mx-auto flex gap-4" onSubmit={(e) => e.preventDefault()}>
      <input 
        type="email" 
        placeholder="Email Address" 
        className="flex-1 bg-transparent border-b border-foreground/20 py-2 focus:outline-none focus:border-primary font-mono text-xs"
      />
      <button className="font-mono text-[10px] uppercase tracking-[0.2em] border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-all">
        Subscribe
      </button>
    </form>
  );
}
