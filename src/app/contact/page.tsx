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
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contacts() {

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contato@serrajr.com",
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
      content: "São Paulo, SP",
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
    <div className="min-h-screen bg-gray-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Entre em <span className="text-primary">Contato</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Estamos prontos para transformar suas ideias em projetos de
              engenharia. Fale conosco e descubra como podemos ajudar.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 bg-white"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {info.content}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            

            {/* Map and Additional Info */}
            <div className="space-y-6">
              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle>Perguntas Frequentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Qual o prazo médio dos projetos?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      O prazo varia conforme a complexidade, mas geralmente
                      entre 2 a 8 semanas.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Vocês atendem todo o Brasil?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Sim, atendemos projetos em todo território nacional, com
                      foco na região Sudeste.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Como funciona o orçamento?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Fazemos uma análise gratuita do seu projeto e enviamos uma
                      proposta personalizada.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle>Horário de Atendimento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Segunda à Quinta
                      </span>
                      <span className="text-foreground">8h às 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sexta</span>
                      <span className="text-foreground">8h às 17h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Sábado e Domingo
                      </span>
                      <span className="text-foreground">Fechado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
              Pronto para Começar?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 text-pretty">
              Nossa equipe está aguardando para transformar suas ideias em
              projetos de sucesso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Phone className="h-5 w-5 mr-2" />
                Ligar Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Mail className="h-5 w-5 mr-2" />
                Enviar Email
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
