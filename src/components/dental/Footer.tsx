
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dental-blue text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/placeholder.svg" 
                alt="Espaço Sorriso Odontologia" 
                className="h-10 w-auto mr-3 bg-white rounded-full p-1"
              />
              <div>
                <h3 className="text-lg font-montserrat font-semibold">
                  Espaço Sorriso
                </h3>
                <p className="text-xs text-white/80">Odontologia</p>
              </div>
            </div>
            <p className="text-white/80 mb-6">
              Cuidando do seu sorriso com o que há de melhor em tecnologia e atendimento humanizado.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/espacosorriso" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/espacosorriso" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                <p>Av. Paulista, 1000, Conjunto 101<br />Bela Vista - São Paulo/SP<br />CEP: 01310-100</p>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                <a href="tel:+551199999999" className="hover:underline">(11) 9999-9999</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                <a href="mailto:contato@espacosorriso.com.br" className="hover:underline">contato@espacosorriso.com.br</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Horário de Atendimento</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Segunda a Sexta:</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span>08:00 - 12:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span>Fechado</span>
              </li>
            </ul>
            <div className="mt-6 bg-white/10 rounded-lg p-4 flex items-start">
              <Clock className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
              <p className="text-sm">
                Agendamentos online disponíveis 24 horas por dia, 7 dias por semana pelo nosso site.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Mapa</h3>
            <div className="rounded-lg overflow-hidden h-48 bg-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976729802897!2d-46.6549278!3d-23.5651116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1712867400000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Espaço Sorriso Odontologia. Todos os direitos reservados. CRO: 109.041
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</a>
            <span>|</span>
            <a href="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
