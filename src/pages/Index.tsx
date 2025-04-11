
import React, { useEffect } from 'react';
import Navbar from '@/components/dental/Navbar';
import Hero from '@/components/dental/Hero';
import AboutDoctor from '@/components/dental/AboutDoctor';
import Services from '@/components/dental/Services';
import Booking from '@/components/dental/Booking';
import Testimonials from '@/components/dental/Testimonials';
import FAQ from '@/components/dental/FAQ';
import Footer from '@/components/dental/Footer';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Espaço Sorriso Odontologia - Agendamento Online";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutDoctor />
      <Services />
      <Booking />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
