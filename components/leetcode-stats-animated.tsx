"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, GitBranch, GitMerge } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function LeetcodeStatsAnimated() {
  return (
    <section id="leetcode" className="py-16 bg-gradient-to-b from-blue-50 to-white relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse-slow"></div>
      <div
        className="absolute bottom-20 right-20 w-40 h-40 bg-purple-100 rounded-full opacity-20 animate-pulse-slow"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900">LeetCode Stats</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <motion.p
            className="mt-6 text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My problem-solving journey on LeetCode, where I regularly practice data structures and algorithms.
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="border border-gray-200 hover:border-blue-300 transition-all duration-300 card-hover bg-white/90 backdrop-blur-sm overflow-hidden">
            <CardHeader className="pb-2 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl font-bold text-gray-900">UjjwalDixit22</CardTitle>
                  <CardDescription className="text-gray-600 mt-1">Rank: 854,386</CardDescription>
                </div>
                <div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-600">
                  <Code className="h-5 w-5" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <motion.div
                className="mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Problems Solved</h3>
                <div className="flex flex-wrap gap-4">
                  <motion.div
                    className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 flex-1 border border-gray-100 hover:shadow-md transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <p className="text-sm text-gray-600">Total Submissions</p>
                    <p className="text-2xl font-bold text-gray-900">217</p>
                  </motion.div>
                  <motion.div
                    className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 flex-1 border border-gray-100 hover:shadow-md transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <p className="text-sm text-gray-600">Active Days</p>
                    <p className="text-2xl font-bold text-gray-900">97</p>
                  </motion.div>
                  <motion.div
                    className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 flex-1 border border-gray-100 hover:shadow-md transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <p className="text-sm text-gray-600">Max Streak</p>
                    <p className="text-2xl font-bold text-gray-900">93</p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  <motion.div
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full px-4 py-2 hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="font-medium text-gray-900">Java</span>
                    <Badge variant="secondary" className="bg-blue-200 text-blue-800">
                      139
                    </Badge>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-purple-50 rounded-full px-4 py-2 hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="font-medium text-gray-900">C++</span>
                    <Badge variant="secondary" className="bg-purple-200 text-purple-800">
                      3
                    </Badge>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2 bg-gradient-to-r from-green-100 to-green-50 rounded-full px-4 py-2 hover:shadow-md transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="font-medium text-gray-900">Python3</span>
                    <Badge variant="secondary" className="bg-green-200 text-green-800">
                      2
                    </Badge>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-900">
                    <GitMerge className="mr-2 h-5 w-5 text-blue-600" /> Advanced Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <motion.div whileHover={{ y: -3 }} className="transition-all duration-300">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-300">
                        Dynamic Programming
                      </Badge>
                    </motion.div>
                    <motion.div whileHover={{ y: -3 }} className="transition-all duration-300">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-300">
                        Divide and Conquer
                      </Badge>
                    </motion.div>
                    <motion.div whileHover={{ y: -3 }} className="transition-all duration-300">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-300">
                        Backtracking
                      </Badge>
                    </motion.div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-900">
                    <GitBranch className="mr-2 h-5 w-5 text-purple-600" /> Intermediate Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <motion.div whileHover={{ y: -3 }} className="transition-all duration-300">
                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors duration-300">
                        Math
                      </Badge>
                    </motion.div>
                    <motion.div whileHover={{ y: -3 }} className="transition-all duration-300">
                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors duration-300">
                        Hash Table
                      </Badge>
                    </motion.div>
                    <motion.div whileHover={{ y: -3 }} className="transition-all duration-300">
                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors duration-300">
                        Binary Search
                      </Badge>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="relative h-48 w-full overflow-hidden rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <Image
                    src="https://sjc.microlink.io/J-NX4tVP1BaAD2EtMmTi45UsPv6re4ezo_CpwslBGHp6GPOq4do7kEF5fAl5y92ZfyvAKLjo3AERpyIqNwX7lw.jpeg"
                    alt="LeetCode Activity Calendar"
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
