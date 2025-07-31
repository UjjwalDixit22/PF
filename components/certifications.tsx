import { Card, CardContent } from "@/components/ui/card"
import { Award, Calendar, ExternalLink } from "lucide-react"
import Link from "next/link"

const certifications = [
  {
    title: "Cloud Computing certification from NPTEL",
    date: "Oct 2024",
    url: "https://drive.google.com/file/d/17Ae7bN83_f9WVRZNWPCU5U_4BY2qhS_2/view?usp=sharing",
  },
  {
    title: "Full-Stack Development using MERN Stack Hybrid | Cipher-schools",
    date: "Jul 2024",
    url: "https://drive.google.com/file/d/15UuR3GkvUDG0jPAj0XQBJ7FNnFIi2n47/view?usp=sharing",
  },
  {
    title: "The Complete 2024 Web Development Bootcamp | Udemy",
    date: "Jun 2024",
    url: null,
  },
  {
    title: "Mastering Data Structures and Algorithms with C++",
    date: "Feb 2024",
    url: "https://drive.google.com/file/d/1RmzTdRy6cuc4z6qcU-QLYia9wX7ohI3E/view?usp=sharing",
  },
  {
    title: "Vanderbilt University (Prompt Engineering for ChatGPT)",
    date: "Mar 2024",
    url: "https://drive.google.com/file/d/1r5tcdanjpuIwB0SmEkgSCODJ3Nh5Gohx/view?usp=sharing",
  },
  {
    title: "Google Cloud Generative AI",
    date: "Aug 2023",
    url: null,
  },
]

const achievements = [
  {
    title: "Participated in Celesta Hackathon to compete among 24 teams of college.",
    date: "Mar 2024",
  },
  {
    title: "Partnered with an NGO for the Community Development Project to work in old age home.",
    date: "Jun 2023",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 relative">
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Certifications & Achievements</h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" /> Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800/90 backdrop-blur-sm group"
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        {cert.url ? (
                          <Link
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-start gap-2 group"
                          >
                            <span className="flex-1">{cert.title}</span>
                            <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-0.5" />
                          </Link>
                        ) : (
                          <p className="font-medium text-gray-800 dark:text-gray-200">{cert.title}</p>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 ml-4">
                        <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span className="whitespace-nowrap">{cert.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award className="mr-2 h-6 w-6 text-purple-600 dark:text-purple-400" /> Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-shadow bg-white dark:bg-gray-800/90 backdrop-blur-sm"
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <p className="font-medium text-gray-800 dark:text-gray-200 flex-1">{achievement.title}</p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 ml-4">
                        <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                        <span className="whitespace-nowrap">{achievement.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
