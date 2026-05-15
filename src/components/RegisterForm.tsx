"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const tiers = [
  { id: "delegate", name: "Delegate", price: "£250", description: "General access to all exhibition floors and evening networking." },
  { id: "pro", name: "Professional", price: "£650", description: "Priority access to Master Classes and the Innovation Lab." },
  { id: "vip", name: "VIP Elite", price: "£1,200", description: "Front-row runway seating and exclusive lounge access." }
];

export function RegisterForm() {
  const [selectedTier, setSelectedTier] = useState("delegate");

  return (
    <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-8">
        <h3 className="font-display text-3xl uppercase tracking-tight">Personal Details</h3>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">First Name</label>
            <input type="text" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Last Name</label>
            <input type="text" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email Address</label>
          <input type="email" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors" />
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Organization</label>
            <input type="text" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Professional Role</label>
            <input type="text" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-primary transition-colors" />
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="font-display text-3xl uppercase tracking-tight">Select Tier</h3>
        <div className="grid gap-4">
          {tiers.map((tier) => (
            <div 
              key={tier.id}
              onClick={() => setSelectedTier(tier.id)}
              className={cn(
                "p-6 border cursor-pointer transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
                selectedTier === tier.id ? "border-primary bg-primary/5" : "border-border hover:border-foreground/30"
              )}
            >
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className={cn("w-3 h-3 rounded-full border", selectedTier === tier.id ? "bg-primary border-primary" : "border-muted-foreground")} />
                  <h4 className="font-display text-xl uppercase tracking-tight">{tier.name}</h4>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed max-w-sm">{tier.description}</p>
              </div>
              <p className="font-display text-2xl tracking-tight">{tier.price}</p>
            </div>
          ))}
        </div>
      </div>

      <button type="submit" className="w-full py-6 bg-foreground text-background font-mono text-[11px] uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all">
        Complete Registration
      </button>
    </form>
  );
}
