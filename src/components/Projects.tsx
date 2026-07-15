import { projects, type ProjectType } from "../constants";
import Tilt from 'react-parallax-tilt'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowDown, Flag } from "lucide-react";


function Projects() {

    const sixProjects = projects.slice(0, 6)

    const [displayProjects, setDisplayProjects] = useState<ProjectType[]>(sixProjects)

    const [showMore, setShowMore] = useState<boolean>(false)

    useEffect(() => {
        if(showMore){
            setDisplayProjects(projects)
        }
        else {
            setDisplayProjects(sixProjects)
        }
        
    }, [showMore])

    return (
    <div  className="flex flex-col justify-center transition-all duration-150  max-w-screen bg-linear-to-b from-blue-950 to-gray-900   items-center lg:p-4 lg:pb-10 border-b-2 border-blue-600 border-dashed">
        <h1 className="text-4xl lg:text-7xl font-bold outfit my-5 underline text-white   ">Projects</h1>
        <div className="flex lg:grid lg:grid-cols-3 lg:gap-x-3  w-screen  md:grid md:grid-cols-2 md:gap-x-1 p-2 justify-between flex-col">
        {displayProjects.map((project, indx) => (
            <Link to={`/project/${project.id}`} className="cursor-pointer" key={indx}><Tilt   glareEnable={false} glareMaxOpacity={0.3} scale={1.03} tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className=" cursor-pointer p-5 shadow shadow-gray-800 overflow-hidden flex flex-wrap h-40 bg-linear-to-br from-amber-200 to-amber-400 my-4 relative rounded-2xl  hover:shadow-[4px_4px_4px]  transition-all duration-200 lg:w-full  ">
                <div className='flex cursor-pointer '> 
                   <img src={project.image} className='h-13 m-1 cursor-pointer rounded-2xl'></img><h1 className='text-2xl cursor-pointer poppins whitespace-nowrap font-semibold p-3'>{project.title}</h1> 
                </div>

           {project.id === 0 && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-linear-to-r from-blue-950/60 to-indigo-950/60 text-blue-200 border border-blue-500/30 backdrop-blur-md shadow-lg shadow-blue-950/20">
                <Flag className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
                <span>Flagship Project</span>
            </div>
        )}

                <p className=' cursor-pointer lg:text-sm text-xs poppins '>{project.description}</p>
               <a href={project.githubLink} target="_blank">  
            <button className=" absolute poppins button-git -bottom-3 right-1">
                    
            <div className="text mr-1.5 ">
                <span>Learn</span>
                <span>More</span>
                <span>Here</span>
            </div>
             <div className="clone mr-1.5">
                <span>Learn</span>
                <span>More</span>
                <span>Here</span>
            </div> 
            <svg
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-2"
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
            </div> </Tilt></Link>
        ))}

        </div>
        
        <p className={`text-white mb-6 border p-2 border-white rounded-full lg:mb-0 cursor-pointer flex gap-1.5 ${showMore ? "hidden" : "flex"}`} onClick={() => setShowMore(prev => !prev)}> <ArrowDown />Show More</p>
    </div>   );
}

export default Projects;