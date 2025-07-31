import type { Metadata } from "next"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import HeroAnimated from "@/components/hero-animated"
import AboutAnimated from "@/components/about-animated"
import ProjectsAnimated from "@/components/projects-animated"
import CodingProfiles from "@/components/coding-profiles"
import NavbarAnimated from "@/components/navbar-animated"
import FooterAnimated from "@/components/footer-animated"
import IntroAnimation from "@/components/intro-animation"
import { SplashCursor } from "@/components/ui/splash-cursor"
import ScrollToTop from "@/components/scroll-to-top"
import FloatingThemeToggle from "@/components/floating-theme-toggle"
import FloatingParticles from "@/components/floating-particles"

export const metadata: Metadata = {
  title: "Ujjwal Dixit | Portfolio",
  description: "Full Stack Developer specializing in MERN stack development",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <SplashCursor />
      <IntroAnimation />
      <NavbarAnimated />
      <FloatingParticles />
      <main>
        <HeroAnimated />
        <AboutAnimated />
        <Experience />
        <ProjectsAnimated />
        <CodingProfiles />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <FooterAnimated />
      <ScrollToTop />
      <FloatingThemeToggle />
    </div>
  )
}
