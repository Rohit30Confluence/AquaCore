import { motion } from "framer-motion";
import { ArrowLeft, Star, Palette, Ruler, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import assets
import bottle1L from "@assets/generated_images/1l_premium_water_bottle_product_shot.png";
import logoImage from "@assets/generated_images/geometric_water_drop_logo.png";

export default function Customizer() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="Aqua Core" className="w-8 h-8 object-contain opacity-90" />
            <span className="font-serif text-xl font-semibold">Aqua Core</span>
          </div>
          <div className="w-24"></div> {/* Spacer for balance */}
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Product Preview */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-32"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-muted/30 group">
              <img 
                src={bottle1L} 
                alt="Personalized 1L Aqua Core Bottle" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-background/90 backdrop-blur px-4 py-2 rounded-full shadow-sm">
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                <span className="text-sm font-semibold uppercase tracking-wider">Premium Series</span>
              </div>
            </div>
          </motion.div>

          {/* Configuration Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-10"
          >
            <div>
              <h1 className="font-serif text-4xl mb-4 text-foreground">Personalize Your Aura</h1>
              <div className="flex items-center gap-4 text-muted-foreground mb-6">
                <span className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  1 Litre Capacity
                </span>
                <span className="text-sm">Aqua Core™ Edition</span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Design a bottle that reflects your identity. Our premium 1L Aqua Core series features medical-grade insulation and a timeless matte finish.
              </p>
            </div>

            {/* Customization Steps */}
            <div className="space-y-8">
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Palette size={20} className="text-primary" />
                  <h3 className="text-lg font-medium">Choose Your Texture</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {['Matte Black', 'Brushed Steel', 'Deep Ocean'].map((finish) => (
                    <button 
                      key={finish}
                      className="p-4 rounded-xl border-2 border-border hover:border-primary transition-all text-center group"
                    >
                      <div className={`w-full h-12 rounded-lg mb-2 ${finish === 'Matte Black' ? 'bg-zinc-900' : finish === 'Brushed Steel' ? 'bg-zinc-400' : 'bg-blue-900'}`} />
                      <span className="text-xs font-medium">{finish}</span>
                    </button>
                  ))}
                </div>
              </section>

              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Ruler size={20} className="text-primary" />
                  <h3 className="text-lg font-medium">Cap & Carry</h3>
                </div>
                <div className="space-y-3">
                  {['Sport Lid with Loop', 'Classic Stainless', 'Straw Top'].map((lid) => (
                    <div key={lid} className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-muted/50 cursor-pointer transition-colors">
                      <span className="text-sm">{lid}</span>
                      <CheckCircle2 size={18} className="text-primary opacity-0 group-hover:opacity-100" />
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">Premium Personalized 1L</span>
                  <span className="text-xl font-bold">$79.00</span>
                </div>
                <Button size="lg" className="w-full rounded-full h-14 text-lg font-medium shadow-xl shadow-primary/20">
                  Review Design & Order
                </Button>
                <p className="text-center text-[10px] uppercase tracking-widest text-muted-foreground mt-4">
                  Hand-finished in our London studio
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
