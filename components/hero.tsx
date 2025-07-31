import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Hi, I'm <span className="text-gray-900">Ujjwal Dixit</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600">Full Stack Developer</h2>
            <p className="text-gray-600 max-w-lg">
              I specialize in building responsive web applications using modern technologies like React, Node.js, and
              MongoDB. Currently pursuing B.Tech in Computer Science at Lovely Professional University.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-gray-900 hover:bg-gray-800">
                <Link href="#contact">
                  Contact Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="https://github.com/Ujjwaldixit22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/ujjwaldixit22/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:ujjwaldixit285@gmail.com"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="tel:+918864949485" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-100 shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4098-2AmmSY0cG9kM2mrXck6kMMqz3l5YoW.jpeg"
                alt="Ujjwal Dixit"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
