import { features } from "@/data/features";
import { motion } from "framer-motion";
import {
  Zap,
} from "lucide-react";
import Image from "next/image";


const Features = () => {
  

  return (
    <section className="relative py-24 overflow-hidden bg-background">

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 border  border-brand-200 dark:border-brand-800 rounded-full px-6 py-2 mb-8">
            <Zap className="h-4 w-4 text-brand-500" />
            <span className="text-sm font-medium text-brand-700 dark:text-brand-300">
              Why Choose Hyphomz
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Built for <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We&apos;ve reimagined home services to be more reliable, transparent, and convenient.
            Experience the difference with every booking.
          </p>
        </motion.div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="group relative  rounded-3xl bg-gradient-to-br from-muted/40 to-muted/20 hover:shadow-2xl backdrop-blur-xl shadow-lg
              "
            >
              <div className="bg-background/90 rounded-3xl p-8 h-full">
                <div
                  className={`w-20 h-20 mb-6  rounded-lg  flex items-center justify-center `}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={100}
                    height={100}
                    className="object-contain w-16"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-brand-600">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <div className=" rounded-3xl p-8 md:p-12 ">
            <div className="flex items-center justify-center mb-6">
              <span className="text-4xl">
                ❤️
              </span>
              <span className="text-2xl font-semibold">Loved by thousands</span>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join over{' '} 
              <span className="font-extrabold text-brand-600 ">
                50,000 satisfied customers
              </span> who trust Hyphomz for their home service needs.
              Our commitment to excellence has made us the leading platform in the industry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
