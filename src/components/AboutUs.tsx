
import React from 'react';
import { Award, Users, TrendingUp } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
                  alt="Equipe Engia AI"
                  className="w-full h-[450px] object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-engia-teal rounded-xl"></div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-6 max-w-xs">
                <h4 className="text-engia-blue font-bold mb-3">
                  Nossa Experiência
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-engia-gray-dark">Projetos Realizados</span>
                    <span className="font-bold text-engia-blue">120+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-engia-gray-dark">Economia Gerada</span>
                    <span className="font-bold text-engia-blue">R$ 35M+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-engia-gray-dark">Clientes Satisfeitos</span>
                    <span className="font-bold text-engia-blue">98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="mb-2">
              <span className="text-engia-orange">Sobre</span>{" "}
              <span className="text-engia-blue">Nós</span>
            </h2>
            <div className="w-20 h-1 bg-engia-teal mb-6"></div>
            <p className="text-lg mb-6">
              Somos apaixonados por engenharia e tecnologia, unindo essas duas áreas para 
              revolucionar a forma como projetos são concebidos, executados e mantidos.
            </p>
            <p className="text-lg mb-6">
              Fundada em 2022 por uma equipe de engenheiros e especialistas em IA, a EngiaAI 
              nasceu da necessidade de tornar projetos de engenharia mais eficientes, 
              sustentáveis e economicamente viáveis através da aplicação de tecnologias 
              de inteligência artificial.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-engia-gray-light p-5 rounded-lg text-center card-hover">
                <div className="bg-engia-blue w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-white h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Equipe Especializada</h3>
                <p className="text-engia-gray-dark">Engenheiros e cientistas de dados trabalhando juntos</p>
              </div>
              
              <div className="bg-engia-gray-light p-5 rounded-lg text-center card-hover">
                <div className="bg-engia-orange w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="text-white h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Inovação Contínua</h3>
                <p className="text-engia-gray-dark">Sempre na vanguarda das tecnologias de IA</p>
              </div>
              
              <div className="bg-engia-gray-light p-5 rounded-lg text-center card-hover">
                <div className="bg-engia-teal w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="text-white h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Reconhecimento</h3>
                <p className="text-engia-gray-dark">Premiados por excelência e inovação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
