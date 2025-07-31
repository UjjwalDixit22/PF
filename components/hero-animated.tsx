"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import ThemeToggle from "./theme-toggle"
import { useEffect, useState } from "react"

export default function HeroAnimated() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-theme-50/50 to-white dark:from-gray-900 dark:to-gray-950"></div>
        <div className="absolute inset-0 bg-gradient-noise opacity-[0.03] dark:opacity-[0.07]"></div>
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-theme-200/30 dark:bg-theme-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
      </div>

      {/* Theme Toggle */}
      <div className="absolute top-8 right-8 z-10">
        <ThemeToggle />
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center">
        <motion.div
          className="w-full max-w-4xl mx-auto text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6">
            <motion.div
              className="inline-block relative"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl mx-auto relative">
                <Image
                  src="/profile-image.png"
                  alt="Ujjwal Dixit"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2 bg-theme-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <span className="text-xl font-bold">👋</span>
              </motion.div>
            </motion.div>
          </div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hi, I'm{" "}
            <motion.span
              className="text-gradient relative inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
            >
              Ujjwal Dixit
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-theme-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </motion.span>
          </motion.h1>

          <motion.div
            className="overflow-hidden h-12 md:h-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <TitleAnimation />
          </motion.div>

          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg md:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            I specialize in building responsive web applications using modern technologies like React, Node.js, and
            MongoDB. Currently pursuing B.Tech in Computer Science at Lovely Professional University.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button
              className="bg-theme-600 hover:bg-theme-700 text-white px-8 py-6 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-theme-500/20 group"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-theme-600 text-theme-600 hover:bg-theme-50 dark:text-theme-400 dark:border-theme-400 dark:hover:bg-theme-900/30 px-8 py-6 rounded-full text-lg transition-all duration-300"
              onClick={() => {
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              View Projects
            </Button>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <SocialIcon href="https://github.com/Ujjwaldixit22" icon={<Github />} label="GitHub" />
            <SocialIcon href="https://linkedin.com/in/ujjwaldixit22/" icon={<Linkedin />} label="LinkedIn" />
            <SocialIcon href="mailto:ujjwaldixit285@gmail.com" icon={<Mail />} label="Email" />
            <SocialIcon href="tel:+918864949485" icon={<Phone />} label="Phone" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <button
            onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-theme-600 dark:hover:text-theme-400 transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm mb-1">Scroll</span>
            <ChevronDown className="h-5 w-5" />
          </button>
        </motion.div>
      </div>

      {/* Parallax effect on scroll */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-gray-950 to-transparent z-10"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          opacity: Math.max(0, Math.min(1, 1 - scrollY / 500)),
        }}
      ></div>
    </section>
  )
}

function TitleAnimation() {
  const titles = ["Full Stack Developer", "MERN Stack Expert", "UI/UX Enthusiast", "Problem Solver"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [titles.length])

  return (
    <div className="relative h-full">
      {titles.map((title, i) => (
        <motion.h2
          key={title}
          className="text-xl md:text-3xl font-medium text-theme-600 dark:text-theme-400 absolute inset-0 flex items-center justify-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: i === index ? 0 : -50, opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
      ))}
    </div>
  )
}

function SocialIcon({ href, icon, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-theme-600 dark:hover:text-theme-400 hover:border-theme-500 border-2 border-transparent relative group"
        aria-label={label}
      >
        {icon}
        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-theme-600 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          {label}
        </span>
      </Link>
    </motion.div>
  )
}
