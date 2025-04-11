
import React from 'react';
import { ArrowRight, Smile, Sparkles, Bone, Aperture, Scissors, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

// Define service types
type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

// Service data
const services: Service[] = [
  {
    id: 1,
    title: "Clareamento Dental",
    description: "Procedimento que remove manchas e clareia a cor natural dos dentes, devolvendo um sorriso mais branco e radiante.",
    icon: <Sparkles className="h-6 w-6" />,
    color: "bg-gradient-to-br from-dental-blue to-dental-blue-light",
  },
  {
    id: 2,
    title: "Ortodontia",
    description: "Tratamentos com aparelhos fixos, removíveis ou alinhadores transparentes para corrigir o posicionamento dos dentes.",
    icon: <Smile className="h-6 w-6" />,
    color: "bg-gradient-to-br from-dental-green-water to-dental-green-light",
  },
  {
    id: 3,
    title: "Implantes Dentários",
    description: "Substitutos artificiais para raízes dentárias, proporcionando uma base sólida para dentes fixos ou removíveis.",
    icon: <Bone className="h-6 w-6" />,
    color: "bg-gradient-to-br from-dental-blue-dark to-dental-blue",
  },
  {
    id: 4,
    title: "Lentes de Contato Dental",
    description: "Finas lâminas de porcelana que são coladas sobre os dentes para melhorar a aparência do sorriso.",
    icon: <Aperture className="h-6 w-6" />,
    color: "bg-gradient-to-br from-dental-green-water to-[#3DE7B1]",
  },
  {
    id: 5,
    title: "Restauração Dental",
    description: "Reparo de dentes danificados ou cariados, restaurando sua função, integridade e morfologia.",
    icon: <Scissors className="h-6 w-6" />,
    color: "bg-gradient-to-br from-[#4D7CFE] to-[#7A66FF]",
  },
  {
    id: 6,
    title: "Limpeza e Prevenção",
    description: "Procedimentos preventivos para manter a saúde bucal e prevenir doenças como cáries e problemas gengivais.",
    icon: <Sparkles className="h-6 w-6" />,
    color: "bg-gradient-to-br from-dental-green-dark to-dental-green-water",
  }
];

const Services = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('agendar');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="section-padding bg-dental-gray-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-2">
            <span className="text-dental-blue">Nossos</span>{" "}
            <span className="text-dental-green-water">Serviços</span>
          </h2>
          <div className="w-20 h-1 bg-dental-blue mx-auto mb-6"></div>
          <p className="text-lg text-dental-gray-dark">
            Oferecemos uma variedade de serviços odontológicos com tecnologia 
            avançada e profissionais qualificados para cuidar do seu sorriso.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className={`${service.color} p-6 text-white`}>
                <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  {service.icon}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-dental-gray-dark mb-6">{service.description}</p>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-dental-blue hover:text-dental-blue-dark hover:bg-transparent"
                  onClick={scrollToBooking}
                >
                  Agendar Consulta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-16 bg-gradient-to-r from-dental-blue to-dental-green-water rounded-xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Pronto para agendar sua consulta?</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Nosso sistema de agendamento online permite que você escolha o melhor dia e horário para sua consulta, sem complicações.
          </p>
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-white text-dental-blue hover:bg-dental-gray-light border-none"
            onClick={scrollToBooking}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Agendar Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
