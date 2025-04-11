
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, Factory, Wrench, Zap } from 'lucide-react';

// Types for the case studies
type CaseStudy = {
  id: number;
  title: string;
  category: string;
  description: string;
  results: {
    roi: string;
    timeReduction: string;
    costSaving: string;
  };
  image: string;
  clientQuote?: {
    text: string;
    author: string;
    role: string;
  }
};

// Mock data for case studies
const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Otimização estrutural com generative design",
    category: "civil",
    description: "Redesenho estrutural de um edifício comercial usando algoritmos de generative design para reduzir o uso de material enquanto mantém a integridade estrutural.",
    results: {
      roi: "320%",
      timeReduction: "45%",
      costSaving: "R$ 1.2M"
    },
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    clientQuote: {
      text: "A solução da EngiaAI nos permitiu reduzir drasticamente os custos de material enquanto mantínhamos todos os requisitos estruturais. O processo foi incrivelmente rápido.",
      author: "Carlos Mendes",
      role: "Diretor de Engenharia, Construtora Alves"
    }
  },
  {
    id: 2,
    title: "Manutenção preditiva em equipamentos industriais",
    category: "eletrica",
    description: "Implementação de sistema de monitoramento com IA para prever falhas em maquinário industrial antes que elas ocorram.",
    results: {
      roi: "450%",
      timeReduction: "70%",
      costSaving: "R$ 3.5M"
    },
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Otimização logística para construção",
    category: "civil",
    description: "Utilização de algoritmos preditivos para otimizar o planejamento da cadeia de suprimentos em um grande projeto de infraestrutura.",
    results: {
      roi: "280%",
      timeReduction: "35%",
      costSaving: "R$ 2.1M"
    },
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Sistema automatizado de controle de qualidade",
    category: "mecanica",
    description: "Desenvolvimento de um sistema de visão computacional para inspeção automatizada de componentes mecânicos.",
    results: {
      roi: "390%",
      timeReduction: "80%",
      costSaving: "R$ 1.7M"
    },
    image: "https://images.unsplash.com/photo-1581094427864-021355a62e64?auto=format&fit=crop&w=800&q=80",
    clientQuote: {
      text: "A precisão do sistema é incomparável. Conseguimos identificar defeitos que antes passavam despercebidos, reduzindo drasticamente nossa taxa de retrabalho.",
      author: "Mariana Silva",
      role: "Gerente de Produção, TechParts SA"
    }
  }
];

const Cases = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredCases = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(c => c.category === filter);

  return (
    <section id="cases" className="section-padding bg-engia-gray-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-2">
            <span className="text-engia-blue">Cases de</span>{" "}
            <span className="text-engia-orange">Sucesso</span>
          </h2>
          <div className="w-20 h-1 bg-engia-teal mx-auto mb-6"></div>
          <p className="text-lg text-engia-gray-dark">
            Transformamos desafios em oportunidades. Veja como nossas soluções de IA 
            têm revolucionado projetos de engenharia em diversos setores.
          </p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button 
            variant={filter === 'all' ? "default" : "outline"} 
            onClick={() => setFilter('all')}
            className={filter === 'all' ? "bg-engia-blue" : ""}
          >
            Todos
          </Button>
          <Button 
            variant={filter === 'civil' ? "default" : "outline"} 
            onClick={() => setFilter('civil')}
            className={filter === 'civil' ? "bg-engia-blue" : ""}
          >
            <Building className="w-4 h-4 mr-2" />
            Engenharia Civil
          </Button>
          <Button 
            variant={filter === 'eletrica' ? "default" : "outline"} 
            onClick={() => setFilter('eletrica')}
            className={filter === 'eletrica' ? "bg-engia-blue" : ""}
          >
            <Zap className="w-4 h-4 mr-2" />
            Engenharia Elétrica
          </Button>
          <Button 
            variant={filter === 'mecanica' ? "default" : "outline"} 
            onClick={() => setFilter('mecanica')}
            className={filter === 'mecanica' ? "bg-engia-blue" : ""}
          >
            <Wrench className="w-4 h-4 mr-2" />
            Engenharia Mecânica
          </Button>
          <Button 
            variant={filter === 'industrial' ? "default" : "outline"} 
            onClick={() => setFilter('industrial')}
            className={filter === 'industrial' ? "bg-engia-blue" : ""}
          >
            <Factory className="w-4 h-4 mr-2" />
            Engenharia Industrial
          </Button>
        </div>
        
        {/* Case Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCases.map((caseItem) => (
            <div key={caseItem.id} className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
              <div className="relative h-64">
                <img 
                  src={caseItem.image} 
                  alt={caseItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white font-semibold p-6">{caseItem.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-engia-gray-dark mb-4">{caseItem.description}</p>
                
                {/* Results */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-engia-gray-light p-3 rounded text-center">
                    <p className="text-xs text-engia-gray-dark mb-1">ROI</p>
                    <p className="font-bold text-engia-blue">{caseItem.results.roi}</p>
                  </div>
                  <div className="bg-engia-gray-light p-3 rounded text-center">
                    <p className="text-xs text-engia-gray-dark mb-1">Tempo</p>
                    <p className="font-bold text-engia-teal">-{caseItem.results.timeReduction}</p>
                  </div>
                  <div className="bg-engia-gray-light p-3 rounded text-center">
                    <p className="text-xs text-engia-gray-dark mb-1">Economia</p>
                    <p className="font-bold text-engia-orange">{caseItem.results.costSaving}</p>
                  </div>
                </div>
                
                {/* Client Quote */}
                {caseItem.clientQuote && (
                  <div className="bg-engia-gray-light p-4 rounded-lg mb-4 relative">
                    <div className="absolute top-0 left-6 transform -translate-y-1/2 text-4xl text-engia-teal">"</div>
                    <p className="text-sm italic mt-2 mb-2">{caseItem.clientQuote.text}</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-engia-blue rounded-full mr-2"></div>
                      <div>
                        <p className="text-sm font-semibold">{caseItem.clientQuote.author}</p>
                        <p className="text-xs text-engia-gray-dark">{caseItem.clientQuote.role}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <Button variant="ghost" className="text-engia-blue hover:text-engia-blue-dark hover:bg-engia-gray-light">
                  Ver detalhes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* More cases button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-engia-blue text-engia-blue hover:bg-engia-blue hover:text-white">
            Ver todos os cases
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cases;
