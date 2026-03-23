import { Canvas } from "@react-three/fiber"
import SkillsScene from "./SkillsScene"


function Skills() {
  return (
     <div className="flex flex-col items-center w-screen"> 
            <h1 className="poppins lg:text-7xl text-4xl my-10 font-bold ">Me Beyond Code</h1>
        <div className='w-screen h-[200vh] books-section  '>

        <div className="sticky top-0 h-screen">
            <Canvas className="w-full h-full" style={{ background: "#1a1a1a" }} camera={{position: [0, 0 ,5]}}>
              <SkillsScene />
            </Canvas>
        </div>
        </div>
        </div> 
  )
}

export default Skills
