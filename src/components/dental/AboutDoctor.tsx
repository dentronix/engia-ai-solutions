
import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const AboutDoctor = () => {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="mb-8">
              <h2 className="text-dental-blue mb-2">Dra. Fabiola Figueredo</h2>
              <div className="w-20 h-1 bg-dental-green-water mb-6"></div>
              <p className="text-lg mb-6">
                Formada em Odontologia com especialização em Ortodontia e Estética Dental,
                a Dra. Fabiola tem mais de 10 anos de experiência proporcionando sorrisos 
                saudáveis e bonitos para seus pacientes.
              </p>
              <p className="mb-6">
                Com uma abordagem humanizada e sempre atualizada com as mais recentes
                tecnologias, a Dra. Fabiola combina precisão técnica e cuidado personalizado
                para cada paciente.
              </p>

              <div className="flex items-center mb-4">
                <CheckCircle className="text-dental-green-water h-5 w-5 mr-3 flex-shrink-0" />
                <p>Especialista em Ortodontia e Estética Dental</p>
              </div>
              <div className="flex items-center mb-4">
                <CheckCircle className="text-dental-green-water h-5 w-5 mr-3 flex-shrink-0" />
                <p>Atendimento humanizado e personalizado</p>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-dental-green-water h-5 w-5 mr-3 flex-shrink-0" />
                <p>Constante atualização com novas tecnologias</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="bg-dental-blue/10 rounded-lg p-4 flex items-center">
                <Award className="text-dental-blue h-6 w-6 mr-3" />
                <div>
                  <p className="font-bold text-dental-blue">CRO: 109.041</p>
                  <p className="text-sm text-dental-gray-dark">Conselho Regional de Odontologia</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-96 bg-dental-blue/10 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80" 
                  alt="Dra. Fabiola Figueredo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-dental-blue font-semibold">+ 10 anos</p>
                <p className="text-sm text-dental-gray-dark">de experiência</p>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-dental-green-water/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDoctor;
