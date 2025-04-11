
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Cases from '@/components/Cases';
import Services from '@/components/Services';
import Blog from '@/components/Blog';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "EngiaAI - Soluções de IA para Engenharia";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Cases />
      <Services />
      <Blog />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
