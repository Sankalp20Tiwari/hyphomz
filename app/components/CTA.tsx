import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CTA = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-background via-brand-50/50 to-purple-50/50 dark:from-background dark:via-brand-950/20 dark:to-purple-950/20 overflow-hidden">

      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/cta.jpg"
          alt="Luxury Home Background"
          fill
          priority
          className="object-cover opacity-80 blur-sm"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-brand-500 to-purple-600 rounded-full mb-8 shadow-lg"
          >
            <Sparkles className="h-10 w-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold font-display mb-6 text-gray-50">
            Ready to Transform
            <span className="text-brand-400 block">
              Your Home?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto text-white">
            Join thousands of satisfied customers who trust Hyphomz for their home service needs.
            Book your first service today and experience the difference.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/services">
              <Button
                size="lg"
                className="w-full  rounded-xl sm:w-auto bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Now
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.div>
              </Button>
            </Link>

            <Link href="/auth">
              <Button
                variant="ghost"
                size="lg"
                className="w-full text-gray-50 sm:w-auto px-10 py-4 text-lg"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-lg text-muted-foreground flex items-center justify-center gap-3 flex-wrap text-white"
        >
          <div className="flex items-center gap-1">
            <ShieldCheck className="h-4 w-4 text-brand-500" /> No Setup Fees
          </div>
          <div className="flex items-center gap-1">
            <ShieldCheck className="h-4 w-4 text-brand-500" /> Cancel Anytime
          </div>
          <div className="flex items-center gap-1">
            <ShieldCheck className="h-4 w-4 text-brand-500" /> Satisfaction Guaranteed
          </div>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
