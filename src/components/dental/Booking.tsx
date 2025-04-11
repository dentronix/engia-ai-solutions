
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Calendar as CalendarIcon, Clock, User, CheckCircle2 } from 'lucide-react';

type Procedure = {
  id: number;
  name: string;
  duration: string;
  selected: boolean;
};

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | null>(null);
  const [formStep, setFormStep] = useState(1);
  const [procedures, setProcedures] = useState<Procedure[]>([
    { id: 1, name: 'Consulta Inicial', duration: '30 min', selected: false },
    { id: 2, name: 'Limpeza', duration: '45 min', selected: false },
    { id: 3, name: 'Avaliação Ortodôntica', duration: '45 min', selected: false },
    { id: 4, name: 'Clareamento Dental', duration: '60 min', selected: false },
    { id: 5, name: 'Restauração', duration: '60 min', selected: false },
  ]);

  const availableTimeSlots = [
    '08:00', '09:00', '10:00', '11:00', 
    '13:30', '14:30', '15:30', '16:30'
  ];

  const toggleProcedure = (id: number) => {
    setProcedures(procedures.map(proc => 
      proc.id === id ? { ...proc, selected: !proc.selected } : proc
    ));
  };

  const handleNextStep = () => {
    setFormStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setFormStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your backend
    setFormStep(4); // Show success step
  };

  return (
    <section id="agendar" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-dental-blue mb-2">Agende sua Consulta</h2>
          <div className="w-20 h-1 bg-dental-green-water mx-auto mb-6"></div>
          <p className="text-lg text-dental-gray-dark">
            Escolha o dia, horário e procedimento que melhor se adeque à sua agenda.
            É rápido, simples e online!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between mb-8">
            <div className={`flex items-center ${formStep >= 1 ? 'text-dental-blue' : 'text-dental-gray-dark'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${formStep >= 1 ? 'bg-dental-blue text-white' : 'bg-dental-gray-light'}`}>
                1
              </div>
              <span className="hidden md:inline">Selecionar Procedimento</span>
            </div>
            <div className={`flex items-center ${formStep >= 2 ? 'text-dental-blue' : 'text-dental-gray-dark'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${formStep >= 2 ? 'bg-dental-blue text-white' : 'bg-dental-gray-light'}`}>
                2
              </div>
              <span className="hidden md:inline">Escolher Data e Hora</span>
            </div>
            <div className={`flex items-center ${formStep >= 3 ? 'text-dental-blue' : 'text-dental-gray-dark'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${formStep >= 3 ? 'bg-dental-blue text-white' : 'bg-dental-gray-light'}`}>
                3
              </div>
              <span className="hidden md:inline">Informações Pessoais</span>
            </div>
          </div>

          <Card className="shadow-lg border-dental-blue/10">
            {formStep === 1 && (
              <>
                <CardHeader>
                  <CardTitle className="text-dental-blue">Selecione o Procedimento</CardTitle>
                  <CardDescription>Escolha o tipo de atendimento que você precisa</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {procedures.map((procedure) => (
                      <div 
                        key={procedure.id} 
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          procedure.selected ? 'border-dental-blue bg-dental-blue/5' : 'border-gray-200 hover:border-dental-blue/50'
                        }`}
                        onClick={() => toggleProcedure(procedure.id)}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{procedure.name}</h3>
                            <p className="text-sm text-dental-gray-dark flex items-center mt-1">
                              <Clock className="h-4 w-4 mr-1" />
                              {procedure.duration}
                            </p>
                          </div>
                          <div className={`w-5 h-5 rounded-full border ${
                            procedure.selected ? 'bg-dental-blue border-dental-blue' : 'border-gray-300'
                          }`}>
                            {procedure.selected && <CheckCircle2 className="text-white" size={20} />}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" disabled>Voltar</Button>
                  <Button 
                    onClick={handleNextStep} 
                    disabled={!procedures.some(p => p.selected)}
                    className="bg-dental-blue hover:bg-dental-blue-dark"
                  >
                    Próximo
                  </Button>
                </CardFooter>
              </>
            )}

            {formStep === 2 && (
              <>
                <CardHeader>
                  <CardTitle className="text-dental-blue">Escolha a Data e Horário</CardTitle>
                  <CardDescription>Selecione o melhor dia e horário para você</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <Label className="mb-2 block">Selecione a data</Label>
                      <div className="border rounded-md p-1">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-md"
                          disabled={(date) => {
                            const day = date.getDay();
                            // Disable weekends and past dates
                            return day === 0 || day === 6 || date < new Date();
                          }}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label className="mb-2 block">Selecione o horário</Label>
                      <div className="grid grid-cols-2 gap-2 md:grid-cols-2">
                        {availableTimeSlots.map((time) => (
                          <Button
                            key={time}
                            type="button"
                            variant={timeSlot === time ? "default" : "outline"}
                            className={timeSlot === time ? "bg-dental-blue" : ""}
                            onClick={() => setTimeSlot(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={handlePrevStep}>Voltar</Button>
                  <Button 
                    onClick={handleNextStep} 
                    disabled={!date || !timeSlot}
                    className="bg-dental-blue hover:bg-dental-blue-dark"
                  >
                    Próximo
                  </Button>
                </CardFooter>
              </>
            )}

            {formStep === 3 && (
              <form onSubmit={handleSubmit}>
                <CardHeader>
                  <CardTitle className="text-dental-blue">Informações Pessoais</CardTitle>
                  <CardDescription>Preencha seus dados para confirmar o agendamento</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" placeholder="Seu nome completo" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" placeholder="(00) 00000-0000" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cpf">CPF (opcional)</Label>
                      <Input id="cpf" placeholder="000.000.000-00" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes">Observações (opcional)</Label>
                    <Textarea id="notes" placeholder="Informe se possui alguma condição médica, alergia ou outra informação relevante" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={handlePrevStep}>Voltar</Button>
                  <Button type="submit" className="bg-dental-blue hover:bg-dental-blue-dark">
                    Confirmar Agendamento
                  </Button>
                </CardFooter>
              </form>
            )}

            {formStep === 4 && (
              <>
                <CardHeader className="text-center">
                  <div className="mx-auto bg-dental-green-water/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-dental-green-water" />
                  </div>
                  <CardTitle className="text-dental-blue text-2xl">Agendamento Confirmado!</CardTitle>
                  <CardDescription className="text-lg">
                    Seu agendamento foi realizado com sucesso
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="bg-dental-gray-light rounded-lg p-6 max-w-sm mx-auto">
                    <div className="flex items-center justify-center mb-4">
                      <CalendarIcon className="h-5 w-5 text-dental-blue mr-2" />
                      <span className="font-medium">
                        {date?.toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' })}
                      </span>
                    </div>
                    <div className="flex items-center justify-center mb-4">
                      <Clock className="h-5 w-5 text-dental-blue mr-2" />
                      <span className="font-medium">{timeSlot}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <User className="h-5 w-5 text-dental-blue mr-2" />
                      <span className="font-medium">
                        {procedures.filter(p => p.selected).map(p => p.name).join(', ')}
                      </span>
                    </div>
                  </div>
                  <p className="mt-6 text-dental-gray-dark">
                    Enviamos os detalhes para seu email. Você receberá um lembrete 24h antes da consulta.
                  </p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button 
                    onClick={() => setFormStep(1)} 
                    className="bg-dental-blue hover:bg-dental-blue-dark"
                  >
                    Fazer Novo Agendamento
                  </Button>
                </CardFooter>
              </>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Booking;
