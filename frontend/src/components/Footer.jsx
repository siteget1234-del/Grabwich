import React, { useState, useEffect } from 'react';
import { Phone, Facebook } from 'lucide-react';

const Footer = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAnimating(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const footerElement = document.getElementById('footer-animation');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Animated Sandwich Assembly Section */}
        <div id="footer-animation" className="max-w-3xl mx-auto mb-12 text-center">
          <div className="relative h-64 flex items-center justify-center">
            {/* Animated sandwich building illustration */}
            <div className="relative w-full max-w-md">
              {/* Top Bun */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
                  isAnimating ? 'top-0 opacity-100' : '-top-20 opacity-0'
                }`}
                style={{ transitionDelay: '0ms' }}
              >
                <div className="w-48 h-12 bg-orange-300 rounded-t-full border-4 border-orange-400 mx-auto"></div>
              </div>

              {/* Cheese */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
                  isAnimating ? 'top-10 opacity-100' : '-top-20 opacity-0'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="w-44 h-4 bg-yellow-300 border-4 border-yellow-400 mx-auto"></div>
              </div>

              {/* Bacon */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
                  isAnimating ? 'top-16 opacity-100' : '-top-20 opacity-0'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="flex space-x-1 mx-auto justify-center">
                  <div className="w-10 h-3 bg-red-700 rounded-sm"></div>
                  <div className="w-10 h-3 bg-red-700 rounded-sm"></div>
                  <div className="w-10 h-3 bg-red-700 rounded-sm"></div>
                  <div className="w-10 h-3 bg-red-700 rounded-sm"></div>
                </div>
              </div>

              {/* Egg */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
                  isAnimating ? 'top-20 opacity-100' : '-top-20 opacity-0'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="w-40 h-6 bg-yellow-100 rounded-full border-4 border-yellow-200 mx-auto"></div>
              </div>

              {/* Bottom Bun */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
                  isAnimating ? 'top-28 opacity-100' : '-top-20 opacity-0'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <div className="w-48 h-10 bg-orange-400 rounded-b-lg border-4 border-orange-500 mx-auto"></div>
              </div>

              {/* Grabbing Hand */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${
                  isAnimating ? 'top-16 opacity-100 scale-100' : 'top-32 opacity-0 scale-50'
                }`}
                style={{ transitionDelay: '1200ms' }}
              >
                <div className="text-6xl">&#128076;</div>
              </div>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-orange-400 mt-8 mb-2">
            Grab'Wich – Handmade Breakfast in a Hurry
          </h3>
          <p className="text-xl text-gray-300">
            Fueling your morning, one bite at a time.
          </p>
        </div>

        {/* Footer Links */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-orange-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('why-us').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Why Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center">
            <h4 className="text-lg font-bold text-orange-400 mb-4">Contact Us</h4>
            <div className="space-y-2">
              <a
                href="tel:+15415564566"
                className="flex items-center justify-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+1 (541) 556-4566</span>
              </a>
              <a
                href="https://www.facebook.com/share/1F2dTeqEVS/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-bold text-orange-400 mb-4">Follow Us</h4>
            <p className="text-gray-300">
              Check our Facebook page for current location, hours, and daily specials!
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Grab'Wich. All rights reserved.</p>
          <p className="mt-2 text-sm">Made with &#10084;&#65039; for breakfast lovers everywhere</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;