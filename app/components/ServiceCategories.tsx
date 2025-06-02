"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Wrench,
  Paintbrush,
  Zap,
  Droplets,
  Hammer,
  Car,
  Leaf,
  Shield,
  ArrowRight
} from "lucide-react";

// Add background image URLs here
const categories = [
  {
    icon: Wrench,
    title: "Handyman Services",
    description: "Professional repairs and maintenance for your home.",
    services: ["Furniture Assembly", "Wall Mounting", "Door Repairs", "Minor Fixes"],
    bgImage: "https://images.pexels.com/photos/15406523/pexels-photo-15406523/free-photo-of-man-drilling-in-wall-in-home.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Paintbrush,
    title: "Painting & Decor",
    description: "Transform your space with color and creativity.",
    services: ["Interior Painting", "Wallpaper Installation", "Murals", "Decor Advice"],
    bgImage: "https://images.pexels.com/photos/5799059/pexels-photo-5799059.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Zap,
    title: "Electrical Work",
    description: "Certified electricians for safe and efficient solutions.",
    services: ["Wiring", "Lighting", "Appliance Installation", "Smart Switches"],
    bgImage: "https://images.pexels.com/photos/29871587/pexels-photo-29871587/free-photo-of-electrician-working-on-renovation-project-in-turkiye.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Droplets,
    title: "Plumbing",
    description: "Reliable plumbing services for your home.",
    services: ["Leak Repairs", "Drain Cleaning", "Pipe Installation", "Faucet Replacement"],
    bgImage: "https://images.pexels.com/photos/13312223/pexels-photo-13312223.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Hammer,
    title: "Home Renovation",
    description: "Upgrade your home with our expert renovation services.",
    services: ["Kitchen Remodels", "Bathroom Upgrades", "Flooring", "Interior Design"],
    bgImage: "https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    icon: Car,
    title: "HVAC Services",
    description: "Heating, ventilation, and air conditioning specialists.",
    services: ["AC Installation", "Furnace Repair", "Duct Cleaning", "Thermostats"],
    bgImage: "https://images.pexels.com/photos/5463576/pexels-photo-5463576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    icon: Leaf,
    title: "Landscaping",
    description: "Beautiful outdoor spaces tailored to your style.",
    services: ["Lawn Care", "Garden Design", "Tree Trimming", "Patios"],
    bgImage: "https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    icon: Shield,
    title: "Security Systems",
    description: "Protect your home with advanced security technology.",
    services: ["CCTV", "Alarms", "Smart Locks", "Access Control"],
    bgImage: "https://images.pexels.com/photos/13168513/pexels-photo-13168513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const ServiceCategories = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From quick fixes to complete transformations, our certified professionals
            deliver exceptional service across all home categories.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
              }
            }
          }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10
                  }
                }
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative rounded-xl overflow-hidden shadow-lg "
              style={{
                backgroundImage: `url(${category.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/50 z-0" />
              <div className="relative z-10 p-6 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-sm mb-4">{category.description}</p>
                <ul className="text-sm mb-4">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
                <Link href="/services">
                  <Button variant="ghost" className="text-white border-white hover:bg-white/20">
                    Book Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button
              size="lg"
              className=" rounded-xl bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold"
            >
              View All Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCategories;
