import { motion } from "framer-motion";
import { Droplets, Shield, Thermometer, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import assets
import bottleImage from "@assets/generated_images/minimalist_water_bottle_product_shot.png";
import logoImage from "@assets/generated_images/geometric_water_drop_logo.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="Aura Logo" className="w-8 h-8 object-contain opacity-90" />
            <span className="font-serif text-2xl font-semibold tracking-tight">Aura</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">Our Story</a>
            <a href="#shop" className="text-sm font-medium hover:text-primary transition-colors">Shop</a>
            <Button size="sm" className="rounded-full px-6">
              Pre-order
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border p-4"
          >
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#about" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Our Story</a>
              <a href="#shop" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Shop</a>
              <Button className="w-full rounded-full">Pre-order Now</Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="z-10"
            >
              <motion.span variants={fadeInUp} className="inline-block text-primary font-medium tracking-wider text-sm mb-4 uppercase">
                The Future of Hydration
              </motion.span>
              <motion.h1 variants={fadeInUp} className="font-serif text-5xl lg:text-7xl font-medium leading-[1.1] mb-6">
                Pure Design.<br />
                <span className="text-muted-foreground">Pure Water.</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
                Experience the perfect balance of aesthetics and functionality. Aura redefines how you carry water, keeping it cold for 24 hours in a silhouette that turns heads.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex items-center gap-4">
                <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  Shop Collection
                </Button>
                <Button variant="ghost" size="lg" className="rounded-full h-12 gap-2 group">
                  Watch Film <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl scale-75" />
              <img 
                src={bottleImage} 
                alt="Aura Bottle" 
                className="relative z-10 w-full max-w-md h-auto object-cover rounded-2xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl lg:text-4xl mb-4">Engineered for Perfection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every detail of the Aura bottle is meticulously crafted to enhance your daily hydration ritual.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Thermometer className="w-6 h-6" />,
                title: "24h Temperature Lock",
                description: "Double-walled vacuum insulation keeps your water ice-cold for 24 hours or hot for 12 hours."
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Medical Grade Steel",
                description: "Crafted from 18/8 stainless steel that preserves taste and resists rust. BPA-free and toxin-free."
              },
              {
                icon: <Droplets className="w-6 h-6" />,
                title: "Leak-Proof Design",
                description: "Our precision-engineered cap ensures zero leaks, making it safe for your bag and your tech."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="border-none shadow-sm hover:shadow-md transition-shadow duration-300 bg-background h-full">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="font-serif text-xl font-medium mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Image / Lifestyle Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden bg-primary/5 min-h-[500px] flex items-center">
            <div className="absolute inset-0 bg-neutral-900/10 z-0 mix-blend-multiply" />
            <div className="grid lg:grid-cols-2 w-full relative z-10">
              <div className="p-12 lg:p-20 flex flex-col justify-center">
                <h2 className="font-serif text-4xl lg:text-5xl mb-6 text-foreground">
                  Sustainable by design.
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-md">
                  Join the movement against single-use plastic. One Aura bottle replaces thousands of plastic bottles over its lifetime.
                </p>
                <Button variant="outline" size="lg" className="self-start rounded-full border-primary text-primary hover:bg-primary hover:text-white">
                  Learn About Our Mission
                </Button>
              </div>
              <div className="relative h-64 lg:h-auto">
                 {/* Decorative abstract elements */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                 <img src={logoImage} alt="Aura Logo" className="w-8 h-8 object-contain invert brightness-0" />
                 <span className="font-serif text-2xl font-bold">Aura</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">
                Designing the future of hydration with sustainable materials and timeless aesthetics.
              </p>
            </div>
            
            <div>
              <h4 className="font-serif text-lg mb-4">Shop</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">All Bottles</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Sets</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg mb-4">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2024 Aura Hydration. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
