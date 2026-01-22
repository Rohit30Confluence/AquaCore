import { motion } from "framer-motion";
import { Droplets, Shield, Thermometer, ArrowRight, Menu, X, Star, Utensils, Coffee, Briefcase } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import assets
import bottleImage from "@assets/generated_images/minimalist_water_bottle_product_shot.png";
import logoImage from "@assets/generated_images/geometric_water_drop_logo.png";
import restaurantImage from "@assets/generated_images/luxury_restaurant_branding.png";
import cafeImage from "@assets/generated_images/cafe_lifestyle_branding.png";

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
            <img src={logoImage} alt="Aqua Core Logo" className="w-8 h-8 object-contain opacity-90" />
            <span className="font-serif text-2xl font-semibold tracking-tight">Aqua Core</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#solutions" className="text-sm font-medium hover:text-primary transition-colors">Hospitality Solutions</a>
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">The Bottle</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">Sustainability</a>
            <Link href="/customize">
              <Button size="sm" className="rounded-full px-6">
                Design Your Brand
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[radial-gradient(circle_at_top_right,var(--color-primary)_0%,transparent_40%)]">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="z-10"
            >
              <motion.span variants={fadeInUp} className="inline-block text-primary font-medium tracking-widest text-sm mb-4 uppercase">
                Premium Branding for Elite Hospitality
              </motion.span>
              <motion.h1 variants={fadeInUp} className="font-serif text-5xl lg:text-8xl font-medium leading-[1] mb-6">
                Your Brand.<br />
                <span className="text-muted-foreground italic">Their Experience.</span>
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-md mb-8 leading-relaxed font-light">
                Elevate your restaurant or cafe with custom-branded 1-liter Aqua Core bottles. Sustainable luxury that serves your guests and your identity.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
                <Link href="/customize">
                  <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-2xl shadow-primary/30 transition-all duration-300 hover:-translate-y-1">
                    Start Branding
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="rounded-full h-14 px-8 border-primary/20 hover:bg-primary/5 transition-all">
                  Request Samples
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative lg:h-[700px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-[120px] scale-75 animate-pulse" />
              <img 
                src={bottleImage} 
                alt="Aqua Core Branded Bottle" 
                className="relative z-10 w-full max-w-lg h-auto object-cover rounded-[2rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] hover:rotate-2 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl lg:text-6xl mb-6">Tailored for the industry.</h2>
              <p className="text-muted-foreground text-lg font-light">From Michelin-star dining rooms to bustling artisan cafes, Aqua Core is the silent ambassador of your commitment to quality and style.</p>
            </div>
            <div className="flex gap-4">
               <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center"><ArrowRight className="rotate-180 opacity-30" /></div>
               <div className="w-12 h-12 rounded-full border border-primary text-primary flex items-center justify-center"><ArrowRight /></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative rounded-[2.5rem] overflow-hidden aspect-[16/10] bg-muted"
            >
              <img src={restaurantImage} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Restaurant Branding" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12">
                <Utensils className="text-white w-8 h-8 mb-4" />
                <h3 className="text-white font-serif text-3xl mb-2">Fine Dining</h3>
                <p className="text-white/70 max-w-xs">Elevate the table setting with sophisticated 1L carafes that maintain temperature throughout the meal.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative rounded-[2.5rem] overflow-hidden aspect-[16/10] bg-muted"
            >
              <img src={cafeImage} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Cafe Branding" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-12">
                <Coffee className="text-white w-8 h-8 mb-4" />
                <h3 className="text-white font-serif text-3xl mb-2">Artisan Cafes</h3>
                <p className="text-white/70 max-w-xs">Offer guests a premium hydration experience that matches the quality of your craft coffee.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Perks Grid */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                icon: <Star className="w-6 h-6" />,
                title: "Logo Laser Etching",
                description: "Permanent, precision branding that never fades or peels."
              },
              {
                icon: <Briefcase className="w-6 h-6" />,
                title: "B2B Bulk Pricing",
                description: "Competitive margins tailored for hospitality and corporate scale."
              },
              {
                icon: <Thermometer className="w-6 h-6" />,
                title: "Thermal Efficiency",
                description: "Keeps water at serving temp for hours without condensation."
              },
              {
                icon: <Droplets className="w-6 h-6" />,
                title: "Eco-Friendly",
                description: "Eliminate plastic waste and demonstrate green values."
              }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <h4 className="font-serif text-lg font-medium">{feature.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - simplified/refined */}
      <footer className="bg-background border-t border-border py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                 <img src={logoImage} alt="Aqua Core Logo" className="w-10 h-10 object-contain" />
                 <span className="font-serif text-3xl font-bold">Aqua Core</span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Redefining hospitality through sustainable design and premium branding solutions.
              </p>
            </div>
            <div className="flex gap-16">
              <div>
                <h5 className="font-medium mb-4">Solutions</h5>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Restaurants</li>
                  <li>Hotels</li>
                  <li>Cafes</li>
                  <li>Offices</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-4">Contact</h5>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Sales Inquiries</li>
                  <li>Support</li>
                  <li>Press</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-border flex justify-between items-center text-xs text-muted-foreground tracking-widest uppercase">
            <span>© 2024 Aqua Core Hospitality</span>
            <div className="flex gap-8">
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
