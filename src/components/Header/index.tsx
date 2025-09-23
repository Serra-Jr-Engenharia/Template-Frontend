"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
        
      // Header aparece/desaparece baseado na direção do scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      // Efeito de background ao fazer scroll
      setIsScrolled(currentScrollY > 50)
      setLastScrollY(currentScrollY)
    }

    // Throttle do scroll para melhor performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [lastScrollY])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Sobre Nós" },
    { href: "/contact", label: "Contato" },
  ]

  const headerVariants = {
    visible: { y: 0 },
    hidden: { y: -100 }
  }

  return (
    <motion.header
      variants={headerVariants}
      initial="visible"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#001830]/95 backdrop-blur-md border-b border-cyan-500/20 shadow-lg" 
          : "bg-[#001830]/80 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 transition-transform hover:scale-105 duration-200"
            onClick={closeMenu}
          >
            <img
              src="/LogoENome.svg"
              alt="Logo Serra Jr."
              className="w-[140px] h-auto lg:w-[160px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-2 px-1 font-medium transition-all duration-300 group ${
                    isActive ? "text-cyan-400" : "text-white hover:text-cyan-300"
                  }`}
                >
                  {item.label}
                  <span 
                    className={`absolute left-0 bottom-0 w-full h-0.5 bg-cyan-400 transition-all duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              asChild 
              size="sm" 
              className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-6 py-2 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <Link href="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Fale Conosco
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
              className="p-2 text-white hover:bg-white/10 rounded-full transition-colors duration-200"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-4 space-y-2 bg-[#001830]/95 backdrop-blur-md  border-cyan-500/20 mt-2 shadow-xl">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-3 rounded-md transition-all duration-200 font-medium ${
                        isActive 
                          ? "bg-cyan-500/20 text-cyan-400 border-l-2 border-cyan-400" 
                          : "text-white hover:bg-white/10 hover:text-cyan-300"
                      }`}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  )
                })}

                <div className="pt-3 px-2 border-t border-white/10">
                  <Button 
                    asChild 
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded-full py-3 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    <Link href="/contact">
                      <Phone className="w-4 h-4 mr-2" />
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