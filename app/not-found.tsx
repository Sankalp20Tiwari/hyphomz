'use client'
import React, { useState, useEffect } from 'react';
import { Home, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const NotFoundPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        <div 
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {/* Main 404 Section */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>


          {/* 404 Number */}
          <div className="relative mb-8">
            <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-gradient-to-b from-white/20 to-white/5 bg-clip-text select-none">
              404
            </h1>
            <div className="absolute inset-0 text-9xl md:text-[12rem] font-black text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text animate-pulse">
              404
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Oops! Service Not Found
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Looks like this page took an unscheduled break. Don&apos;t worry - our home services are still running smoothly! 
              Let&apos;s get you back to finding the perfect service for your home.
            </p>
          </div>


          <Link href={"/"}>
          <div className="flex flex-col sm:flex-row gap-4 mb-16 items-center justify-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                              <div className="relative flex items-center justify-center space-x-2">
                <Home className="w-5 h-5" />
                <span>Back to Home</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </div>         
            </button>
          </div>
          </Link>

        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Hyphomz. Premium home services at your fingertips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;