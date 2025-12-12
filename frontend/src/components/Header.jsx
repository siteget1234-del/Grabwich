import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="text-2xl font-bold text-orange-600 hover:scale-105 transition-transform">
              GRAB'WICH
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              className="bg-orange-600 hover:bg-orange-700 text-white transition-all hover:scale-105"
              onClick={() => window.open('https://wa.me/15415564566', '_blank')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Order Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-orange-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-in slide-in-from-top">
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left text-gray-700 hover:text-orange-600 transition-colors font-medium py-2"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="block w-full text-left text-gray-700 hover:text-orange-600 transition-colors font-medium py-2"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-700 hover:text-orange-600 transition-colors font-medium py-2"
            >
              Contact
            </button>
            <Button
              className="w-full bg-orange-600 hover:bg-orange-700 text-white"
              onClick={() => window.open('https://wa.me/15415564566', '_blank')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Order Now
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;