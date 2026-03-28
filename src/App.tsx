import Hero from "./components/hero"
import Nav from "./components/Nav"
import Me from "./components/Me"
import Projects from "./components/Projects"
import Reads from "./components/Reads"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import { useRef } from "react"

function App() {

  const aboutRef = useRef<HTMLDivElement | null>(null)
  const projectsRef = useRef<HTMLDivElement | null>(null)
  const skillsRef = useRef<HTMLDivElement | null>(null)
  const contactRef = useRef<HTMLDivElement | null>(null)


  
  return (
    <>
    <Nav  projectsRef={projectsRef} aboutRef={aboutRef} skillsRef={skillsRef} contactRef={contactRef}/>
    <div ref={aboutRef}><Hero/> </div>
    <Me/>
    <div ref={projectsRef}><Projects /></div>
    <div ref={skillsRef}><Skills /></div>
    <Reads />
    <div ref={contactRef}><Contact /></div>
    </>

  )
}

export default App
