
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contato" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-2">
              <span className="text-engia-blue">Vamos transformar suas</span>{" "}
              <span className="text-engia-orange">ideias em realidade</span>
            </h2>
            <div className="w-20 h-1 bg-engia-teal mb-6"></div>
            <p className="text-lg text-engia-gray-dark mb-8">
              Entre em contato com nossos especialistas para discutir como 
              nossas soluções de IA podem otimizar seus projetos de engenharia.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-8 h-8 rounded-full bg-engia-blue flex items-center justify-center">
                    <Mail className="text-white w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-engia-gray-dark">contato@engiaai.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-8 h-8 rounded-full bg-engia-blue flex items-center justify-center">
                    <Phone className="text-white w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Telefone</h4>
                  <p className="text-engia-gray-dark">(11) 4321-9876</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="w-8 h-8 rounded-full bg-engia-blue flex items-center justify-center">
                    <MapPin className="text-white w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Endereço</h4>
                  <p className="text-engia-gray-dark">
                    Av. Engenheiro Carlos Reinaldo Mendes, 3340
                    <br />São Paulo, SP - 04567-003
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-engia-gray-light p-6 rounded-lg">
              <h4 className="font-semibold mb-3">Por que trabalhar conosco?</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="text-engia-teal mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Soluções customizadas para suas necessidades específicas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-engia-teal mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Economia comprovada de recursos e tempo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-engia-teal mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Equipe especializada com vasta experiência em campo</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="text-engia-teal mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Inovação contínua com as mais recentes tecnologias</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6">Fale com um especialista</h3>
              
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Nome</label>
                    <Input id="name" placeholder="Seu nome completo" className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <Input id="email" type="email" placeholder="seu@email.com" className="w-full" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">Empresa</label>
                  <Input id="company" placeholder="Nome da sua empresa" className="w-full" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Assunto</label>
                  <Input id="subject" placeholder="Como podemos ajudar?" className="w-full" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Mensagem</label>
                  <Textarea 
                    id="message" 
                    placeholder="Descreva seu projeto ou necessidade" 
                    className="w-full min-h-[120px]" 
                  />
                </div>
                
                <Button className="w-full bg-engia-blue hover:bg-engia-blue-dark">
                  Enviar mensagem
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <p className="text-xs text-engia-gray-dark text-center">
                  Ao enviar este formulário, você concorda com nossa 
                  <a href="#" className="text-engia-blue hover:underline"> política de privacidade</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
