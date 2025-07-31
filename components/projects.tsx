import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
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
    title: "Blogging Website",
    description:
      "Designed and developed a dynamic blogging platform using PHP, focusing on efficient content management and user interactivity. Enhanced performance and reliability through the integration of secure authentication systems and optimized database queries. Collaborated with users to refine the design and functionality, resulting in a 25% increase in content engagement.",
    technologies: ["HTML", "Bootstrap", "JavaScript", "MySQL", "PHP"],
    date: "May 2023",
    links: {
      github: "#",
      live: "https://responsive-blog-website-ujjwals-projects-e4a747b7.vercel.app",
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

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <div className="mt-2 h-1 w-20 bg-gray-900 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project has helped me develop different skills and solve
            unique challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-500 mt-1">{project.date}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-gray-100 text-gray-800">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3 pt-2">
                <Button asChild variant="outline" size="sm" className="gap-1">
                  <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1" /> Code
                  </Link>
                </Button>
                <Button asChild size="sm" className="gap-1 bg-gray-900 hover:bg-gray-800">
                  <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
