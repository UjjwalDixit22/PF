import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Lightbulb, Settings, Users } from "lucide-react"

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

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-gray-900 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            I'm a ambitious Full Stack Developer with expertise in MERN stack development. I enjoy building responsive
            and user-friendly web applications that solve real-world problems. Currently pursuing my B.Tech in Computer
            Science and Engineering at Lovely Professional University.
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">My Skills</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gray-100 rounded-full">{category.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
