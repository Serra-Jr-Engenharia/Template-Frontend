"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, User, MessageCircle } from "lucide-react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio do formulário
    console.log("Formulário enviado:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "serrajr@iprj.uerj.br",
      description: "Resposta em até 24h",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 9999-9999",
      description: "Seg à Sex, 8h às 18h",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Nova Friburrgo, RJ",
      description: "Atendimento presencial",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "8h às 18h",
      description: "Segunda à Sexta",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="py-26">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em <span className="text-blue-400">Contato</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para transformar suas ideias em projetos de engenharia. 
            Fale conosco e descubra como podemos ajudar.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white text-lg">{info.title}</CardTitle>
                  <CardDescription className="text-blue-400 font-medium">
                    {info.content}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-300">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-blue-400" />
                  Envie sua Mensagem
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Preencha o formulário abaixo e entraremos em contato
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-300">Assunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Assunto da mensagem"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Descreva sua necessidade..."
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    size="lg"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="space-y-6">
              {/* FAQ */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Perguntas Frequentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Qual o prazo médio dos projetos?
                    </h4>
                    <p className="text-sm text-gray-300">
                      O prazo varia conforme a complexidade, mas geralmente entre 3 a 5 meses.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Vocês atendem todo o Brasil?
                    </h4>
                    <p className="text-sm text-gray-300">
                      Sim, atendemos projetos em todo território nacional.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Como funciona o orçamento?
                    </h4>
                    <p className="text-sm text-gray-300">
                      Fazemos uma análise gratuita do seu projeto e enviamos uma proposta personalizada.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Horário de Atendimento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Segunda à Quinta</span>
                      <span className="text-white font-medium">8h às 18h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Sexta</span>
                      <span className="text-white font-medium">8h às 17h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Sábado e Domingo</span>
                      <span className="text-white font-medium">Fechado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para Começar?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Nossa equipe está aguardando para transformar suas ideias em projetos de sucesso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={() => window.location.href = 'tel:1199999999'}
            >
              <Phone className="h-5 w-5 mr-2" />
              Ligar Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              onClick={() => window.location.href = 'mailto:contato@serrajr.com'}
            >
              <Mail className="h-5 w-5 mr-2" />
              Enviar Email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}