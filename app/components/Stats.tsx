import { stats } from "@/data/stats";
import { motion } from "framer-motion";

const Stats = () => {
  

  return (
    <section className="py-20 bg-gradient-to-br from-brand-500 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Numbers that speak for our commitment to excellence and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg`}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-2"
              >
                {stat.value}
              </motion.div>
              
              <p className="text-white/80 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;