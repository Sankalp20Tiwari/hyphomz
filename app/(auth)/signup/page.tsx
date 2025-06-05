"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  ArrowLeft, 
  Mail, 
  Lock, 
  User, 
  Phone,
  Eye,
  EyeOff,
  CheckCircle,
  Zap,
  Clock,
  Award
} from "lucide-react";
import { toast } from "sonner";
import { PageTransition } from "@/app/components/PageTransition";
import Image from "next/image";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signupData, setSignupData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    password: "", 
    confirmPassword: "",
    agreeToTerms: false
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupData.name || !signupData.email || !signupData.password) {
      toast.error("Please fill in all required fields");
      return;
    }
    if (signupData.password !== signupData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (!signupData.agreeToTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    toast.success("Account created successfully! Welcome to Hyphomz.");
  };

  const handleSocialLogin = (provider: string) => {
    toast.success(`Signing up with ${provider}...`);
  };

  const benefits = [
    { icon: Zap, text: "Instant booking with verified professionals" },
    { icon: Clock, text: "Same-day service availability" },
    { icon: Award, text: "Exclusive member discounts" },
    { icon: CheckCircle, text: "100% satisfaction guarantee" }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background flex">
        {/* Left Side - Branding & Benefits (Hidden on mobile) */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-500 via-purple-600 to-brand-600 p-12 flex-col justify-between relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full translate-x-32 -translate-y-32" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 translate-y-48" />
          </div>
          
          <div className="relative z-10">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-purple-600">H</span>
                </div>
                <span className="text-3xl font-bold text-white font-display">Hyphomz</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-display leading-tight">
                Join thousands of satisfied homeowners
              </h1>
              
              <p className="text-xl text-white/90 mb-12 leading-relaxed">
                Create your account today and experience the easiest way to manage all your home service needs.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <benefit.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white/90">{benefit.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative z-10 mt-2">
            <div >
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-white mb-1">Ready to get started?</div>
                <div className="text-white/80">Join our community today!</div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                    <Image
                    width={32}
                    height={32}
                    key={i}
                    src={`https://i.pravatar.cc/150?img=${i + 10}`} // random image between 11–15
                    alt={`User ${i}`}
                    className="w-8 h-8 rounded-full border-2 border-purple-500 object-cover"
                    />
                ))}
                </div>
                <span className="text-white/90 text-sm">50,000+ users trust us</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 ">
          <div className="w-full max-w-md">
            {/* Mobile Header */}
            <div className="lg:hidden mb-8 text-center">
              <Link href="/" className="inline-flex items-center text-brand-600 hover:text-brand-700 mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-brand-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-white">H</span>
                </div>
                <span className="text-2xl font-bold text-gradient font-display">Hyphomz</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-xl border-border/50 border-none">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl font-bold font-display">
                    Create Account
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Sign up to access premium home services
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Social Login */}
                  <div className="grid sm:grid-cols-2 gap-3">
                {/* Google Button */}
                <Button
                    variant="ghost"
                    onClick={() => handleSocialLogin("Google")}
                    className="w-full flex items-center justify-center gap-2  text-white hover:shadow-md transition"
                >
                    <Image
                    width={20}
                    height={20}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                    alt="Google Icon"
                    />
                    <span className="text-sm font-medium text-black dark:text-white">Sign in with Google</span>
                </Button>

                {/* Facebook Button */}
                <Button
                    variant="ghost"
                    onClick={() => handleSocialLogin("Facebook")}
                    className="w-full flex items-center justify-center gap-2  text-white hover:shadow-md transition"
                >
                    <Image
                    width={20}
                    height={20}
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                    alt="Facebook Icon"
                    />
                    <span className="text-sm font-medium text-black dark:text-white">Sign in with Facebook</span>
                </Button>
                </div>

                  <div className="relative">
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-background px-4 text-muted-foreground">Or continue with email</span>
                    </div>
                  </div>

                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          value={signupData.name}
                          onChange={(e) => setSignupData(prev => ({ ...prev, name: e.target.value }))}
                          className="pl-10 rounded-xl"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={signupData.email}
                          onChange={(e) => setSignupData(prev => ({ ...prev, email: e.target.value }))}
                          className="pl-10 rounded-xl"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          placeholder="Enter your phone number"
                          value={signupData.phone}
                          onChange={(e) => setSignupData(prev => ({ ...prev, phone: e.target.value }))}
                          className="pl-10 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          value={signupData.password}
                          onChange={(e) => setSignupData(prev => ({ ...prev, password: e.target.value }))}
                          className="pl-10 pr-10 rounded-xl"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={signupData.confirmPassword}
                          onChange={(e) => setSignupData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                          className="pl-10 pr-10 rounded-xl"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        checked={signupData.agreeToTerms}
                        onCheckedChange={(checked) => 
                          setSignupData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
                        }
                        className="mt-1"
                      />
                      <label className="text-sm leading-5">
                        I agree to the{" "}
                        <Link href="#" className="text-brand-600 hover:text-brand-700">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="text-brand-600 hover:text-brand-700">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full rounded-xl bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 text-white"
                    >
                      Create Account
                    </Button>
                  </form>

                  <div className="text-center">
                    <span className="text-muted-foreground">Already have an account? </span>
                    <Link href="/login" className="text-brand-600 hover:text-brand-700 font-medium">
                      Sign in
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Signup;