'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { useState } from "react";
import { footerLinks } from "@/data/footer";


const Footer = () => {

  const [email, setEmail] = useState("");


const handleSubscribe = () => {
  const isValidEmail = /\S+@\S+\.\S+/.test(email);
  if (!email.trim()) {
    toast.error("Please enter your email.");
    return;
  }
  if (!isValidEmail) {
    toast.error("Please enter a valid email address.");
    return;
  }

  toast.success("Subscribed successfully! 🎉 You'll receive our latest updates soon.");
  setEmail(""); 
};


  return (
    <footer className="bg-muted/30 border-t borde border-border">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 border-b border-border"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold font-display mb-4">
              Stay Updated with <span className="text-gradient">Hyphomz</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest home improvement tips, exclusive offers, and service updates.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="flex-1 rounded-2xl "
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button    
               onClick={handleSubscribe} 
               className="w-full rounded-2xl px-5 sm:w-auto bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 text-white">
                Subscribe
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-brand-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  H
                </div>
                <span className="text-2xl font-bold text-gradient font-display">
                  Hyphomz
                </span>
              </Link>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Simplifying everyday life with reliable, high-quality, on-demand home services 
                at the tap of a button. Your trusted partner for all home improvement needs.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 mr-3 text-brand-500" />
                  hello@hyphomz.com
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 mr-3 text-brand-500" />
                  1-800-HYPHOMZ
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-3 text-brand-500" />
                  Available in 100+ cities
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h4 className="font-semibold mb-4 text-foreground">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link 
                        href="#" 
                        className="text-sm text-muted-foreground hover:text-brand-600 transition-colors duration-200"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 Hyphomz. All rights reserved. Built with ❤️ for better homes.
            </div>
            
            <div className="flex items-center space-x-4 md:space-x-6 ">
                  {['x', 'facebook', 'instagram', 'youtube'].map((social, index) => (
                          <a 
                            key={index} 
                            href={`https://${social}.com/hyphomz`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <Image
                              width={30}
                              height={30}
                              src={`https://simpleicons.org/icons/${social}.svg`} 
                              alt={social} 
                              className={`h-8 w-8 bg-black-400 rounded-2xl p-1 dark:bg-white`} 
                            />
                          </a>
                        ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;