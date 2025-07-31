"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Coding", href: "#coding-profiles" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export default function NavbarAnimated() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "py-2 glass border-b border-gray-200 dark:border-gray-800" : "py-4 bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          href="#home"
          className="text-xl font-bold text-gray-900 dark:text-white hover:text-theme-600 dark:hover:text-theme-400 transition-colors duration-300"
        >
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            Ujjwal Dixit
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={cn(
                  "relative px-3 py-2 rounded-md font-medium transition-colors duration-300",
                  activeSection === item.href.substring(1)
                    ? "text-theme-600 dark:text-theme-400"
                    : "text-gray-600 hover:text-theme-600 dark:text-gray-300 dark:hover:text-theme-400",
                )}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                  })
                  setActiveSection(item.href.substring(1))
                }}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-theme-600 dark:bg-theme-400"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
            className="ml-4"
          >
            <Button
              asChild
              className="bg-theme-600 hover:bg-theme-700 text-white transition-all duration-300 rounded-full px-5"
            >
              <a
                href="https://drive.google.com/file/d/1d1QP7DyJI5LaBUn1go-1zYau_QNZB1d4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="md:hidden flex items-center gap-2"
        >
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-900 hover:text-theme-600 hover:bg-theme-50 dark:text-white dark:hover:text-theme-400 dark:hover:bg-theme-900/30 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </motion.div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-gray-200 dark:border-gray-800 absolute top-full left-0 right-0 overflow-hidden"
          >
            <nav className="container mx-auto px-4 flex flex-col space-y-1 py-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-3 px-4 rounded-md transition-colors duration-300",
                      activeSection === item.href.substring(1)
                        ? "text-theme-600 bg-theme-50 dark:text-theme-400 dark:bg-theme-900/30"
                        : "text-gray-600 hover:text-theme-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-theme-400 dark:hover:bg-gray-800/50",
                    )}
                    onClick={(e) => {
                      e.preventDefault()
                      document.querySelector(item.href)?.scrollIntoView({
                        behavior: "smooth",
                      })
                      setIsMenuOpen(false)
                      setActiveSection(item.href.substring(1))
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: navItems.length * 0.05 }}
                className="pt-2"
              >
                <Button
                  asChild
                  className="w-full bg-theme-600 hover:bg-theme-700 text-white transition-all duration-300 rounded-md"
                >
                  <a
                    href="https://drive.google.com/file/d/1d1QP7DyJI5LaBUn1go-1zYau_QNZB1d4/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
