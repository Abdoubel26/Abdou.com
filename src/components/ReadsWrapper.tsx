import { Canvas } from "@react-three/fiber";
import Reads from "./Reads";



const ReadsWrapper = () => {    
        return (
        <div className='w-screen h-[200vh] books-section  '>

        <div className="sticky top-0 h-screen">
            <Canvas className="w-full h-full" style={{ background: "#1a1a1a" }} camera={{position: [0, 0 ,2]}}>
            <Reads />
            </Canvas>
        </div>
        </div>
        )
}



export default ReadsWrapper