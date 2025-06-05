'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceCategories from "./components/ServiceCategories";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { PageTransition } from "./components/PageTransition";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for dramatic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-brand-500 to-purple-700 flex items-center justify-center z-50">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            className="text-6xl font-bold text-white mb-4"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Hyphomz
          </motion.div>
          <motion.div
            className="w-16 h-1 bg-white mx-auto rounded-full"
            animate={{ width: [0, 64, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <ServiceCategories />
        <Features />
        <Stats />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
