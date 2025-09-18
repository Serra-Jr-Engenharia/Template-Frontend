"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: showHeader ? 0 : -80 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="sticky top-0 z-50 bg-[#001830] backdrop-blur-lg border-b border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
            src="/LogoENome.svg"
            alt="Logo Serra Jr."
            className="w-[140px] h-auto"
          />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "Sobre Nós" },
              { href: "/contact", label: "Contatos" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-white font-medium transition-colors duration-200 hover:text-cyan-400"
              >
                {item.label}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex">
            <Button asChild size="sm" className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-5">
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
              className="p-2 text-white"
            >
              <span className="relative h-6 w-6 inline-flex items-center justify-center">
                <Menu
                  className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"
                  }`}
                />
                <X
                  className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-75 opacity-0"
                  }`}
                />
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-[#001830]/90 backdrop-blur-md rounded-lg border border-white/10">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "Sobre Nós" },
                  { href: "/contact", label: "Contatos" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-white hover:text-cyan-400 hover:bg-white/10 rounded-md transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="pt-2">
                  <Button asChild className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded-full">
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      Fale Conosco
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
