import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  

  return (
    <section className="py-24 bg-muted/20 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold font-display mb-4 tracking-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-brand-500 to-purple-600 text-transparent bg-clip-text">
              Customers Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover real stories from real people who’ve made Hyphomz a part of their homes and lives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <Card className="bg-white/80 dark:bg-zinc-900/70 backdrop-blur-xl border-none shadow-xl hover:shadow-2xl rounded-2xl transition-all h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4 text-brand-500">
                    <Quote className="w-7 h-7 opacity-60" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    “{testimonial.content}”
                  </p>

                  <div className="flex items-center mt-auto">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-4 border-2 border-white/60 shadow-sm"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
