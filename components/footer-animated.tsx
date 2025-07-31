"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"

// Custom social media icons
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a1.374 1.374 0 0 0 0 1.94l3.854 4.126 5.406 5.788a1.374 1.374 0 0 0 1.94 0l5.406-5.788 3.854-4.126a1.374 1.374 0 0 0 0-1.94l-3.854-4.126L14.44.438A1.374 1.374 0 0 0 13.483 0zm-2.866 12.815a1.374 1.374 0 1 1 0 2.748 1.374 1.374 0 0 1 0-2.748zm8.66 0a1.374 1.374 0 1 1 0 2.748 1.374 1.374 0 0 1 0-2.748z" />
  </svg>
)

const HackerRankIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 5.32c-.049-.029-.108-.047-.165-.047s-.116.018-.165.047l-1.574 1.049c-.074.045-.123.126-.123.221 0 .143.113.258.254.258h.701l.002 7.634c0 .52.446.967.968.967h4.84c.523 0 .97-.447.97-.967V7.057c0-.143-.115-.258-.26-.258" />
  </svg>
)

const GeeksforGeeksIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 0 1-1.104.695 4.51 4.51 0 0 1-3.116.096 3.79 3.79 0 0 1-1.08-.575 3.568 3.568 0 0 1-.853-.913c-.232-.35-.424-.745-.568-1.174h9.063c.01-.144.02-.289.02-.435 0-.575-.08-1.149-.242-1.704a4.83 4.83 0 0 0-.76-1.5c-.338-.445-.76-.819-1.252-1.098-.493-.28-1.055-.425-1.699-.425-.59 0-1.129.135-1.622.4-.492.265-.913.624-1.262 1.079a4.875 4.875 0 0 0-.8 1.537 5.684 5.684 0 0 0-.282 1.784c0 .61.095 1.18.282 1.704.188.525.455.984.8 1.376.347.393.76.703 1.243.929.482.226 1.023.339 1.622.339.787 0 1.477-.154 2.066-.463.59-.309 1.073-.754 1.447-1.335h-1.43a1.772 1.772 0 0 1-.76.604c-.338.154-.73.232-1.175.232-.59 0-1.085-.164-1.477-.492-.393-.329-.642-.814-.75-1.457h6.025c.02-.126.02-.261.03-.406.01-.145.01-.29.01-.435v-.01zm-6.245-.01a2.002 2.002 0 0 1 .512-1.174c.143-.154.309-.28.502-.376.193-.096.396-.164.61-.203.213-.04.425-.058.628-.058.223 0 .435.019.638.058.203.039.406.107.59.203.183.096.347.222.49.376.143.154.26.338.347.551.087.213.154.445.193.695H15.17c.01-.01.02-.029.03-.048l.01-.02zM9.695 12.8c0 .406-.067.79-.203 1.156a2.896 2.896 0 0 1-.575.944 2.64 2.64 0 0 1-.893.636c-.347.154-.73.232-1.156.232-.425 0-.81-.078-1.156-.232a2.642 2.642 0 0 1-.893-.636 2.906 2.906 0 0 1-.58-.944 3.529 3.529 0 0 1-.202-1.156c0-.406.067-.8.203-1.166.135-.367.328-.684.58-.954.25-.27.55-.483.892-.636.347-.154.731-.231 1.156-.231.425 0 .81.077 1.156.231.347.153.644.366.893.636.25.27.44.587.575.954.136.367.203.76.203 1.166zm-1.44 0c0-.232-.03-.454-.087-.665a1.419 1.419 0 0 0-.27-.531 1.254 1.254 0 0 0-.444-.348 1.386 1.386 0 0 0-.59-.126c-.213 0-.406.042-.58.126a1.254 1.254 0 0 0-.443.348c-.116.154-.203.328-.26.53a2.164 2.164 0 0 0-.087.666c0 .232.029.454.087.665.057.213.144.396.26.54.116.145.261.26.444.338.173.077.366.116.58.116.212 0 .405-.039.59-.116.183-.077.328-.193.443-.338.116-.144.203-.327.27-.54.058-.21.087-.433.087-.665zM2.5 9.086c.135 0 .26.01.376.029.116.02.222.048.319.087.096.038.183.087.26.144.077.058.144.125.202.203.058.077.106.164.144.26.039.096.067.202.087.318.019.116.029.242.029.377v5.753H5.26v-5.753c0-.135.01-.26.03-.377.019-.116.048-.222.086-.319.039-.096.087-.182.145-.26a.972.972 0 0 1 .202-.202c.077-.058.164-.106.26-.144.096-.039.202-.067.318-.087a2.16 2.16 0 0 1 .377-.029h.377V7.992H2.5v1.094h.001zm11.27-3.011a.896.896 0 0 0-.323.058.723.723 0 0 0-.261.164.777.777 0 0 0-.174.242.72.72 0 0 0-.063.3c0 .106.021.204.063.295a.777.777 0 0 0 .174.241.723.723 0 0 0 .26.164.896.896 0 0 0 .324.058.896.896 0 0 0 .323-.058.723.723 0 0 0 .261-.164.777.777 0 0 0 .174-.241.72.72 0 0 0 .063-.295.72.72 0 0 0-.063-.3.777.777 0 0 0-.174-.242.723.723 0 0 0-.26-.164.896.896 0 0 0-.324-.058zm-8.388 0a.896.896 0 0 0-.323.058.723.723 0 0 0-.261.164.777.777 0 0 0-.174.242.72.72 0 0 0-.063.3c0 .106.021.204.063.295a.777.777 0 0 0 .174.241.723.723 0 0 0 .26.164.896.896 0 0 0 .324.058.896.896 0 0 0 .323-.058.723.723 0 0 0 .261-.164.777.777 0 0 0 .174-.241.72.72 0 0 0 .063-.295.72.72 0 0 0-.063-.3.777.777 0 0 0-.174-.242.723.723 0 0 0-.26-.164.896.896 0 0 0-.324-.058zm4.194 0a.896.896 0 0 0-.323.058.723.723 0 0 0-.261.164.777.777 0 0 0-.174.242.72.72 0 0 0-.063.3c0 .106.021.204.063.295a.777.777 0 0 0 .174.241.723.723 0 0 0 .26.164.896.896 0 0 0 .324.058.896.896 0 0 0 .323-.058.723.723 0 0 0 .261-.164.777.777 0 0 0 .174-.241.72.72 0 0 0 .063-.295.72.72 0 0 0-.063-.3.777.777 0 0 0-.174-.242.723.723 0 0 0-.26-.164.896.896 0 0 0-.324-.058z" />
  </svg>
)

export default function FooterAnimated() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Ujjwaldixit22",
      label: "GitHub",
      hoverColor: "hover:text-gray-100",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/ujjwaldixit22/",
      label: "LinkedIn",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: <InstagramIcon />,
      href: "https://www.instagram.com/ujjwal.golu224/",
      label: "Instagram",
      hoverColor: "hover:text-pink-400",
    },
    {
      icon: <TwitterIcon />,
      href: "https://x.com/UjjwalDixi47595",
      label: "Twitter",
      hoverColor: "hover:text-blue-400",
    },
    {
      icon: <LeetCodeIcon />,
      href: "https://leetcode.com/u/UjjwalDixit22/",
      label: "LeetCode",
      hoverColor: "hover:text-yellow-400",
    },
    {
      icon: <HackerRankIcon />,
      href: "https://www.hackerrank.com/profile/ujjwaldixit285",
      label: "HackerRank",
      hoverColor: "hover:text-green-400",
    },
    {
      icon: <GeeksforGeeksIcon />,
      href: "https://www.geeksforgeeks.org/user/ujjwaldixit/",
      label: "GeeksforGeeks",
      hoverColor: "hover:text-green-400",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:ujjwaldixit285@gmail.com",
      label: "Email",
      hoverColor: "hover:text-red-400",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      href: "tel:+918864949485",
      label: "Phone",
      hoverColor: "hover:text-green-400",
    },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-blue-500 opacity-5 animate-pulse-slow"></div>
      <div
        className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-purple-500 opacity-5 animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Ujjwal Dixit
            </h3>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 sm:grid-cols-5 gap-4 mb-6 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {socialLinks.map((link, index) => (
              <motion.div key={link.label} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Link
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`text-gray-400 ${link.hoverColor} transition-colors duration-300 flex flex-col items-center`}
                >
                  {link.icon}
                  <span className="text-xs mt-1">{link.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>&copy; {currentYear} Ujjwal Dixit. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
