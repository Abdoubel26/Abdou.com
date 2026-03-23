import Hero from "./components/hero"
import Nav from "./components/Nav"
import Me from "./components/Me"
import Projects from "./components/Projects"
import ReadsScene from "./components/ReadsWrapper"
import Skills from "./components/Skills"

function App() {
  
  return (
    <>
    <Nav/>
    <Hero/> 
    <Me/>
    <Projects />
    <ReadsScene />
    <Skills />
    </>
  )
}

export default App
