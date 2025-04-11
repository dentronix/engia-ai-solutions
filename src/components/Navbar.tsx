
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-engia-blue">
            <span className="text-engia-orange">Engia</span>AI
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className="text-engia-gray-dark hover:text-engia-blue transition-colors">
            Sobre Nós
          </a>
          <a href="#cases" className="text-engia-gray-dark hover:text-engia-blue transition-colors">
            Cases
          </a>
          <a href="#solucoes" className="text-engia-gray-dark hover:text-engia-blue transition-colors">
            Soluções
          </a>
          <a href="#blog" className="text-engia-gray-dark hover:text-engia-blue transition-colors">
            Blog
          </a>
          <Button variant="default" className="bg-engia-blue hover:bg-engia-blue-dark">
            Fale Conosco
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-engia-blue p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute top-full left-0 right-0 animate-slide-in-right">
          <div className="flex flex-col space-y-4">
            <a
              href="#sobre"
              className="text-engia-gray-dark hover:text-engia-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nós
            </a>
            <a
              href="#cases"
              className="text-engia-gray-dark hover:text-engia-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Cases
            </a>
            <a
              href="#solucoes"
              className="text-engia-gray-dark hover:text-engia-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Soluções
            </a>
            <a
              href="#blog"
              className="text-engia-gray-dark hover:text-engia-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </a>
            <Button variant="default" className="bg-engia-blue hover:bg-engia-blue-dark w-full">
              Fale Conosco
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
