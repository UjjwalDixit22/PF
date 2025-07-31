"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import AnimatedBackground from "./animated-background"

const projects = [
  {
    title: "Link Shortener App",
    description:
      "Built a comprehensive URL shortening service with a clean and intuitive interface. Features include custom short URLs, click analytics, QR code generation, and link management dashboard. Implemented with modern web technologies to provide fast and reliable URL shortening with detailed usage statistics and user-friendly design.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "CSS"],
    date: "Dec 2024",
    links: {
      github: "#",
      live: "https://url-virid-five.vercel.app",
    },
  },
  {
    title: "Food Ordering Website",
    description:
      "Developed a full-stack food ordering application using the MERN stack with a modern and intuitive user interface. Features include restaurant browsing, menu management, cart functionality, order tracking, and secure payment integration. Implemented real-time order updates and responsive design to ensure seamless user experience across all devices.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "JavaScript", "CSS"],
    date: "Nov 2024",
    links: {
      github: "#",
      live: "https://mern-frontend-teal-seven.vercel.app/",
    },
  },
  {
    title: "Ecommerce Website",
    description:
      "Created a dynamic e-commerce website using HTML, CSS, and JavaScript, integrating visually appealing designs with interactive features. Implemented a user-friendly interface and optimized website responsiveness, leading to a 15% increase in customer engagement. Conducted thorough testing and debugging to ensure seamless functionality across different browsers and devices.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    date: "Oct 2024",
    links: {
      github: "#",
      live: "https://commercial-web-git-main-ujjwals-projects-e4a747b7.vercel.app/",
    },
  },
  {
    title: "Notes Application",
    description:
      "Built a robust notes application leveraging MongoDB, Express-JS, ReactJS, and NodeJS to facilitate efficient notetaking and organization. Spearheaded backend development and database management, achieving a 20% improvement in data retrieval speeds. Ensured scalability and user satisfaction by conducting extensive testing and gathering feedback from end users.",
    technologies: ["MongoDB", "React", "Express", "NodeJS"],
    date: "Sep 2024",
    links: {
      github: "#",
      live: "https://notes-hub-main-git-main-ujjwals-projects-e4a747b7.vercel.app/",
    },
  },
  {
    title: "BlogSpace - Blogging Platform",
    description:
      "Designed and developed a modern blogging platform called BlogSpace with a clean, purple-themed interface focusing on efficient content management and user interactivity. Enhanced performance and reliability through the integration of secure authentication systems and optimized database queries. Features include user registration, blog creation, and responsive design for optimal user experience.",
    technologies: ["HTML", "Bootstrap", "JavaScript", "MySQL", "PHP"],
    date: "May 2023",
    links: {
      github: "#",
      live: "https://bloogs-84mf.vercel.app/",
    },
  },
  {
    title: "Gym Website",
    description:
      "Developed a responsive website for a gym, incorporating user-centric design and interactive features to enhance user engagement. Led the front-end development using HTML, CSS, and JavaScript, resulting in a 15% increase in user retention and sign-ups. Tested the website across multiple devices and browsers to ensure scalability and compatibility.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    date: "Sep 2023",
    links: {
      github: "#",
      live: "https://gym-web-git-main-ujjwals-projects-e4a747b7.vercel.app/",
    },
  },
  {
    title: "Advanced Lyrics Finder",
    description:
      "Created an intuitive lyrics finder application that allows users to search for song lyrics quickly and efficiently. Implemented a clean, responsive interface with real-time search functionality and song information display. Integrated with music APIs to provide accurate and up-to-date lyrics for thousands of songs across various genres.",
    technologies: ["React", "JavaScript", "API Integration", "CSS"],
    date: "Dec 2023",
    links: {
      github: "#",
      live: "https://lyricsfinder-git-main-ujjwals-projects-e4a747b7.vercel.app/",
    },
  },
]

export default function ProjectsAnimated() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <section id="projects" className="py-16 relative">
      {/* Animated Background */}
      <AnimatedBackground variant="projects" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <motion.p
            className="mt-6 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Here are some of the projects I've worked on. Each project has helped me develop different skills and solve
            unique challenges.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 h-full card-hover bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {project.date}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-gray-100 text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-colors duration-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-blue-900 dark:hover:text-blue-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-3 pt-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="gap-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 bg-transparent"
                  >
                    <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" /> Code
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="gap-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
