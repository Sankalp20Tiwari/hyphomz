'use client'
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight,
  Contact
} from "lucide-react";
import Link from "next/link";
import { PageTransition } from "../components/PageTransition";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { aboutStats, team, values } from "@/data/about";

const About = () => {
  

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 relative overflow-hidden">
          {/* <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-purple-50 dark:from-brand-950/20 dark:to-purple-950/20" /> */}
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
                About <span className="text-gradient">Hyphomz</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We&apos;re revolutionizing home services by connecting homeowners with trusted, 
                professional service providers at the tap of a button. Since 2020, we&apos;ve been 
                making home maintenance simple, reliable, and stress-free.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Link href="/services">
                  <Button className=" rounded-2xl bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 text-white">
                    Explore Services
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact" className="flex items-center justify-center">
                  <Button variant="ghost" className="text-lg">Contact Us</Button>
                <Contact className="6 text-muted-foreground" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {aboutStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold font-display mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Hyphomz was born from a simple frustration: finding reliable home service 
                  providers shouldn&apos;t be a hassle. Our founders experienced firsthand the 
                  challenges of coordinating repairs, installations, and maintenance tasks.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We set out to create a platform that would connect homeowners with 
                  pre-screened, professional service providers who could deliver quality 
                  work on time, every time. Today, we&apos;re proud to serve thousands of 
                  customers across major cities.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                    <Image
                    width={40}
                    height={40}
                    key={i}
                    src={`https://i.pravatar.cc/150?img=${i + 10}`} // random image between 11–15
                    alt={`User ${i}`}
                    className="w-10 h-10 rounded-full border-2 border-purple-500 object-cover"
                    />
                ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Trusted by thousands of homeowners
                  </span>
                </div>
              </motion.div>
              
                <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
                >
                <div
                    className="aspect-square rounded-2xl bg-cover bg-center p-8 flex items-center justify-center shadow-xl"
                    style={{
                    backgroundImage: `linear-gradient(rgba(15, 15, 15, 0.5), rgba(15, 15, 15, 0.5)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80')`,
                    }}
                >
                    <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-brand-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
                        H
                    </div>
                    <h3 className="text-2xl font-bold font-display text-white">Hyphomz</h3>
                    <p className="text-sm text-white/70">Simplifying home services</p>
                    </div>
                </div>
                </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section
        className="py-16 bg-cover bg-center relative"
        style={{
            backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg')",
        }}
        >
        <div className="container mx-auto px-4 text-white">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
            >
            <h2 className="text-4xl font-bold font-display mb-4">Our Values</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
                These core principles guide everything we do and shape how we serve our customers.
            </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
                <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                <Card className="h-full backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl hover:shadow-2xl transition-all">
                    <CardContent className="p-6 text-center text-white">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <value.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">
                        {value.description}
                    </p>
                    </CardContent>
                </Card>
                </motion.div>
            ))}
            </div>
        </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-[#0f0f0f] dark:via-[#111] dark:to-[#0f0f0f]">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-extrabold font-display mb-4 text-zinc-900 dark:text-white">
        Meet Our Team
      </h2>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
        The passionate minds behind Hyphomz, crafting seamless home service experiences with excellence.
      </p>
    </motion.div>

    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {team.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="group rounded-3xl overflow-hidden shadow-xl bg-white dark:bg-zinc-900 transition hover:-translate-y-1 hover:shadow-2xl">
            <div className="h-72 w-full overflow-hidden">
              <Image
                width={500}
                height={500}
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-1">
                {member.name}
              </h3>
              <p className="text-brand-600 dark:text-brand-400 mb-4 font-medium uppercase tracking-wide text-sm">
                {member.role}
              </p>
              <blockquote className="text-sm text-muted-foreground italic border-l-4 border-brand-500 pl-4">
                &quot;{member.quote}&quot;
              </blockquote>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;