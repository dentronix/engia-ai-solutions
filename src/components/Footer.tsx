
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-engia-blue text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <a href="#" className="text-2xl font-bold">
                <span className="text-engia-orange">Engia</span>AI
              </a>
            </div>
            <p className="text-white/80 mb-6">
              Transformando a engenharia através da inteligência artificial, criando soluções mais eficientes, sustentáveis e inovadoras.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#cases" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Cases de Sucesso
                </a>
              </li>
              <li>
                <a href="#solucoes" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Soluções
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Blog
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Generative Design
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Otimização de Custos
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Manutenção Preditiva
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Análise Estrutural
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Eficiência Energética
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-white/80 mb-4">
              Inscreva-se para receber nossas últimas notícias e artigos sobre IA em engenharia.
            </p>
            <div className="flex mb-4">
              <Input 
                placeholder="Seu email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-r-none focus-visible:ring-white/30" 
              />
              <Button className="bg-engia-orange hover:bg-engia-orange-dark rounded-l-none">
                Inscrever
              </Button>
            </div>
            <p className="text-white/60 text-xs">
              Ao se inscrever, você concorda em receber nossos emails. Você pode cancelar a qualquer momento.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} EngiaAI. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
