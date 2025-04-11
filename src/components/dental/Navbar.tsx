
import React, { useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/placeholder.svg" 
            alt="Espaço Sorriso Odontologia" 
            className="h-10 w-auto mr-3"
          />
          <div className="hidden md:block">
            <h1 className="text-lg font-montserrat font-semibold text-dental-blue">
              Espaço Sorriso
            </h1>
            <p className="text-xs text-dental-gray-dark -mt-1">Odontologia</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-dental-gray-dark hover:text-dental-blue transition-colors"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('servicos')}
            className="text-dental-gray-dark hover:text-dental-blue transition-colors"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('depoimentos')}
            className="text-dental-gray-dark hover:text-dental-blue transition-colors"
          >
            Depoimentos
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-dental-gray-dark hover:text-dental-blue transition-colors"
          >
            FAQ
          </button>
        </div>

        {/* Contact and Booking Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:+5511999999999" className="flex items-center text-dental-gray-dark hover:text-dental-blue">
            <Phone className="h-4 w-4 mr-2" />
            <span>Ligar</span>
          </a>
          <Button 
            onClick={() => scrollToSection('agendar')} 
            className="bg-dental-blue hover:bg-dental-blue-dark text-white"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Agendar Consulta
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-dental-gray-dark hover:text-dental-blue transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-dental-gray-dark hover:text-dental-blue transition-colors py-2 text-left"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-dental-gray-dark hover:text-dental-blue transition-colors py-2 text-left"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-dental-gray-dark hover:text-dental-blue transition-colors py-2 text-left"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-dental-gray-dark hover:text-dental-blue transition-colors py-2 text-left"
            >
              FAQ
            </button>
            <div className="flex items-center space-x-4 pt-2 border-t border-gray-100">
              <a href="tel:+5511999999999" className="flex items-center text-dental-gray-dark hover:text-dental-blue py-2">
                <Phone className="h-4 w-4 mr-2" />
                <span>Ligar</span>
              </a>
              <Button 
                onClick={() => scrollToSection('agendar')} 
                className="bg-dental-blue hover:bg-dental-blue-dark text-white"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Agendar
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
