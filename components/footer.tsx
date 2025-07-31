import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Ujjwal Dixit</h3>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link
              href="https://github.com/Ujjwaldixit22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/ujjwaldixit22/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:ujjwaldixit285@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link href="tel:+918864949485" className="text-gray-400 hover:text-white transition-colors">
              <Phone className="h-5 w-5" />
              <span className="sr-only">Phone</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Ujjwal Dixit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
