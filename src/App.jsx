import React, { useEffect } from "react"
import 'aos/dist/aos.css'
import Aos from 'aos'
import Hero from "./components/hero/Hero"
import Skills from "./components/skills/Skills"
import Experience from "./components/experience/Experience"
import Language from "./components/language/Language"
import Projects from "./components/projects/Projects"
import Contacts from "./components/contacts/Contacts"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
export default function App() {

    Aos.init({
      duration: 1000,
      once: false,
    })
 
  return (
  <main className="bg-gradient-to-r
          from-[#283d4a] to-[#1e272e]">
                    <Navbar />
            
    <Hero />
    <Skills />
    
    <Experience />
    <Language />
    <Projects />
    <Contacts />
    <Footer />
  </main>
  )
}
