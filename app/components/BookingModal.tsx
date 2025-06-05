import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  User, 
  Mail, 
  Phone,
  CreditCard,
  CheckCircle,
  Star
} from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

interface Service {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  features: string[];
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service | null;
}

export const BookingModal = ({ isOpen, onClose, service }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: ""
  });

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleBooking = () => {
    // Simulate booking process
    toast.success("Booking confirmed! You'll receive a confirmation email shortly.");
    onClose();
    setStep(1);
    setSelectedDate(undefined);
    setSelectedTime("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      notes: ""
    });
  };

  if (!service) return null;

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6 bg-white dark:bg-black p-6 rounded-xl shadow-lg"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Select Date & Time</h3>
              <p className="text-muted-foreground">Choose your preferred date and time slot</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label className="text-base font-medium mb-3 block">Select Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal h-12 rounded-xl">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto  dark:bg-black bg-white shadow-lg"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label className="text-base font-medium mb-3 block">Select Time</Label>
                <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto ">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "ghost" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTime(time)}
                      className={`text-xs ${selectedTime === time ? "bg-brand-400 text-white" : "text-muted-foreground"} hover:bg-brand-100 hover:text-brand-600 rounded-xl `}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button 
                onClick={handleNext}
                disabled={!selectedDate || !selectedTime}
                className="bg-brand-400 text-white rounded-xl"
              >
                Continue
              </Button>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Your Information</h3>
              <p className="text-muted-foreground">Please provide your contact details</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <div className="relative space-y-2">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="pl-10 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="pl-10 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="pl-10 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Service Address *</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="address"
                    placeholder="Enter service address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className="pl-10 rounded-xl"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Textarea
                id="notes"
                placeholder="Any specific requirements or notes..."
                value={formData.notes}
                onChange={(e) => handleInputChange("notes", e.target.value)}
                rows={3}
                className="rounded-xl"
              />
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack} className="text-muted-foreground rounded-xl">
                Back
              </Button>
              <Button 
                onClick={handleNext}
                disabled={!formData.name || !formData.email || !formData.phone || !formData.address}
                className="bg-brand-400 rounded-xl text-white "
              >
                Continue
              </Button>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Booking Summary</h3>
              <p className="text-muted-foreground">Review your booking details</p>
            </div>

            <div className="bg-muted/50 rounded-lg p-6 space-y-4">
              <div className="flex items-center space-x-4">
                <Image
                  width={64}
                  height={64}
                  src={service.image} 
                  alt={service.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold">{service.title}</h4>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{service.rating} ({service.reviews} reviews)</span>
                  </div>
                  <Badge variant="secondary" className="mt-1">
                    {service.category}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">${service.price}</div>
                  <div className="text-sm text-muted-foreground">{service.duration}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <div className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-2 text-brand-500" />
                  <span className="font-medium">Date:</span>
                  <span className="ml-2">{selectedDate ? format(selectedDate, "PPP") : "Not selected"}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-brand-500" />
                  <span className="font-medium">Time:</span>
                  <span className="ml-2">{selectedTime}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-brand-500" />
                  <span className="font-medium">Address:</span>
                  <span className="ml-2">{formData.address}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2 text-brand-500" />
                  <span className="font-medium">Name:</span>
                  <span className="ml-2">{formData.name}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-brand-500" />
                  <span className="font-medium">Email:</span>
                  <span className="ml-2">{formData.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-brand-500" />
                  <span className="font-medium">Phone:</span>
                  <span className="ml-2">{formData.phone}</span>
                </div>
              </div>
            </div>

            {formData.notes && (
              <div className="bg-muted/30 rounded-lg p-4">
                <h5 className="font-medium mb-2">Additional Notes:</h5>
                <p className="text-sm text-muted-foreground">{formData.notes}</p>
              </div>
            )}

            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total Amount:</span>
                <span className="text-brand-600">${service.price}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Final pricing may vary based on specific requirements
              </p>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button 
                onClick={handleBooking}
                className="bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 text-white"
              >
                <CreditCard className="h-4 w-4 mr-2" />
                Confirm Booking
              </Button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose} >
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-black p-6 rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <span>Book {service?.title}</span>
            <div className="flex items-center space-x-2">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= num 
                      ? "bg-brand-500 text-white" 
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step > num ? <CheckCircle className="h-4 w-4" /> : num}
                </div>
              ))}
            </div>
          </DialogTitle>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};