import { Canvas } from "@react-three/fiber";
import ReadsScene from "./ReadsScene";
import { useRef } from "react";



const Reads = () => {    
    const booksRef = useRef<HTMLDivElement>(null!)
        return (
        <div className="flex flex-col items-center w-screen mt-10 border-t-2 border-dashed border-blue-500"> 
            <h1 className="poppins lg:text-7xl text-4xl my-10 font-bold underline  ">Me Beyond Code</h1>
            <h1 className="poppins lg:text-5xl text-2xl  font-bold my-5 ">My Reads</h1>
        <div className='w-screen h-[200vh] books-section  ' ref={booksRef} >

        <div className="sticky top-0 h-screen">
            <Canvas className="w-full h-full" style={{ background: "#1a1a1a" }} camera={{position: [0, 0 ,1.5]}}>
            <ReadsScene elementRef={booksRef} />
            </Canvas>
        </div>
        </div>
        </div>
        )
}



export default Reads