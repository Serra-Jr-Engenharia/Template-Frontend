import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, BookOpen, Lightbulb, Heart } from "lucide-react"

export default function SobrePage() {
  const teamMembers = [
    {
      name: "Ana Silva",
      role: "Diretora Presidente",
      course: "Engenharia Civil - 8º semestre",
      image: "/fotosDefault.jpg",
      skills: ["Gestão", "Estruturas", "Liderança"],
    },
    {
      name: "Carlos Santos",
      role: "Diretor de Projetos",
      course: "Engenharia Mecânica - 7º semestre",
      image: "/fotosDefault.jpg",
      skills: ["CAD", "Análise", "Projetos"],
    },
    {
      name: "Marina Costa",
      role: "Diretora Comercial",
      course: "Engenharia de Produção - 6º semestre",
      image: "/fotosDefault.jpg",
      skills: ["Vendas", "Marketing", "Relacionamento"],
    },
    {
      name: "Pedro Oliveira",
      role: "Diretor Técnico",
      course: "Engenharia Elétrica - 8º semestre",
      image: "/fotosDefault.jpg",
      skills: ["Automação", "Sistemas", "Inovação"],
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Excelência",
      description: "Buscamos sempre a mais alta qualidade em nossos projetos e serviços.",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Aplicamos tecnologias modernas e soluções criativas em cada projeto.",
    },
    {
      icon: Heart,
      title: "Compromisso",
      description: "Dedicação total aos nossos clientes e aos prazos estabelecidos.",
    },
    {
      icon: BookOpen,
      title: "Aprendizado",
      description: "Crescimento contínuo através da experiência prática e conhecimento acadêmico.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Sobre a <span className="text-primary">Serra Jr.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Somos uma empresa júnior de engenharia formada por estudantes apaixonados por transformar conhecimento
              acadêmico em soluções práticas e inovadoras.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Nossa Missão</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Conectar o conhecimento acadêmico com as necessidades do mercado, oferecendo soluções em engenharia de
                alta qualidade a preços acessíveis, enquanto desenvolvemos as competências profissionais de nossos
                membros.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center">
                      <Users className="h-5 w-5 text-primary mr-2" />
                      50+ Projetos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Entregues com sucesso</p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center">
                      <Award className="h-5 w-5 text-primary mr-2" />3 Anos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">De experiência no mercado</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                <img
                  src="/fotosDefault.jpg"
                  alt="Equipe da Serra Jr. trabalhando em projetos"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos Valores</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Os princípios que guiam nosso trabalho e definem nossa cultura organizacional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossa Equipe</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Conheça os profissionais dedicados que fazem a diferença em cada projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                  <p className="text-sm text-muted-foreground mt-2">{member.course}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
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

      {/* History Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossa História</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                A trajetória de crescimento e conquistas da Serra Jr. Engenharia
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">2021 - Fundação</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A Serra Jr. foi fundada por um grupo de estudantes de engenharia com o objetivo de aplicar
                    conhecimentos acadêmicos em projetos reais, oferecendo soluções acessíveis ao mercado.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">2022 - Primeiros Projetos</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Executamos nossos primeiros projetos de consultoria técnica e análise estrutural, estabelecendo
                    nossa reputação no mercado local.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">2023 - Expansão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ampliamos nossa equipe e diversificamos nossos serviços, incluindo projetos de automação e
                    acompanhamento de obras.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-4 h-4 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">2024 - Consolidação</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Hoje somos reconhecidos como uma das principais empresas juniores de engenharia da região, com mais
                    de 50 projetos entregues e uma equipe altamente qualificada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
