"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function IntroAnimation() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-br from-theme-900 to-gray-950 z-50 flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Background animation */}
          <motion.div
            className="absolute inset-0 opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute top-0 left-0 w-full h-full">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-theme-500"
                  style={{
                    width: Math.random() * 10 + 5,
                    height: Math.random() * 10 + 5,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  initial={{ scale: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-40 h-40 md:w-56 md:h-56 mb-6 rounded-full overflow-hidden border-4 border-theme-500/30"
          >
            <Image src="/profile-image.png" alt="Ujjwal Dixit" fill className="object-cover object-center" priority />
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-theme-500/20 to-transparent"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
            />

            {/* Rotating border effect */}
            <motion.div
              className="absolute -inset-1 rounded-full border-4 border-transparent"
              style={{
                background: `linear-gradient(90deg, transparent, rgba(14, 165, 233, 0.3), transparent)`,
                backgroundSize: "200% 100%",
                maskImage: "radial-gradient(transparent 65%, black 70%)",
                WebkitMaskImage: "radial-gradient(transparent 65%, black 70%)",
              }}
              animate={{
                backgroundPosition: ["0% center", "200% center"],
                rotate: [0, 360],
              }}
              transition={{
                backgroundPosition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              }}
            />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-2"
          >
            Ujjwal Dixit
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 180 }}
            exit={{ width: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="h-1 bg-gradient-to-r from-theme-500 via-blue-500 to-theme-500 mb-4 rounded-full"
          />

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-theme-100 text-lg"
          >
            Full Stack Developer
          </motion.p>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-8"
          >
            <svg className="w-12 h-12" viewBox="0 0 50 50">
              <motion.circle
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.circle
                cx="25"
                cy="25"
                r="10"
                fill="#0ea5e9"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
