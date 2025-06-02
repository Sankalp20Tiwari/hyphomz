"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageTransition } from "../components/PageTransition";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    serviceType: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@hyphomz.com",
      subtitle: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "1-800-HYPHOMZ",
      subtitle: "Available 24/7 for emergencies",
    },
    {
      icon: MapPin,
      title: "Service Areas",
      details: "100+ Cities",
      subtitle: "Expanding nationwide",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 7AM-9PM",
      subtitle: "Sat-Sun: 8AM-6PM",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "", serviceType: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background mt-16">
        <Navbar />

        <section className="pt-24 pb-1 min-h-screen relative bg-[url('https://png.pngtree.com/png-vector/20231127/ourmid/pngtree-web-contact-us-icons-on-blue-tags-online-png-image_10709663.png')] bg-cover bg-center text-white">
          <div className="container mx-auto px-4  backdrop-brightness-10 py-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Link
                href="/"
                className="inline-flex items-center text-black dark:text-white mb-8 hover:underline"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <h1 className="text-5xl md:text-7xl font-bold font-display text-brand-400 mb-6">
                Get in <span className="text-brand-400">Touch</span>
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-brand-400 dark:text-white">
                Questions? Bookings? Feedback? Reach out to us anytime.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-xl transition-shadow border-none">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-brand-400 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <info.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                      <p className="text-brand-600 font-medium mb-1">{info.details}</p>
                      <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >     
              <div className="mb-8 mt-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-brand-400">
                Get In Touch With Us
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-200 text-sm md:text-base max-w-2xl mx-auto">
                Have a question, suggestion, or need support? Fill out the form below and one of our experts will get back to you within 24 hours.
              </p>
            </div>
                <Card className="shadow-xl border-none">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold font-display flex items-center">
                      <MessageSquare className="h-6 w-6 mr-2 text-brand-600" />
                      Send us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input id="name" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} required 
                          className="rounded-xl"/>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required 
                          className="rounded-xl"/>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} 
                          className="rounded-xl" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="serviceType">Service Type</Label>
                          <Input id="serviceType" value={formData.serviceType} onChange={(e) => handleInputChange("serviceType", e.target.value)} 
                          className="rounded-xl"/>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input id="subject" value={formData.subject} onChange={(e) => handleInputChange("subject", e.target.value)} 
                        className="rounded-xl"/>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea id="message" rows={5} value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} required 
                          className="rounded-xl"/>
                      </div>
                      <Button type="submit" className="w-full bg-brand-400 text-white hover:bg-brand-400 rounded-xl">
                        Send Message <Send className="h-4 w-4 ml-2" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold font-display mb-6">
                Frequently Asked <span className="text-brand-400">Questions</span>
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    question: "How soon can I book a service?",
                    answer:
                      "You can typically schedule a service within 24 hours. Availability depends on your location and the type of service required.",
                  },
                  {
                    question: "Are your professionals background-checked?",
                    answer:
                      "Yes, all our service providers go through a strict verification process, including background and skill checks.",
                  },
                  {
                    question: "What happens if I'm not satisfied?",
                    answer:
                      "Customer satisfaction is our priority. If you're not happy with the service, we offer a free revisit or a full refund based on the situation.",
                  },
                  {
                    question: "Do I need to be home during the service?",
                    answer:
                      "It's recommended but not necessary. Many of our clients prefer contactless service. Just provide instructions during booking.",
                  },
                  {
                    question: "Is there any cancellation fee?",
                    answer:
                      "No cancellation fees if you cancel at least 2 hours before the scheduled time. Last-minute cancellations may incur a small fee.",
                  },
                  {
                    question: "Are your services insured?",
                    answer:
                      "Absolutely. All services are covered with insurance to protect against accidental damage or mishaps.",
                  },
                ].map(({ question, answer }, idx) => (
                  <Card key={idx} className="border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-2 flex items-start text-gray-900 dark:text-white">
                        <CheckCircle className="h-5 w-5 text-brand-600 mr-2 mt-0.5 flex-shrink-0" />
                        {question}
                      </h4>
                      <p className="text-muted-foreground text-sm ml-7 leading-relaxed">{answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
            </div>
          </div>
        </section>
          <div className="p-2">
                <Card className="border-none">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">Need Immediate Help?</h3>
                    <p className="text-muted-foreground mb-4">
                      For urgent service requests, call us directly.
                    </p>
                    <Button className="bg-brand-400 text-white hover:bg-brand-700 rounded-xl ">
                      <Phone className="h-4 w-4 mr-2" /> Call Now: 1-800-HYPHOMZ
                    </Button>
                  </CardContent>
                </Card>
          </div>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
