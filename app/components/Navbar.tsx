"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/data/navItems";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl  shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-10 h-10 bg-gradient-to-r from-brand-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl"
            >
              H
            </motion.div>
            <span className="text-2xl font-bold font-display">
              Hyphomz
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 ml-28">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 rounded-lg transition-all duration-300 group text-[16px] font-medium ",
                  pathname === item.href
                    ? "text-brand-400 "
                    : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                )}
              >
                <span className="relative z-10 font-medium">{item.label}</span>
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 underline"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            <div className="hidden lg:flex items-center space-x-3">
              <Link href="/login">
                <Button className="font-medium px-6  text-white bg-gradient-to-tr from-purple-600 to-brand-500 hover:from-brand-600 hover:to-purple-600 rounded-2xl">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 text-white font-medium px-6 rounded-2xl">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300",
                        pathname === item.href
                          ? "text-brand-600 bg-brand-50 dark:bg-brand-900/20"
                          : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}

                <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                  <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="font-medium w-full bg-gradient-to-tr from-purple-600 to-brand-500 hover:from-brand-600 hover:to-purple-600 text-white rounded-xl">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full rounded-xl bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 text-white font-medium">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
