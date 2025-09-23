import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col min-h-full bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20">
        <div className="text-center mb-12 space-y-6">
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
            Transformando ideias em soluções práticas através da 
            <span className="text-blue-300 font-semibold"> inovação e expertise</span>
          </p>
        </div>

        {/* Logo Animation Container */}
        <div className="relative mb-8">
          <div className="w-[240px] [perspective:1000px]">
            <img
              src="/LogoSerra.svg"
              alt="Logo Serra Jr."
              className="w-full animate-[spin_5s_linear_infinite] [transform-style:preserve-3d]"
            />
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button 
            size="lg" 
            className="px-8 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
            asChild
          >
            <Link href="/about">
              Conheça nossos serviços
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 text-lg font-semibold border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
            asChild
          >
            <Link href="/contact">
              Fale Conosco
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}