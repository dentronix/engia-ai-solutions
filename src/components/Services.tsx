
import React from 'react';
import { 
  Layers, 
  TrendingUp, 
  Wrench, 
  BarChart4, 
  Zap, 
  Compass, 
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Define service types
type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  link: string;
};

// Service data
const services: Service[] = [
  {
    id: 1,
    title: "Generative Design",
    description: "Algoritmos que geram múltiplas soluções de design com base em parâmetros e restrições específicas, revolucionando o processo criativo.",
    icon: <Layers className="h-6 w-6" />,
    color: "bg-gradient-to-br from-engia-blue to-engia-teal",
    link: "#"
  },
  {
    id: 2,
    title: "Otimização de Custos",
    description: "Análise avançada de dados para identificar oportunidades de redução de custos sem comprometer a qualidade ou desempenho.",
    icon: <BarChart4 className="h-6 w-6" />,
    color: "bg-gradient-to-br from-engia-orange to-engia-orange-light",
    link: "#"
  },
  {
    id: 3,
    title: "Manutenção Preditiva",
    description: "Previsão de falhas e necessidades de manutenção antes que ocorram, maximizando o tempo de atividade e reduzindo custos.",
    icon: <Wrench className="h-6 w-6" />,
    color: "bg-gradient-to-br from-engia-blue-dark to-engia-blue",
    link: "#"
  },
  {
    id: 4,
    title: "Análise Estrutural Avançada",
    description: "Simulações potencializadas por IA que analisam comportamentos estruturais complexos sob diferentes condições.",
    icon: <Compass className="h-6 w-6" />,
    color: "bg-gradient-to-br from-engia-teal to-[#3DE7B1]",
    link: "#"
  },
  {
    id: 5,
    title: "Eficiência Energética",
    description: "Otimização do consumo de energia através de análises preditivas e recomendações baseadas em IA.",
    icon: <Zap className="h-6 w-6" />,
    color: "bg-gradient-to-br from-[#4D7CFE] to-[#7A66FF]",
    link: "#"
  },
  {
    id: 6,
    title: "Análise Preditiva de Desempenho",
    description: "Previsão de desempenho de projetos e processos com base em dados históricos e padrões identificados por IA.",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "bg-gradient-to-br from-engia-orange-dark to-engia-orange",
    link: "#"
  }
];

const Services = () => {
  return (
    <section id="solucoes" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-2">
            <span className="text-engia-blue">Nossas</span>{" "}
            <span className="text-engia-orange">Soluções</span>
          </h2>
          <div className="w-20 h-1 bg-engia-teal mx-auto mb-6"></div>
          <p className="text-lg text-engia-gray-dark">
            Combinamos expertise em engenharia com tecnologias avançadas de IA 
            para oferecer soluções que transformam indústrias e processos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className={`${service.color} p-6 text-white`}>
                <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-engia-gray-dark mb-6">{service.description}</p>
                <Button variant="ghost" className="p-0 h-auto text-engia-blue hover:text-engia-blue-dark hover:bg-transparent">
                  Saiba mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-16 bg-gradient-to-r from-engia-blue to-engia-teal rounded-xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Precisando de uma solução personalizada?</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Nossos especialistas podem desenvolver uma solução adaptada às necessidades específicas do seu projeto ou negócio.
          </p>
          <Button variant="outline" size="lg" className="bg-white text-engia-blue hover:bg-engia-gray-light border-none">
            Solicite uma consultoria
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
