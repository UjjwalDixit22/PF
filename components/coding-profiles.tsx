"use client"

import { Badge } from "@/components/ui/badge"
import { GitBranch, ExternalLink, Award, Code, CheckCircle, Trophy } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import AnimatedBackground from "./animated-background"
import { useTheme } from "next-themes"
import Image from "next/image"

// Custom icons for different platforms
const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.374 1.374 0 0 0 0 1.94l3.854 4.126 5.406 5.788a1.374 1.374 0 0 0 1.94 0l5.406-5.788 3.854-4.126a1.374 1.374 0 0 0 0-1.94l-3.854-4.126L14.44.438A1.374 1.374 0 0 0 13.483 0zm-2.866 12.815a1.374 1.374 0 1 1 0 2.748 1.374 1.374 0 0 1 0-2.748zm8.66 0a1.374 1.374 0 1 1 0 2.748 1.374 1.374 0 0 1 0-2.748z" />
  </svg>
)

const HackerRankIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 5.32c-.049-.029-.108-.047-.165-.047s-.116.018-.165.047l-1.574 1.049c-.074.045-.123.126-.123.221 0 .143.113.258.254.258h.701l.002 7.634c0 .52.446.967.968.967h4.84c.523 0 .97-.447.97-.967V7.057c0-.143-.115-.258-.26-.258" />
  </svg>
)

const GeeksforGeeksIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116.096 3.79 3.79 0 0 1-1.08-.575 3.568 3.568 0 0 1-.853-.913c-.232-.35-.424-.745-.568-1.174h9.063c.01-.144.02-.289.02-.435 0-.575-.08-1.149-.242-1.704a4.83 4.83 0 0 0-.76-1.5c-.338-.445-.76-.819-1.252-1.098-.493-.28-1.055-.425-1.699-.425-.59 0-1.129.135-1.622.4-.492.265-.913.624-1.262 1.079a4.875 4.875 0 0 0-.8 1.537 5.684 5.684 0 0 0-.282 1.784c0 .61.095 1.18.282 1.704.188.525.455.984.8 1.376.347.393.76.703 1.243.929.482.226 1.023.339 1.622.339.787 0 1.477-.154 2.066-.463.59-.309 1.073-.754 1.447-1.335h-1.43a1.772 1.772 0 0 1-.76.604c-.338.154-.73.232-1.175.232-.59 0-1.085-.164-1.477-.492-.393-.329-.642-.814-.75-1.457h6.025c.02-.126.02-.261.03-.406.01-.145.01-.29.01-.435v-.01zm-6.245-.01a2.002 2.002 0 0 1 .512-1.174c.143-.154.309-.28.502-.376.193-.096.396-.164.61-.203.213-.04.425-.058.628-.058.223 0 .435.019.638.058.203.039.406.107.59.203.183.096.347.222.49.376.143.154.26.338.347.551.087.213.154.445.193.695H15.17c.01-.01.02-.029.03-.048l.01-.02zM9.695 12.8c0 .406-.067.79-.203 1.156a2.896 2.896 0 0 1-.575.944 2.64 2.64 0 0 1-.893.636c-.347.154-.73.232-1.156.232-.425 0-.81-.078-1.156-.232a2.642 2.642 0 0 1-.893-.636 2.906 2.906 0 0 1-.58-.944 3.529 3.529 0 0 1-.202-1.156c0-.406.067-.8.203-1.166.135-.367.328-.684.58-.954.25-.27.55-.483.892-.636.347-.154.731-.231 1.156-.231.425 0 .81.077 1.156.231.347.153.644.366.893.636.25.27.44.587.575.954.136.367.203.76.203 1.166zm-1.44 0c0-.232-.03-.454-.087-.665a1.419 1.419 0 0 0-.27-.531 1.254 1.254 0 0 0-.444-.348 1.386 1.386 0 0 0-.59-.126c-.213 0-.406.042-.58.126a1.254 1.254 0 0 0-.443.348c-.116.154-.203.328-.26.53a2.164 2.164 0 0 0-.087.666c0 .232.029.454.087.665.057.213.144.396.26.54.116.145.261.26.444.338.173.077.366.116.58.116.212 0 .405-.039.59-.116.183-.077.328-.193.443-.338.116-.144.203-.327.27-.54.058-.21.087-.433.087-.665zM2.5 9.086c.135 0 .26.01.376.029.116.02.222.048.319.087.096.038.183.087.26.144.077.058.144.125.202.203.058.077.106.164.144.26.039.096.067.202.087.318.019.116.029.242.029.377v5.753H5.26v-5.753c0-.135.01-.26.03-.377.019-.116.048-.222.086-.319.039-.096.087-.182.145-.26a.972.972 0 0 1 .202-.202c.077-.058.164-.106.26-.144.096-.039.202-.067.318-.087a2.16 2.16 0 0 1 .377-.029h.377V7.992H2.5v1.094h.001zm11.27-3.011a.896.896 0 0 0-.323.058.723.723 0 0 0-.261.164.777.777 0 0 0-.174.242.72.72 0 0 0-.063.3c0 .106.021.204.063.295a.777.777 0 0 0 .174.241.723.723 0 0 0 .26.164.896.896 0 0 0 .324.058.896.896 0 0 0 .323-.058.723.723 0 0 0 .261-.164.777.777 0 0 0 .174-.241.72.72 0 0 0 .063-.295.72.72 0 0 0-.063-.3.777.777 0 0 0-.174-.242.723.723 0 0 0-.26-.164.896.896 0 0 0-.324-.058zm-8.388 0a.896.896 0 0 0-.323.058.723.723 0 0 0-.261.164.777.777 0 0 0-.174.242.72.72 0 0 0-.063.3c0 .106.021.204.063.295a.777.777 0 0 0 .174.241.723.723 0 0 0 .26.164.896.896 0 0 0 .324.058.896.896 0 0 0 .323-.058.723.723 0 0 0 .261-.164.777.777 0 0 0 .174-.241.72.72 0 0 0 .063-.295.72.72 0 0 0-.063-.3.777.777 0 0 0-.174-.242.723.723 0 0 0-.26-.164.896.896 0 0 0-.324-.058zm4.194 0a.896.896 0 0 0-.323.058.723.723 0 0 0-.261.164.777.777 0 0 0-.174.242.72.72 0 0 0-.063.3c0 .106.021.204.063.295a.777.777 0 0 0 .174.241.723.723 0 0 0 .26.164.896.896 0 0 0 .324.058.896.896 0 0 0 .323-.058.723.723 0 0 0 .261-.164.777.777 0 0 0 .174-.241.72.72 0 0 0 .063-.295.72.72 0 0 0-.063-.3.777.777 0 0 0-.174-.242.723.723 0 0 0-.26-.164.896.896 0 0 0-.324-.058z" />
  </svg>
)

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

export default function CodingProfiles() {
  const [activeTab, setActiveTab] = useState("leetcode")
  const { theme } = useTheme()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const tabVariants = {
    inactive: { opacity: 0.7, scale: 0.95 },
    active: { opacity: 1, scale: 1 },
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  const platforms = [
    {
      id: "leetcode",
      name: "LeetCode",
      icon: <LeetCodeIcon />,
      url: "https://leetcode.com/u/UjjwalDixit22/",
      color: "bg-yellow-500",
      textColor: "text-yellow-500",
      hoverColor: "hover:bg-yellow-100",
      content: (
        <motion.div variants={statsVariants} initial="hidden" animate="visible" className="space-y-6">
          {/* Profile header with photo */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6 bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
            <motion.div
              className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-200 dark:border-yellow-800"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image src="/profile-image.png" alt="Ujjwal Dixit" fill className="object-cover object-center" />
            </motion.div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">UjjwalDixit22</h3>
              <p className="text-gray-600 dark:text-gray-400">Rank: 854,386</p>
              <div className="mt-2 flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200">Java</Badge>
                <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200">DSA</Badge>
                <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200">
                  Problem Solver
                </Badge>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Problems Solved</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <motion.div
                className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800/30 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Solved</p>
                <div className="flex items-end gap-2">
                  <motion.p
                    className="text-3xl font-bold text-gray-900 dark:text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    217
                  </motion.p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">problems</p>
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800/30 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">Current Streak</p>
                <div className="flex items-end gap-2">
                  <motion.p
                    className="text-3xl font-bold text-gray-900 dark:text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    12
                  </motion.p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">days</p>
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800/30 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">Max Streak</p>
                <div className="flex items-end gap-2">
                  <motion.p
                    className="text-3xl font-bold text-gray-900 dark:text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    93
                  </motion.p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">days</p>
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800/30 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">Active Days</p>
                <div className="flex items-end gap-2">
                  <motion.p
                    className="text-3xl font-bold text-gray-900 dark:text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    97
                  </motion.p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">days</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Problem difficulty distribution chart */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Solving Progress</h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="h-16 w-full relative mb-4">
                <div className="flex h-full">
                  <motion.div
                    className="bg-green-500 h-full rounded-l-sm flex items-center justify-center text-white font-medium"
                    initial={{ width: "0%" }}
                    animate={{ width: "45%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    <span className="text-xs md:text-sm">Easy (45%)</span>
                  </motion.div>
                  <motion.div
                    className="bg-yellow-500 h-full flex items-center justify-center text-white font-medium"
                    initial={{ width: "0%" }}
                    animate={{ width: "35%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    <span className="text-xs md:text-sm">Medium (35%)</span>
                  </motion.div>
                  <motion.div
                    className="bg-red-500 h-full rounded-r-sm flex items-center justify-center text-white font-medium"
                    initial={{ width: "0%" }}
                    animate={{ width: "20%" }}
                    transition={{ duration: 1, delay: 0.9 }}
                  >
                    <span className="text-xs md:text-sm">Hard (20%)</span>
                  </motion.div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Easy</div>
                  <div className="text-xl font-bold text-green-500">98</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Medium</div>
                  <div className="text-xl font-bold text-yellow-500">76</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Hard</div>
                  <div className="text-xl font-bold text-red-500">43</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Languages</h3>
            <div className="flex flex-wrap gap-3">
              <motion.div
                className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20 rounded-full px-4 py-2 hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-medium text-gray-900 dark:text-white">Java</span>
                <Badge variant="secondary" className="bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200">
                  139
                </Badge>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/20 rounded-full px-4 py-2 hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-medium text-gray-900 dark:text-white">C++</span>
                <Badge
                  variant="secondary"
                  className="bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-purple-200"
                >
                  3
                </Badge>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-green-50 dark:from-green-900/30 dark:to-green-800/20 rounded-full px-4 py-2 hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <span className="font-medium text-gray-900 dark:text-white">Python3</span>
                <Badge
                  variant="secondary"
                  className="bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200"
                >
                  2
                </Badge>
              </motion.div>
            </div>
          </div>

          {/* Activity heatmap */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Activity Heatmap</h3>
            <div className="relative h-48 w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
              <div className="grid grid-cols-7 gap-1 h-full">
                {Array.from({ length: 7 }).map((_, weekIndex) => (
                  <div key={`week-${weekIndex}`} className="grid grid-rows-12 gap-1">
                    {Array.from({ length: 12 }).map((_, dayIndex) => {
                      const intensity = Math.random()
                      let bgColor = "bg-gray-100 dark:bg-gray-700"

                      if (intensity > 0.8) bgColor = "bg-green-500"
                      else if (intensity > 0.6) bgColor = "bg-green-400"
                      else if (intensity > 0.4) bgColor = "bg-green-300"
                      else if (intensity > 0.2) bgColor = "bg-green-200"

                      return (
                        <motion.div
                          key={`day-${weekIndex}-${dayIndex}`}
                          className={`rounded-sm ${bgColor}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.2, delay: 0.01 * (weekIndex * 12 + dayIndex) }}
                          whileHover={{ scale: 1.2 }}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>
              <div className="absolute bottom-2 right-2 text-xs text-gray-500 dark:text-gray-400">Last 12 weeks</div>
            </div>
          </motion.div>

          <motion.div className="mt-6 flex justify-center">
            <motion.a
              href="https://leetcode.com/u/UjjwalDixit22/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="mr-2 h-4 w-4" /> View Full Profile
            </motion.a>
          </motion.div>
        </motion.div>
      ),
    },
    {
      id: "hackerrank",
      name: "HackerRank",
      icon: <HackerRankIcon />,
      url: "https://www.hackerrank.com/profile/ujjwaldixit285",
      color: "bg-green-500",
      textColor: "text-green-500",
      hoverColor: "hover:bg-green-100",
      content: (
        <motion.div variants={statsVariants} initial="hidden" animate="visible" className="space-y-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Profile Stats</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">Verified Skills</p>
                <div className="flex items-end gap-2">
                  <motion.p
                    className="text-3xl font-bold text-gray-900 dark:text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    8
                  </motion.p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">skills</p>
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">Badges Earned</p>
                <div className="flex items-end gap-2">
                  <motion.p
                    className="text-3xl font-bold text-gray-900 dark:text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    5
                  </motion.p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">badges</p>
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">Challenges Solved</p>
                <div className="flex items-end gap-2">
                  <motion.p
                    className="text-3xl font-bold text-gray-900 dark:text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    42
                  </motion.p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">challenges</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* New skill progress graph */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Skill Progress</h3>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Problem Solving</span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <motion.div
                      className="bg-green-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Java</span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <motion.div
                      className="bg-green-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "92%" }}
                      transition={{ duration: 1, delay: 0.6 }}
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">SQL</span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <motion.div
                      className="bg-green-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "78%" }}
                      transition={{ duration: 1, delay: 0.7 }}
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">JavaScript</span>
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <motion.div
                      className="bg-green-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "70%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Skill Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30 hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-200 dark:bg-green-800/50 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-700 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Problem Solving (Basic)</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Verified March 2024</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30 hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-200 dark:bg-green-800/50 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-700 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Java (Basic)</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Verified February 2024</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30 hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-200 dark:bg-green-800/50 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-700 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">JavaScript (Basic)</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Verified January 2024</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4 border border-green-200 dark:border-green-800/30 hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-200 dark:bg-green-800/50 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-700 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">SQL (Intermediate)</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Verified December 2023</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* New badges showcase */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Badges Showcase</h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((badge) => (
                <motion.div
                  key={`badge-${badge}`}
                  className="flex flex-col items-center"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {badge === 1 && <Trophy className="h-8 w-8" />}
                    {badge === 2 && <Code className="h-8 w-8" />}
                    {badge === 3 && <CheckCircle className="h-8 w-8" />}
                    {badge === 4 && <Award className="h-8 w-8" />}
                    {badge === 5 && <GitBranch className="h-8 w-8" />}
                  </div>
                  <p className="mt-2 text-xs text-center text-gray-700 dark:text-gray-300">
                    {badge === 1 && "Gold Badge"}
                    {badge === 2 && "30 Days of Code"}
                    {badge === 3 && "Problem Solver"}
                    {badge === 4 && "SQL Expert"}
                    {badge === 5 && "Java Master"}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-900 dark:text-white">
                <Trophy className="mr-2 h-5 w-5 text-green-600 dark:text-green-400" /> Badges
              </h3>
              <div className="flex flex-wrap gap-2">
                <motion.div whileHover={{ y: -3 }} className="transition-all duration-300">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 transition-colors duration-300 dark:bg-green-900/30 dark:text-green-200 dark:hover:bg-green-800/30">
                    Problem Solving
                  </Badge>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} className="transition-all duration-300">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 transition-colors duration-300 dark:bg-green-900/30 dark:text-green-200 dark:hover:bg-green-800/30">
                    Java
                  </Badge>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} className="transition-all duration-300">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 transition-colors duration-300 dark:bg-green-900/30 dark:text-green-200 dark:hover:bg-green-800/30">
                    SQL
                  </Badge>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} className="transition-all duration-300">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 transition-colors duration-300 dark:bg-green-900/30 dark:text-green-200 dark:hover:bg-green-800/30">
                    30 Days of Code
                  </Badge>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} className="transition-all duration-300">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 transition-colors duration-300 dark:bg-green-900/30 dark:text-green-200 dark:hover:bg-green-800/30">
                    10 Days of JavaScript
                  </Badge>
                </motion.div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-900 dark:text-white">
                <Code className="mr-2 h-5 w-5 text-green-600 dark:text-green-400" /> Top Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                <motion.div whileHover={{ y: -3 }} className="transition-all duration-300">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 transition-colors duration-300 dark:bg-green-900/30 dark:text-green-200 dark:hover:bg-green-800/30">
                    Data Structures
                  </Badge>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} className="transition-all duration-300">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 transition-colors duration-300 dark:bg-green-900/30 dark:text-green-200 dark:hover:bg-green-800/30">
                    Algorithms
                  </Badge>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} className="transition-all duration-300">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 transition-colors duration-300 dark:bg-green-900/30 dark:text-green-200 dark:hover:bg-green-800/30">
                    Database Design
                  </Badge>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div className="mt-6 flex justify-center">
            <motion.a
              href="https://www.hackerrank.com/profile/ujjwaldixit285"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="mr-2 h-4 w-4" /> View Full Profile
            </motion.a>
          </motion.div>
        </motion.div>
      ),
    },
    {
      id: "geeksforgeeks",
      name: "GeeksforGeeks",
      icon: <GeeksforGeeksIcon />,
      url: "https://www.geeksforgeeks.org/user/ujjwaldixit/",
      color: "bg-emerald-500",
      textColor: "text-emerald-500",
      hoverColor: "hover:bg-emerald-100",
      content: (
        <motion.div variants={statsVariants} initial="hidden" animate="visible" className="space-y-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Profile Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800/30 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">Institution Rank</p>
                <div className="flex items-end gap-2">
                  <motion.p
                    className="text-3xl font-bold text-gray-900 dark:text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    156
                  </motion.p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">of 2.5K</p>
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800/30 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">Problems Solved</p>
                <div className="flex items-end gap-2">
                  <motion.p
                    className="text-3xl font-bold text-gray-900 dark:text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    185
                  </motion.p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">problems</p>
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800/30 hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <p className="text-sm text-gray-600 dark:text-gray-400">Monthly Score</p>
                <div className="flex items-end gap-2">
                  <motion.p
                    className="text-3xl font-bold text-gray-900 dark:text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    324
                  </motion.p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">points</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Problem Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800/30 hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">Data Structures</h4>
                  <Badge className="bg-emerald-200 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-200">
                    78 solved
                  </Badge>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-emerald-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "78%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800/30 hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">Algorithms</h4>
                  <Badge className="bg-emerald-200 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-200">
                    65 solved
                  </Badge>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-emerald-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "65%" }}
                    transition={{ duration: 1, delay: 0.6 }}
                  ></motion.div>
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800/30 hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">Dynamic Programming</h4>
                  <Badge className="bg-emerald-200 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-200">
                    42 solved
                  </Badge>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-emerald-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "42%" }}
                    transition={{ duration: 1, delay: 0.7 }}
                  ></motion.div>
                </div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-lg p-4 border border-emerald-200 dark:border-emerald-800/30 hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">Competitive Programming</h4>
                  <Badge className="bg-emerald-200 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-200">
                    35 solved
                  </Badge>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-emerald-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "35%" }}
                    transition={{ duration: 1, delay: 0.8 }}
                  ></motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-900 dark:text-white">
                <Award className="mr-2 h-5 w-5 text-emerald-600 dark:text-emerald-400" /> Achievements
              </h3>
              <div className="space-y-2">
                <motion.div
                  className="flex items-center gap-2 bg-emerald-100/50 dark:bg-emerald-900/20 p-2 rounded-md"
                  whileHover={{ x: 5 }}
                >
                  <Trophy className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-gray-800 dark:text-gray-200">Top 5% in institution</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 bg-emerald-100/50 dark:bg-emerald-900/20 p-2 rounded-md"
                  whileHover={{ x: 5 }}
                >
                  <Trophy className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-gray-800 dark:text-gray-200">100-day coding streak</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 bg-emerald-100/50 dark:bg-emerald-900/20 p-2 rounded-md"
                  whileHover={{ x: 5 }}
                >
                  <Trophy className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-gray-800 dark:text-gray-200">DSA Level 3 Badge</span>
                </motion.div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-900 dark:text-white">
                <Code className="mr-2 h-5 w-5 text-emerald-600 dark:text-emerald-400" /> Languages Used
              </h3>
              <div className="flex flex-wrap gap-2">
                <motion.div whileHover={{ y: -3 }} className="transition-all duration-300">
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors duration-300 dark:bg-emerald-900/30 dark:text-emerald-200 dark:hover:bg-emerald-800/30">
                    Java
                  </Badge>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} className="transition-all duration-300">
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors duration-300 dark:bg-emerald-900/30 dark:text-emerald-200 dark:hover:bg-emerald-800/30">
                    C++
                  </Badge>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} className="transition-all duration-300">
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors duration-300 dark:bg-emerald-900/30 dark:text-emerald-200 dark:hover:bg-emerald-800/30">
                    Python
                  </Badge>
                </motion.div>
                <motion.div whileHover={{ y: -3 }} className="transition-all duration-300">
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors duration-300 dark:bg-emerald-900/30 dark:text-emerald-200 dark:hover:bg-emerald-800/30">
                    JavaScript
                  </Badge>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div className="mt-6 flex justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://www.geeksforgeeks.org/user/ujjwaldixit/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> Visit Full Profile
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      ),
    },
  ]

  return (
    <section id="coding-profiles" className="py-16 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground variant="coding" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Coding Profiles</h2>
          <motion.div
            className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="mt-6 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My problem-solving journey across various coding platforms. I regularly practice data structures and
            algorithms to enhance my skills.
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {platforms.map((platform) => (
              <motion.button
                key={platform.id}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                  activeTab === platform.id
                    ? `border-${platform.color.split("-")[1]}-500 bg-${platform.color.split("-")[1]}-50 dark:bg-${
                        platform.color.split("-")[1]
                      }-900/20 ${platform.textColor} dark:text-${platform.color.split("-")[1]}-400`
                    : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                }`}
                onClick={() => setActiveTab(platform.id)}
                variants={tabVariants}
                animate={activeTab === platform.id ? "active" : "inactive"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className={activeTab === platform.id ? platform.textColor : "text-gray-600 dark:text-gray-400"}>
                  {platform.icon}
                </span>
                <span className={activeTab === platform.id ? platform.textColor : "text-gray-600 dark:text-gray-400"}>
                  {platform.name}
                </span>
              </motion.button>
            ))}
          </div>

          <motion.div
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6">{platforms.find((p) => p.id === activeTab)?.content}</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
