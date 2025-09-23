import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Target, Lightbulb, Heart, Zap, Star, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function SobrePage() {
  const teamMembers = [
    {
      name: "Gabrielle Oliveira",
      role: "Diretora Computação",
      skills: ["Inovação", "Estruturas", "Liderança"],
    },
    {
      name: "André Silva",
      role: "Assessor de Computação",
      course: "Engenharia de Computação",
      skills: ["Inovação", "Estruturas", "Liderança"],
    },
    {
      name: "Antônio",
      role: "Assessor de Computação",
      course: "Engenharia de Computação",
      skills: ["Inovação", "Estruturas", "Liderança"],
    },
    {
      name: "Carolina Dornellas",
      role: "Assessor de Computação", 
      course: "Engenharia de Computação",
      skills: ["Inovação", "Estruturas", "Liderança"],
    },
    {
      name: "Felipe Carrancho",
      role: "Assessor de Computação",
      course: "Engenharia de Computação",
      skills: ["Inovação", "Estruturas", "Liderança"],
    },
    {
      name: "Gabriel Gonçalves",
      role: "Assessor de Computação",
      course: "Engenharia de Computação",
      skills: ["Inovação", "Estruturas", "Liderança"],
    },
    {
      name: "Gustavo Curty",
      role: "Assessor de Computação",
      course: "Engenharia de Computação",
      skills: ["Inovação", "Estruturas", "Liderança"],
    },
    {
      name: "João Victor",
      role: "Assessor de Computação",
      course: "Engenharia de Computação",
      skills: ["Inovação", "Estruturas", "Liderança"],
    },
    {
      name: "Victor Hugo",
      role: "Assessor de Computação",
      course: "Engenharia de Computação", 
      skills: ["Inovação", "Estruturas", "Liderança"],
    },
    {
      name: "Luís Felipe Braido",
      role: "Assessor de Computação",
      course: "Engenharia de Computação",
      skills: ["Sistemas", "Programação", "Gestão"],
    },
    {
      name: "Paulo Emanuel",
      role: "Assessor de Computação",
      course: "Engenharia de Computação",
      skills: ["Tecnologia", "Inovação", "Projetos"],
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Excelência",
      description: "Alta qualidade em nossos projetos e serviços.",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Soluções criativas e tecnologias modernas.",
    },
    {
      icon: Heart,
      title: "Compromisso",
      description: "Dedicação total aos clientes e prazos.",
    },
    {
      icon: Users,
      title: "Equipe",
      description: "Trabalho colaborativo e desenvolvimento contínuo.",
    },
  ]

  const stats = [
    { value: "50+", label: "Projetos Concluídos", icon: Zap },
    { value: "98%", label: "Satisfação", icon: Star },
    { value: "15+", label: "Áreas de Atuação", icon: Target },
    { value: "3 anos", label: "Experiência", icon: TrendingUp },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 ">
      {/* Hero Section */}
      <section className="py-26">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-blue-500 text-white">
            Empresa Júnior de Engenharia 
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre a <span className="text-blue-400">Serra Jr.</span>
          </h1>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transformamos conhecimento acadêmico em soluções práticas e inovadoras para o mercado.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-2xl md:text-3xl font-bold text-blue-400">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Nossa Missão</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Conectar o conhecimento acadêmico com as necessidades do mercado, oferecendo soluções 
              em engenharia de alta qualidade enquanto desenvolvemos nossos membros.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Nossos Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center bg-gray-800/30 border-gray-700">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Nosso Time de Computação</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center bg-gray-800/30 border-gray-700">
                <CardHeader>
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-700 flex items-center justify-center">
                    <Users className="h-8 w-8 text-blue-400" />
                  </div>
                  <CardTitle className="text-white text-lg">{member.name}</CardTitle>
                  <p className="text-blue-400 text-sm font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-blue-500/20 text-blue-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}