
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-engia-blue-dark via-engia-blue to-engia-teal pb-16">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      
      {/* Tech elements and particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-engia-blue-light rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-engia-teal rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-2/3 left-1/2 w-32 h-32 bg-engia-orange rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      <div className="container-custom relative z-10 mt-20">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-white font-bold leading-tight mb-6">
            Revolucionando a Engenharia com IA
          </h1>
          <p className="text-white/90 text-xl md:text-2xl mb-8">
            Soluções inteligentes para projetos mais eficientes, 
            precisos e sustentáveis. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="default" size="lg" className="bg-engia-orange hover:bg-engia-orange-dark">
              Conheça nossos cases
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              Fale com um especialista
            </Button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="hidden lg:block absolute right-0 bottom-0 translate-y-1/4">
          <div className="relative w-[500px] h-[400px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl p-6 transform rotate-6">
              <div className="w-full h-full bg-gradient-to-br from-engia-blue to-engia-teal rounded opacity-30"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-72 h-48 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 shadow-xl p-4 transform -rotate-3">
              <div className="h-2 w-24 bg-engia-orange/50 rounded mb-3"></div>
              <div className="h-2 w-32 bg-white/50 rounded mb-3"></div>
              <div className="h-2 w-40 bg-white/50 rounded mb-3"></div>
              <div className="h-2 w-36 bg-white/50 rounded mb-3"></div>
              <div className="h-2 w-20 bg-white/50 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white/70 text-sm mb-2">Saiba mais</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-white/70 rounded animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
