'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Play, Star, CheckCircle } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

    const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  const backgroundImage =
    currentTheme === 'dark'
      ? "url('/heroDark.png')"
      : "url('/heroLight.png')";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-brand-50/20 dark:to-brand-950/20">

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-brand-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center"
        >

          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2  dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800 rounded-full px-6 py-2 mb-8"
          >
            <Star className="h-4 w-4 text-brand-500 fill-current" />
            <span className="text-sm font-medium text-brand-700 dark:text-brand-300">
              #1 Home Services Platform
            </span>
          </motion.div>


          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 "
          >
            <span className="block text-foreground">Simplifying</span>
            <span className="block text-gradient bg-gradient-to-r from-brand-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Everyday Life
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Experience reliable, high-quality, on-demand home services at the tap of a button. 
            Professional experts ready to transform your home.
          </motion.p>


          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-6 mb-10 text-sm text-muted-foreground"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-success-500" />
              <span>Verified Professionals</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-success-500" />
              <span>Same-Day Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-success-500" />
              <span>100% Satisfaction Guarantee</span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/services">
              <Button 
                size="lg" 
                className="w-full rounded-full sm:w-auto bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Book a Service
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  →
                </motion.div>
              </Button>
            </Link>
            
            <Button 
              variant="ghost" 
              size="lg"
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold group hover:bg-muted/50"
            >
              <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative max-w-6xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-brand-100 to-purple-100 dark:from-brand-900/20 dark:to-purple-900/20 aspect-video shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" 
              style={{
                backgroundImage,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}/>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                >
                  <Play className="h-8 w-8 text-brand-600 ml-1" fill="currentColor" />
                </motion.div>
              </div>
            </div>
            
            {/* Floating Elements */}
            {/* <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 bg-success-500 text-white p-3 rounded-xl shadow-lg"
            >
              <CheckCircle className="h-6 w-6" />
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-4 -right-4 bg-brand-500 text-white p-3 rounded-xl shadow-lg"
            >
              <Star className="h-6 w-6" fill="currentColor" />
            </motion.div> */}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center space-y-2 text-muted-foreground"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <ArrowDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;