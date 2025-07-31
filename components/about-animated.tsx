"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Lightbulb, Settings, Users } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedBackground from "./animated-background"

const skills = {
  languages: ["Java", "Python", "HTML", "SQL", "JavaScript", "PHP"],
  frameworks: ["Bootstrap CSS", "NodeJS", "React", "Angular"],
  tools: ["Git", "VS Code", "VMware", "MongoDB", "MySQL", "IntelliJ Idea", "Postman"],
  soft: ["Problem-Solving", "Team Collaboration", "Project Management", "Time Management", "Adaptability"],
}

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-6 w-6" />,
    skills: skills.languages,
  },
  {
    title: "Frameworks",
    icon: <Globe className="h-6 w-6" />,
    skills: skills.frameworks,
  },
  {
    title: "Tools & Platforms",
    icon: <Settings className="h-6 w-6" />,
    skills: skills.tools,
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Soft Skills",
    icon: <Users className="h-6 w-6" />,
    skills: skills.soft,
  },
  {
    title: "Problem Solving",
    icon: <Lightbulb className="h-6 w-6" />,
    skills: ["Algorithms", "Data Structures", "Debugging"],
  },
]

export default function AboutAnimated() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="py-16 relative">
      {/* Animated Background */}
      <AnimatedBackground variant="about" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div className="inline-block relative">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
            <motion.div
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-theme-500 to-blue-500 rounded-full"
              initial={{ width: 0, x: "50%" }}
              whileInView={{ width: "100%", x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
          <motion.p
            className="mt-6 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm a passionate Full Stack Developer with expertise in MERN stack development. I enjoy building responsive
            and user-friendly web applications that solve real-world problems. Currently pursuing my B.Tech in Computer
            Science and Engineering at Lovely Professional University.
          </motion.p>
        </motion.div>

        <motion.h3
          className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          My Skills
        </motion.h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <Card className="border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 h-full card-hover bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-blue-600 dark:text-blue-400">
                      {category.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-gray-100 text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-colors duration-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-blue-900 dark:hover:text-blue-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
