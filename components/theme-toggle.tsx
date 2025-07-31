"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Sun, Moon, Laptop } from "lucide-react"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-theme-600 dark:text-theme-400 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Moon className="h-5 w-5" />
        ) : theme === "light" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Laptop className="h-5 w-5" />
        )}
      </motion.button>

      <AnimatedThemeOptions isOpen={isOpen} currentTheme={theme} toggleTheme={toggleTheme} />
    </div>
  )
}

function AnimatedThemeOptions({
  isOpen,
  currentTheme,
  toggleTheme,
}: {
  isOpen: boolean
  currentTheme?: string
  toggleTheme: (theme: string) => void
}) {
  const options = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "system", icon: Laptop, label: "System" },
  ]

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: { opacity: 1, y: 0, pointerEvents: "auto" },
        closed: { opacity: 0, y: -10, pointerEvents: "none" },
      }}
      transition={{ duration: 0.2 }}
      className="absolute right-0 mt-2 w-36 rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 z-50 border border-gray-200 dark:border-gray-700"
    >
      <div className="py-1">
        {options.map((option) => {
          const Icon = option.icon
          const isActive = currentTheme === option.value

          return (
            <motion.button
              key={option.value}
              onClick={() => toggleTheme(option.value)}
              className={`flex items-center w-full px-4 py-2 text-sm ${
                isActive
                  ? "bg-theme-50 dark:bg-theme-900/30 text-theme-600 dark:text-theme-400"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="h-4 w-4 mr-2" />
              {option.label}
              {isActive && (
                <motion.div layoutId="activeIndicator" className="ml-auto h-2 w-2 rounded-full bg-theme-500" />
              )}
            </motion.button>
          )
        })}
      </div>
    </motion.div>
  )
}
