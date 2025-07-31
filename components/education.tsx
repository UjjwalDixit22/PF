import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const education = [
  {
    institution: "Lovely Professional University",
    location: "Jalandhar, Punjab",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    period: "Sep 2022 – Present",
    details: "CGPA: 7.30",
  },
  {
    institution: "Kapil Muni Children's Academy",
    location: "Mainpuri, Uttar Pradesh",
    degree: "Matriculation",
    period: "Apr 2020 – Mar 2022",
    details: "Percentage: 75%, Courses: Physics, Mathematics, Chemistry",
  },
  {
    institution: "St Thomas Sr Sec School",
    location: "Mainpuri, Uttar Pradesh",
    degree: "High-School",
    period: "May 2020 – Jul 2022",
    details: "Percentage: 79%",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-16 relative">
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900/80 transition-colors duration-300"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="mb-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-shadow bg-white dark:bg-gray-800/90 backdrop-blur-sm"
            >
              <CardHeader className="pb-2 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/80">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{edu.institution}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 mt-1">{edu.location}</CardDescription>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full">
                    <GraduationCap className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <p className="font-medium text-gray-800 dark:text-gray-200">{edu.degree}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{edu.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
