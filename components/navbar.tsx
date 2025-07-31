"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "LeetCode", href: "#leetcode" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="#home" className="text-xl font-bold text-gray-900 hover:text-gray-700">
          Ujjwal Dixit
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white">
            <a
              href="https://drive.google.com/file/d/1d1QP7DyJI5LaBUn1go-1zYau_QNZB1d4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && isMobile && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                  })
                  setIsMenuOpen(false)
                }}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-gray-900 hover:bg-gray-800 text-white w-full">
              <a
                href="https://drive.google.com/file/d/1d1QP7DyJI5LaBUn1go-1zYau_QNZB1d4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
