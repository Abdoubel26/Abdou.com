import { projects } from "../constants";
import Tilt from 'react-parallax-tilt'

function Projects() {
    return ( 
    <div className="flex flex-col justify-center  max-w-screen   items-center lg:p-4">
        <h1 className="text-4xl lg:text-5xl font-bold outfit my-2  ">Projects</h1>
        <div className="flex lg:grid lg:grid-cols-3 lg:gap-3 justify-between p-2 flex-col">
        {projects.map((project, indx) => (
            <Tilt key={indx}  glareEnable={true} glareMaxOpacity={0.3} scale={1.03} tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className=" p-5 shadow-gray-500 overflow-hidden flex flex-wrap h-40 bg-linear-to-br from-amber-100 to-amber-200 shadow my-2 relative rounded-2xl  hover:shadow-[4px_4px_4px]  transition-all duration-200 lg:w-100 lg:mx-3">
                <div className='flex '> 
                   <img src={project.image} className='h-13 m-1 rounded-2xl'></img><h1 className='text-2xl poppins font-semibold p-3'>{project.title}</h1> 
                </div>
                <p className=' lg:text-sm text-xs poppins '>{project.description}</p>
               <a href={project.link} target="_blank">  
            <button className=" absolute poppins -bottom-3 right-1">
                    
            <div className="text">
                <span>see</span>
                <span>source</span>
                <span>code</span>
            </div>
             <div className="clone">
                <span>see</span>
                <span>source</span>
                <span>code</span>
            </div> 
            <svg
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
            >
            <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                strokeLinejoin="round"
                strokeLinecap="round"
            ></path>
            </svg>
            </button></a>
            </div> </Tilt>
        ))}

        </div>
        
    </div>  );
}

export default Projects;