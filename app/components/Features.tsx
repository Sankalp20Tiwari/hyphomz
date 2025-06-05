import { motion } from "framer-motion";
import {
  Clock,
  Shield,
  Star,
  CreditCard,
  Phone,
  CheckCircle,
  Zap,
  Heart,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Book services anytime, day or night. Emergency services available for urgent needs.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Insured & Verified",
      description:
        "All professionals are background-checked, licensed, and fully insured for your peace of mind.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Star,
      title: "5-Star Quality",
      description:
        "Consistently rated 5 stars by customers. We maintain the highest standards of service.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: CreditCard,
      title: "Transparent Pricing",
      description:
        "No hidden fees. Get upfront pricing before booking with our clear, competitive rates.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Phone,
      title: "Real-Time Tracking",
      description:
        "Track your service professional in real-time and get live updates on service progress.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: CheckCircle,
      title: "Satisfaction Guarantee",
      description:
        "100% satisfaction guaranteed. If you're not happy, we'll make it right or refund your money.",
      color: "from-teal-500 to-cyan-500",
    },
  ];

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
              className="group relative p-1 rounded-3xl bg-gradient-to-br from-muted/40 to-muted/20 hover:shadow-2xl backdrop-blur-xl shadow-lg
              "
            >
              <div className="bg-background/90 rounded-3xl p-8 h-full">
                <div
                  className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-xl`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
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
          <div className=" rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
              <span className="text-2xl font-semibold">Loved by thousands</span>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join over 50,000 satisfied customers who trust Hyphomz for their home service needs.
              Our commitment to excellence has made us the leading platform in the industry.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
