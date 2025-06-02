'use client';
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
  Eye,
  EyeOff,
  CheckCircle,
  Star,
  Users,
  Shield
} from "lucide-react";
import { toast } from "sonner";
import { PageTransition } from "@/app/components/PageTransition";
import Image from "next/image";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "", rememberMe: false });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Login successful! Welcome back to Hyphomz.");
  };

  const handleSocialLogin = (provider: string) => {
    toast.success(`Signing in with ${provider}...`);
  };

  const features = [
    { icon: CheckCircle, text: "Access to 100+ verified professionals" },
    { icon: Star, text: "Priority booking and exclusive discounts" },
    { icon: Shield, text: "100% satisfaction guarantee" },
    { icon: Users, text: "24/7 customer support" }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background flex">
        {/* Left Side - Branding & Features (Hidden on mobile) */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-brand-500 via-brand-600 to-purple-600 p-12 flex-col justify-between relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48" />
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
                  <span className="text-2xl font-bold text-brand-600">H</span>
                </div>
                <span className="text-3xl font-bold text-white font-display">Hyphomz</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-display leading-tight">
                Welcome back to your home services platform
              </h1>
              
              <p className="text-xl text-white/90 mb-12 leading-relaxed">
                Sign in to access your dashboard, manage bookings, and connect with trusted professionals.
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-white/90">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative z-10">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white">50K+</div>
                <div className="text-white/80 text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-white/80 text-sm">Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-white/80 text-sm">Guaranteed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
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
                    Sign In
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Welcome back! Please sign in to your account.
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Social Login */}
                <div className="grid sm:grid-cols-2 gap-3 ">
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
                    <span className="text-sm font-medium text-black dark:text-white ">Sign in with Google</span>
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

                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={loginData.email}
                          onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                          className="pl-10 rounded-xl"
                          required
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
                          placeholder="Enter your password"
                          value={loginData.password}
                          onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
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

                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2">
                        <Checkbox 
                          checked={loginData.rememberMe}
                          onCheckedChange={(checked) => 
                            setLoginData(prev => ({ ...prev, rememberMe: checked as boolean }))
                          }
                        />
                        <span className="text-sm">Remember me</span>
                      </label>
                      <Link href="#" className="text-sm text-brand-600 hover:text-brand-700">
                        Forgot password?
                      </Link>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full rounded-xl bg-gradient-to-r from-brand-500 to-purple-600 hover:from-brand-600 hover:to-purple-700 text-white"
                    >
                      Sign In
                    </Button>
                  </form>

                  <div className="text-center">
                    <span className="text-muted-foreground">Don't have an account? </span>
                    <Link href="/signup" className="text-brand-600 hover:text-brand-700 font-medium">
                      Sign up
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

export default Login;