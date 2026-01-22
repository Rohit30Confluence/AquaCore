import { motion } from "framer-motion";
import { ArrowRight, Star, Utensils, Coffee, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import bottleHero from "@assets/generated_images/aqua_core_1l_bottle.png";
import logo from "@assets/generated_images/geometric_water_drop_logo.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="h-20 flex items-center justify-between px-8 border-b border-border/50 sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Aqua Core" className="w-8 h-8" />
          <span className="font-serif text-2xl font-semibold tracking-tight">Aqua Core</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#concept" className="hover:opacity-60 transition-opacity">The Concept</a>
          <a href="#hospitality" className="hover:opacity-60 transition-opacity">Hospitality</a>
          <Link href="/customize" className="hover:opacity-60 transition-opacity">Design Studio</Link>
        </div>
        <Button variant="outline" className="rounded-full">Request Quote</Button>
      </nav>

      <main>
        <section className="px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <Star size={16} className="fill-current" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Exclusively for Hospitality</span>
            </div>
            <h1 className="font-serif text-6xl lg:text-8xl mb-8 leading-[0.9]">
              Elevate your <br />
              <span className="italic text-muted-foreground/40">Identity.</span>
            </h1>
            <p className="text-xl font-light text-muted-foreground mb-10 max-w-md leading-relaxed">
              Premium 1-liter branded water solutions for the world's most distinguished restaurants and cafes. 
            </p>
            <div className="flex gap-4">
              <Link href="/customize">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg">Personalize Your 1L</Button>
              </Link>
              <Button size="lg" variant="ghost" className="rounded-full h-14 group">
                View Gallery <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl" />
            <img src={bottleHero} alt="Premium 1L Bottle" className="relative z-10 w-full rounded-2xl shadow-2xl" />
          </motion.div>
        </section>

        <section id="hospitality" className="bg-muted py-32 px-8">
          <div className="container mx-auto">
            <h2 className="font-serif text-4xl lg:text-5xl text-center mb-20">Built for the Table.</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: <Utensils />, title: "Fine Dining", desc: "Sleek carafes that complement your culinary art." },
                { icon: <Coffee />, title: "Artisan Cafes", desc: "Minimalist branding for the modern aesthetic." },
                { icon: <ShieldCheck />, title: "Premium Quality", desc: "Lead-free crystal glass, etched with precision." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-6 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
                  <p className="text-muted-foreground font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto py-12 px-8 border-t border-border/50 text-center text-xs text-muted-foreground tracking-widest uppercase">
        © 2026 Aqua Core Hospitality Group
      </footer>
    </div>
  );
}
