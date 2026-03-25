import { Canvas } from "@react-three/fiber"
import SkillsScene from "./SkillsScene"


function Skills() {
  return (
     <div className="flex bg-linear-to-b  from-gray-900 to-blue-950  text-white flex-col items-center w-screen "> 
            <h1 className="poppins lg:text-7xl text-4xl my-10 font-bold underline ">Tech Stack</h1>
        <div className='w-screen h-[200vh] books-section  '>

        <div className="sticky top-0 h-screen skills-section">
            <Canvas className="w-full h-full" style={{ background: "#00000" }}>
              <SkillsScene />
            </Canvas>
        </div>
        </div>
        </div> 
  )
}

export default Skills
