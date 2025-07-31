import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Development using MERN Stack",
    company: "Cipher schools (Edtech Company)",
    type: "Hybrid",
    period: "Jul 2024",
    description: [
      "Engineered dynamic, responsive web applications using MongoDB, Express.js, Node.js, React.js resulting in 30% boost in user engagement during project testing.",
      "Orchestrated seamless frontend – backend integration through RESTful APIs, accelerating development cycles by 25%.",
      "Deployed full stack applications on cloud platforms such as Netlify and Vercel ensuring 99% uptime during testing and review phases.",
      "Leveraged state management tools like Redux and React Content APIs to enhance application performance and scalability.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 relative">
      <div className="absolute inset-0 bg-white dark:bg-gray-900 transition-colors duration-300"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Training & Experience</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="mb-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-shadow bg-white dark:bg-gray-800/90 backdrop-blur-sm"
            >
              <CardHeader className="pb-2 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/80">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 mt-1">
                      <span className="font-medium">{exp.company}</span> • {exp.type}
                    </CardDescription>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full">
                    <Briefcase className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{exp.period}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-gray-400 dark:text-gray-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
