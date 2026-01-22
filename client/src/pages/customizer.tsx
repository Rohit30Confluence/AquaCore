import { motion } from "framer-motion";
import { ArrowLeft, Star, Palette, Ruler } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

import bottle1L from "@assets/generated_images/aqua_core_1l_bottle.png";
import logo from "@assets/generated_images/geometric_water_drop_logo.png";

export default function Customizer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <nav className="h-20 flex items-center justify-between px-8 border-b border-border/50">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:opacity-60 transition-opacity">
          <ArrowLeft size={16} /> Back
        </Link>
        <div className="flex items-center gap-3">
          <img src={logo} alt="Aqua Core" className="w-6 h-6" />
          <span className="font-serif text-lg font-semibold">Design Studio</span>
        </div>
        <div className="w-16" />
      </nav>

      <main className="flex-1 container mx-auto px-8 py-16 grid lg:grid-cols-2 gap-16">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center bg-muted rounded-3xl p-12">
          <img src={bottle1L} alt="Preview" className="max-w-md w-full rounded-xl shadow-lg" />
        </motion.div>

        <div className="flex flex-col gap-12">
          <div>
            <div className="flex items-center gap-2 text-primary mb-4">
              <Star size={14} className="fill-current" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Premium Branding</span>
            </div>
            <h1 className="font-serif text-4xl mb-6">Personalize Your 1L</h1>
            <p className="text-muted-foreground font-light leading-relaxed">
              Upload your logo and select your finish. Our team will handle the laser-etching with surgical precision.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="flex items-center gap-2 text-sm font-semibold mb-4 uppercase tracking-wider">
                <Palette size={16} /> Finish
              </h3>
              <div className="flex gap-4">
                {['Frosted', 'Clear', 'Amber'].map(f => (
                  <button key={f} className="flex-1 py-4 border border-border rounded-xl text-xs hover:border-primary transition-colors uppercase tracking-widest">{f}</button>
                ))}
              </div>
            </section>

            <section>
              <h3 className="flex items-center gap-2 text-sm font-semibold mb-4 uppercase tracking-wider">
                <Ruler size={16} /> Volume
              </h3>
              <div className="py-4 border border-primary bg-primary/5 rounded-xl text-center text-xs font-bold uppercase tracking-widest">
                1000ml / 1.0 Litre
              </div>
            </section>
          </div>

          <Button size="lg" className="w-full rounded-full h-16 text-lg">Request Mockup</Button>
        </div>
      </main>
    </div>
  );
}
