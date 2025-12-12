import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import WhyLoveUs from '../components/WhyLoveUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <MenuSection />
      <WhyLoveUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;