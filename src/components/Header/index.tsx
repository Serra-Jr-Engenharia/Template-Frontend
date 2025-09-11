"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      } 
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={`bg-[#001830] text-white transform transition-transform duration-750 ease-in-out
      ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/./././LogoENome.svg" alt="Logo Serra Jr." className="w-[110px]" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Sobre Nós
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Contatos
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex">
            <Button asChild variant="ghost" size="sm">
              <Link href="/contact">Fale Conosco</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              className="p-2"
            >
              <span className="relative h-6 w-6 inline-flex items-center justify-center">
                <Menu
                  className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                    isMenuOpen
                      ? "-rotate-90 scale-75 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                    isMenuOpen
                      ? "rotate-0 scale-100 opacity-100"
                      : "rotate-90 scale-75 opacity-0"
                  }`}
                />
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contatos
              </Link>
              <div className="pt-2">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Fale Conosco
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
