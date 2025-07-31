"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type AnimatedBackgroundProps = {
  variant?: "hero" | "about" | "projects" | "coding" | "contact" | "particles" | "matrix"
  className?: string
}

export default function AnimatedBackground({ variant = "hero", className = "" }: AnimatedBackgroundProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  // Different background patterns based on section
  switch (variant) {
    case "hero":
      return (
        <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
          {/* Gradient background */}
          <div
            className={`absolute inset-0 ${
              isDark ? "bg-gradient-to-b from-gray-950 to-gray-900" : "bg-gradient-to-b from-blue-50 to-white"
            } transition-colors duration-500`}
          />

          {/* Animated shapes */}
          <motion.div
            className={`absolute top-20 left-[10%] w-64 h-64 rounded-full ${
              isDark ? "bg-blue-500/10" : "bg-blue-200/40"
            } blur-3xl transition-colors duration-500`}
            animate={{
              x: [0, 10, 0],
              y: [0, 15, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 8,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className={`absolute bottom-10 right-[5%] w-80 h-80 rounded-full ${
              isDark ? "bg-purple-500/10" : "bg-purple-200/30"
            } blur-3xl transition-colors duration-500`}
            animate={{
              x: [0, -15, 0],
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 10,
              ease: "easeInOut",
            }}
          />

          {/* Grid pattern */}
          <div
            className={`absolute inset-0 bg-grid-pattern ${
              isDark ? "opacity-[0.05]" : "opacity-[0.03]"
            } transition-opacity duration-500`}
          />
        </div>
      )

    case "about":
      return (
        <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
          {/* Gradient background */}
          <div
            className={`absolute inset-0 ${
              isDark ? "bg-gradient-to-br from-gray-900 to-gray-950" : "bg-gradient-to-br from-white to-blue-50"
            } transition-colors duration-500`}
          />

          {/* Animated shapes */}
          <motion.div
            className={`absolute top-[30%] right-[15%] w-72 h-72 rounded-full ${
              isDark ? "bg-indigo-500/5" : "bg-indigo-200/20"
            } blur-3xl transition-colors duration-500`}
            animate={{
              x: [0, -20, 0],
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 12,
              ease: "easeInOut",
            }}
          />

          {/* Dotted pattern */}
          <div
            className={`absolute inset-0 bg-dot-pattern ${
              isDark ? "opacity-[0.03]" : "opacity-[0.05]"
            } transition-opacity duration-500`}
          />
        </div>
      )

    case "projects":
      return (
        <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
          {/* Gradient background */}
          <div
            className={`absolute inset-0 ${
              isDark
                ? "bg-gradient-to-tr from-gray-950 via-gray-900 to-gray-950"
                : "bg-gradient-to-tr from-blue-50 via-white to-blue-50"
            } transition-colors duration-500`}
          />

          {/* Animated shapes */}
          <motion.div
            className={`absolute top-[10%] left-[20%] w-96 h-96 rounded-full ${
              isDark ? "bg-cyan-500/5" : "bg-cyan-200/20"
            } blur-3xl transition-colors duration-500`}
            animate={{
              x: [0, 15, 0],
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 15,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className={`absolute bottom-[5%] right-[10%] w-80 h-80 rounded-full ${
              isDark ? "bg-violet-500/5" : "bg-violet-200/20"
            } blur-3xl transition-colors duration-500`}
            animate={{
              x: [0, -10, 0],
              y: [0, 15, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 18,
              ease: "easeInOut",
            }}
          />

          {/* Hexagon pattern */}
          <div
            className={`absolute inset-0 bg-hexagon-pattern ${
              isDark ? "opacity-[0.02]" : "opacity-[0.03]"
            } transition-opacity duration-500`}
          />
        </div>
      )

    case "coding":
      return (
        <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
          {/* Gradient background */}
          <div
            className={`absolute inset-0 ${
              isDark
                ? "bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900"
                : "bg-gradient-to-b from-blue-50 via-white to-blue-50"
            } transition-colors duration-500`}
          />

          {/* Animated shapes */}
          <motion.div
            className={`absolute top-[15%] right-[25%] w-64 h-64 rounded-full ${
              isDark ? "bg-emerald-500/5" : "bg-emerald-200/20"
            } blur-3xl transition-colors duration-500`}
            animate={{
              x: [0, -15, 0],
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 14,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className={`absolute bottom-[20%] left-[15%] w-72 h-72 rounded-full ${
              isDark ? "bg-blue-500/5" : "bg-blue-200/20"
            } blur-3xl transition-colors duration-500`}
            animate={{
              x: [0, 20, 0],
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 16,
              ease: "easeInOut",
            }}
          />

          {/* Code pattern */}
          <div
            className={`absolute inset-0 bg-code-pattern ${
              isDark ? "opacity-[0.03]" : "opacity-[0.04]"
            } transition-opacity duration-500`}
          />
        </div>
      )

    case "contact":
      return (
        <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
          {/* Gradient background */}
          <div
            className={`absolute inset-0 ${
              isDark ? "bg-gradient-to-bl from-gray-950 to-gray-900" : "bg-gradient-to-bl from-blue-50 to-white"
            } transition-colors duration-500`}
          />

          {/* Animated shapes */}
          <motion.div
            className={`absolute top-[25%] left-[10%] w-80 h-80 rounded-full ${
              isDark ? "bg-purple-500/5" : "bg-purple-200/20"
            } blur-3xl transition-colors duration-500`}
            animate={{
              x: [0, 20, 0],
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 13,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className={`absolute bottom-[15%] right-[20%] w-64 h-64 rounded-full ${
              isDark ? "bg-teal-500/5" : "bg-teal-200/20"
            } blur-3xl transition-colors duration-500`}
            animate={{
              x: [0, -15, 0],
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 17,
              ease: "easeInOut",
            }}
          />

          {/* Wave pattern */}
          <div
            className={`absolute inset-0 bg-wave-pattern ${
              isDark ? "opacity-[0.02]" : "opacity-[0.04]"
            } transition-opacity duration-500`}
          />
        </div>
      )

    case "particles":
      return (
        <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
          {/* Gradient background */}
          <div
            className={`absolute inset-0 ${
              isDark
                ? "bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950"
                : "bg-gradient-to-r from-blue-50 via-white to-blue-50"
            } transition-colors duration-500`}
          />

          {/* Animated particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full ${
                  isDark ? "bg-white" : "bg-gray-800"
                } transition-colors duration-500`}
                style={{
                  width: Math.random() * 4 + 1,
                  height: Math.random() * 4 + 1,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.3 + 0.1,
                }}
                animate={{
                  y: [0, Math.random() * -100 - 50],
                  opacity: [0.1, 0.8, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: Math.random() * 10 + 10,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Subtle grid */}
          <div
            className={`absolute inset-0 bg-grid-pattern ${
              isDark ? "opacity-[0.03]" : "opacity-[0.02]"
            } transition-opacity duration-500`}
          />
        </div>
      )

    case "matrix":
      return (
        <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
          {/* Dark background */}
          <div className={`absolute inset-0 ${isDark ? "bg-gray-950" : "bg-white"} transition-colors duration-500`} />

          {/* Matrix-like falling characters */}
          <div className="absolute inset-0">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${(i / 15) * 100}%`,
                  top: 0,
                  width: "20px",
                  height: "100%",
                }}
              >
                {Array.from({ length: 15 }).map((_, j) => (
                  <motion.div
                    key={j}
                    className={`text-xs font-mono ${
                      isDark ? "text-green-500" : "text-emerald-600"
                    } opacity-0 transition-colors duration-500`}
                    style={{
                      position: "absolute",
                      top: `${j * 30}px`,
                    }}
                    animate={{
                      y: [0, 1000],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: Math.random() * 20 + 10,
                      delay: Math.random() * 5,
                      ease: "linear",
                    }}
                  >
                    {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
                  </motion.div>
                ))}
              </div>
            ))}
          </div>

          {/* Subtle overlay */}
          <div
            className={`absolute inset-0 ${isDark ? "bg-black/20" : "bg-white/40"} transition-colors duration-500`}
          />
        </div>
      )

    default:
      return null
  }
}
