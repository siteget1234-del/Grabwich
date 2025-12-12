import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-300 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-300 rounded-full opacity-20 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-400 rounded-full opacity-10 animate-float-slow"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Logo/Brand Image */}
          <div className="mb-8 animate-in fade-in slide-in-from-bottom duration-700">
            <img
              src="https://customer-assets.emergentagent.com/job_00f31d1a-3172-4d0d-bf8b-94dc51647531/artifacts/z19lyvbv_FB_IMG_1765563429882.jpg"
              alt="Grab'Wich Logo"
              className="w-64 h-64 mx-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-700 delay-100">
            Start Your Day the <span className="text-orange-600">Grab'Wich</span> Way!
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            Handmade breakfast sandwiches & burritos crafted with <span className="font-bold text-orange-600">real ingredients</span>, big flavor, and zero waiting.
          </p>

          {/* Key Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <div className="flex items-center space-x-2 text-gray-700">
              <MapPin className="w-5 h-5 text-orange-600" />
              <span className="font-medium">Local & Fresh</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Clock className="w-5 h-5 text-orange-600" />
              <span className="font-medium">Fast Service</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom duration-700 delay-400">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 transition-all hover:scale-105 hover:shadow-xl"
              onClick={() => window.open('https://wa.me/15415564566', '_blank')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Order Now on WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 text-lg px-8 py-6 transition-all hover:scale-105"
              onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
            >
              View Menu
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-gray-600 animate-in fade-in duration-700 delay-500">
            <p className="text-lg">📞 Call/WhatsApp: <a href="tel:+15415564566" className="text-orange-600 hover:underline font-medium">+1 (541) 556-4566</a></p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-orange-600 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;