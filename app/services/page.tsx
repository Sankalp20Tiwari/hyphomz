'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PageTransition } from "../components/PageTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { BookingModal } from "../components/BookingModal";
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  DollarSign,
  Wrench,
  Paintbrush,
  Zap,
  Droplets,
  Hammer,
  Car,
  Leaf,
  Shield,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const categories = [
    { name: "All", icon: Filter },
    { name: "Handyman", icon: Wrench },
    { name: "Painting", icon: Paintbrush },
    { name: "Electrical", icon: Zap },
    { name: "Plumbing", icon: Droplets },
    { name: "Renovation", icon: Hammer },
    { name: "HVAC", icon: Car },
    { name: "Landscaping", icon: Leaf },
    { name: "Security", icon: Shield }
  ];

  const services = [
    {
      id: 1,
      title: "Furniture Assembly",
      category: "Handyman",
      description: "Professional assembly of all types of furniture including IKEA, beds, desks, and more.",
      price: 75,
      duration: "1-2 hours",
      rating: 4.9,
      reviews: 1247,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      features: ["Tools included", "Cleanup service", "Warranty included"]
    },
    {
      id: 2,
      title: "Interior Painting",
      category: "Painting",
      description: "Transform your space with professional interior painting services.",
      price: 200,
      duration: "4-8 hours",
      rating: 4.8,
      reviews: 892,
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400",
      features: ["Premium paint", "Color consultation", "Surface prep"]
    },
    {
      id: 3,
      title: "Electrical Outlet Installation",
      category: "Electrical",
      description: "Safe installation of new electrical outlets by licensed electricians.",
      price: 120,
      duration: "1-3 hours",
      rating: 4.9,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400",
      features: ["Licensed electrician", "Code compliant", "Safety tested"]
    },
    {
      id: 4,
      title: "Leak Repair",
      category: "Plumbing",
      description: "Fast and reliable repair of all types of leaks in your home.",
      price: 95,
      duration: "1-2 hours",
      rating: 4.7,
      reviews: 743,
      image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=400",
      features: ["Emergency service", "24/7 availability", "Guaranteed fix"]
    },
    {
      id: 5,
      title: "Kitchen Renovation",
      category: "Renovation",
      description: "Complete kitchen makeover with modern designs and quality materials.",
      price: 5000,
      duration: "1-2 weeks",
      rating: 4.8,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
      features: ["Design consultation", "Premium materials", "Project management"]
    },
    {
      id: 6,
      title: "AC Installation",
      category: "HVAC",
      description: "Professional installation of air conditioning systems for optimal comfort.",
      price: 800,
      duration: "4-6 hours",
      rating: 4.9,
      reviews: 445,
      image: "https://5.imimg.com/data5/SELLER/Default/2025/1/478884012/WE/ZR/BM/31810354/split-ac-installation-in-lucknow.jpg",
      features: ["Energy efficient", "Warranty included", "Post-install support"]
    },
    {
      id: 7,
      title: "Garden Design",
      category: "Landscaping",
      description: "Beautiful garden design and landscaping to enhance your outdoor space.",
      price: 300,
      duration: "1-2 days",
      rating: 4.6,
      reviews: 321,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400",
      features: ["Custom design", "Plant selection", "Maintenance tips"]
    },
    {
      id: 8,
      title: "Security Camera Setup",
      category: "Security",
      description: "Professional installation and setup of home security camera systems.",
      price: 250,
      duration: "2-4 hours",
      rating: 4.8,
      reviews: 186,
      image: "data:image/jpeg;base64,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",
      features: ["HD cameras", "Mobile app", "Night vision"]
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBookService = (service: any) => {
    setSelectedService(service);
    setIsBookingModalOpen(true);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background ">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-brand-50 to-purple-50 dark:from-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Link href="/" className="inline-flex items-center text-brand-600 hover:text-brand-700 mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              
              <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">
                Professional <span className="text-gradient">Home Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Browse our comprehensive catalog of home services and book the perfect solution for your needs.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-lg rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8  border-b border-border">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {categories.map((category) => (
                <motion.button
                  key={category.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.name
                      ? "bg-brand-500 text-white border-brand-500 shadow-lg"
                      : "bg-background text-muted-foreground border-border hover:border-brand-300 hover:text-brand-600"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span className="font-medium">{category.name}</span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-semibold mb-2">
                {selectedCategory === "All" ? "All Services" : `${selectedCategory} Services`}
              </h2>
              <p className="text-muted-foreground">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} available
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory + searchTerm}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 bg-background border-border/50 overflow-hidden group border-none">
                      <div className="relative aspect-video overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3 rounded-full bg-white/80 backdrop-blur-md p-1 shadow-lg">
                          <Badge className=" text-brand-600 font-semibold text-[16px]">
                            ${service.price}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {service.category}
                          </Badge>
                          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>{service.rating}</span>
                            <span>({service.reviews})</span>
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold mb-2 group-hover:text-brand-600 transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {service.description}
                        </p>

                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {service.duration}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            Starting at ${service.price}
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {service.features.slice(0, 2).map((feature, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs rounded-2xl py-1 px-3" >
                                {feature}
                              </Badge>
                            ))}
                            {service.features.length > 2 && (
                              <Badge variant="outline" className="text-xs rounded-2xl py-1">
                                +{service.features.length - 2} more
                              </Badge>
                            )}
                          </div>
                        </div>

                        <Button 
                          onClick={() => handleBookService(service)}
                          className="w-full rounded-2xl bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 text-white"
                        >
                          Book Now
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">No services found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or selecting a different category.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          service={selectedService}
        />

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Services;