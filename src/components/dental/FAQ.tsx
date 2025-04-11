
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    id: "item-1",
    question: "Como funciona o agendamento online?",
    answer: "Nosso sistema de agendamento online permite que você escolha o procedimento, data e horário disponíveis de acordo com sua preferência. Após preencher seus dados, você receberá uma confirmação por email e SMS, além de um lembrete 24h antes da consulta."
  },
  {
    id: "item-2",
    question: "Posso cancelar ou reagendar minha consulta pelo site?",
    answer: "Sim, você pode cancelar ou reagendar sua consulta pelo site até 24 horas antes do horário agendado. Basta acessar o link enviado no email de confirmação ou entrar em contato conosco por telefone."
  },
  {
    id: "item-3",
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos pagamentos em dinheiro, cartão de crédito (parcelamento em até 12x), cartão de débito, PIX e transferência bancária. Também trabalhamos com os principais convênios odontológicos."
  },
  {
    id: "item-4",
    question: "Preciso chegar com antecedência para minha consulta?",
    answer: "Recomendamos chegar 10 minutos antes do horário agendado para sua primeira consulta, para preenchimento de ficha e para garantir que o atendimento ocorra pontualmente."
  },
  {
    id: "item-5",
    question: "A clínica atende planos odontológicos?",
    answer: "Sim, trabalhamos com os principais planos odontológicos do mercado. Entre em contato conosco para verificar se atendemos o seu plano específico."
  },
  {
    id: "item-6",
    question: "Qual o prazo para um tratamento ortodôntico completo?",
    answer: "O tempo de tratamento ortodôntico varia de acordo com cada caso, podendo durar de 6 meses a 3 anos. A Dra. Fabiola fará uma avaliação detalhada e apresentará um plano de tratamento com estimativa de prazo."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-dental-blue mb-2">Perguntas Frequentes</h2>
          <div className="w-20 h-1 bg-dental-green-water mx-auto mb-6"></div>
          <p className="text-lg text-dental-gray-dark">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços e procedimentos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-b border-dental-gray-light">
                <AccordionTrigger className="text-left font-medium text-dental-blue hover:text-dental-blue-dark py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-dental-gray-dark pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl mb-4">Ainda tem dúvidas?</h3>
          <p className="text-dental-gray-dark mb-6">
            Entre em contato conosco por telefone ou WhatsApp e teremos o prazer em ajudar.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+551199999999" 
              className="btn-primary inline-block"
            >
              (11) 9999-9999
            </a>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-accent inline-block"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
