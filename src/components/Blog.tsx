
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Blog post type
type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  link: string;
};

// Blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Como a IA está transformando o processo de design em engenharia",
    excerpt: "Entenda como as novas tecnologias de inteligência artificial estão revolucionando a forma como engenheiros projetam estruturas e sistemas.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    date: "12 Abr 2025",
    readTime: "8 min",
    category: "Tecnologia",
    link: "#"
  },
  {
    id: 2,
    title: "Manutenção preditiva: o futuro da gestão de ativos industriais",
    excerpt: "Descubra como algoritmos preditivos estão ajudando empresas a reduzir custos de manutenção e aumentar a vida útil de equipamentos.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    date: "05 Abr 2025",
    readTime: "6 min",
    category: "Indústria",
    link: "#"
  },
  {
    id: 3,
    title: "Análise de estudo de caso: redução de 30% no consumo de material com generative design",
    excerpt: "Um detalhado estudo de caso sobre como nossos algoritmos de design generativo ajudaram a economizar material em um projeto estrutural.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    date: "28 Mar 2025",
    readTime: "12 min",
    category: "Case Study",
    link: "#"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="section-padding bg-engia-gray-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-2">
            <span className="text-engia-blue">Blog &</span>{" "}
            <span className="text-engia-orange">Recursos</span>
          </h2>
          <div className="w-20 h-1 bg-engia-teal mx-auto mb-6"></div>
          <p className="text-lg text-engia-gray-dark">
            Compartilhamos conhecimentos, tendências e insights sobre a interseção 
            entre engenharia e inteligência artificial.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
              <div className="relative h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-engia-orange text-white text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-engia-gray-dark mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime} de leitura</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-engia-gray-dark mb-4 line-clamp-3">{post.excerpt}</p>
                
                <Button variant="ghost" className="p-0 h-auto text-engia-blue hover:text-engia-blue-dark hover:bg-transparent">
                  Ler artigo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-engia-blue text-engia-blue hover:bg-engia-blue hover:text-white">
            Ver todos os artigos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
