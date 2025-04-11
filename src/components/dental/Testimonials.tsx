
import React from 'react';
import { Star, Quote } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  text: string;
  rating: number;
  image: string;
  date: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Silva",
    text: "Fantástica experiência! O agendamento online foi super prático e a Dra. Fabiola é extremamente atenciosa e competente. Meus dentes nunca estiveram tão bem cuidados.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    date: "15/03/2023"
  },
  {
    id: 2,
    name: "João Santos",
    text: "Incrível como é fácil agendar pelo site. A clínica é moderna e o atendimento é excelente. A Dra. Fabiola explicou todo o procedimento com muita clareza. Recomendo!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    date: "22/04/2023"
  },
  {
    id: 3,
    name: "Ana Beatriz",
    text: "Sempre tive medo de dentista, mas a Dra. Fabiola me deixou super tranquila. O ambiente é acolhedor e todo o processo, desde o agendamento online até o tratamento, foi impecável.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    date: "07/05/2023"
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="section-padding bg-dental-gray-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-dental-blue mb-2">O que nossos pacientes dizem</h2>
          <div className="w-20 h-1 bg-dental-green-water mx-auto mb-6"></div>
          <p className="text-lg text-dental-gray-dark">
            A satisfação dos nossos pacientes é o nosso maior orgulho. 
            Confira alguns depoimentos de quem já experimentou nossos serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-xl p-6 shadow-md relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute -top-5 -right-3 bg-dental-blue text-white p-3 rounded-full">
                <Quote className="h-6 w-6" />
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-dental-blue text-dental-blue" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-dental-gray-dark mb-4">{testimonial.text}</p>
              
              <div className="text-sm text-dental-gray-dark">
                {testimonial.date}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-dental-gray-dark mb-3">
            Quer compartilhar sua experiência?
          </p>
          <a 
            href="https://g.page/r/review-espacosorriso" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-dental-blue font-medium hover:underline"
          >
            Deixe sua avaliação no Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
