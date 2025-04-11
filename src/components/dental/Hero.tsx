
import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('agendar');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-dental-blue/10 to-dental-green-water/10 pt-20 pb-16">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-dental-blue rounded-full filter blur-3xl opacity-10 animate-pulse-light"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-dental-green-water rounded-full filter blur-3xl opacity-10 animate-pulse-light"></div>
      </div>

      <div className="container-custom relative z-10 mt-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-dental-blue font-bold leading-tight mb-6">
            Sorrisos saudáveis, agendamento fácil!
          </h1>
          <p className="text-dental-gray-dark text-xl md:text-2xl mb-8">
            Agende sua consulta online, sem filas e 24/7. 
            Cuidados odontológicos de qualidade com a Dra. Fabiola Figueredo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToBooking} 
              size="lg" 
              className="bg-dental-blue hover:bg-dental-blue-dark text-white"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Agendar Consulta
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-dental-blue text-dental-blue hover:bg-dental-blue/10"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Nossos Serviços
            </Button>
          </div>
        </div>

        {/* Floating dental elements */}
        <div className="hidden lg:block absolute right-0 bottom-0 translate-y-1/4">
          <div className="relative w-[500px] h-[400px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl p-6 transform rotate-6">
              <div className="w-full h-full bg-gradient-to-br from-dental-blue to-dental-green-water rounded opacity-30"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-72 h-48 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl p-4 transform -rotate-3">
              <div className="flex items-center justify-center h-full">
                <svg className="w-32 h-32 text-dental-blue/50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3C13.5 3 15 4 16 5C17 6 17 6.5 18 6.5C19 6.5 19.5 5 20 5C20.5 5 21 5.5 21 6C21 6.5 20.5 8 20 9C19.5 10 19 13 19 15C19 16 18.5 17 18 17.5C17.5 18 17 18 16.5 18C16 18 15 17.5 15 16.5C15 15.5 14.5 15 14 15C13.5 15 13 15.5 13 16.5C13 17.5 12.5 18 12 18C11.5 18 11 17.5 11 16.5C11 15.5 10.5 15 10 15C9.5 15 9 15.5 9 16.5C9 17.5 8 18 7.5 18C7 18 6.5 18 6 17.5C5.5 17 5 16 5 15C5 13 4.5 10 4 9C3.5 8 3 6.5 3 6C3 5.5 3.5 5 4 5C4.5 5 5 6.5 6 6.5C7 6.5 7 6 8 5C9 4 10.5 3 12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-dental-gray-dark text-sm mb-2">Saiba mais</span>
        <div className="w-6 h-10 border-2 border-dental-blue/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-dental-blue/70 rounded animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
