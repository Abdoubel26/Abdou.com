import { useEffect } from 'react';
import pic from '../assets/propic.jpeg'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function Me() {

    useEffect(() => {
        gsap.to(".dashed-ring", {
      rotate: 360,
      ease: "none",
      scrollTrigger: {
        trigger: ".dashed-ring",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      transformOrigin: "50% 50%",
    });
  }, [])



    return ( 
    <>
    <div className="flex bg-no-repeat bg-cover bg-center border-b-2 border-dotted border-b-blue-800 max-w-screen w-screen overflow-clip flex-col justify-center items-center animate-dropFade">
    <div className="flex bg-linear-to-tr from-amber-100/20 to-amber-400/20 flex-row justify-center w-full lg:p-10 p-2 pt-10">
        <div className='lg:px-5 px-1'>
            <div className=' lg:h-60 lg:w-60 h-40 w-40 p-2 lg:p-3 relative  border-amber-800 m-3'>
                <img src={pic} className='rounded-full overflow-hidden'></img>
                <svg
                    className="absolute inset-0 w-full h-full rotate-0"
                    viewBox="0 0 100 100"
                >
                    <circle
                    cx="50"
                    cy="50"
                    r="49"
                    fill="none"
                    stroke="red"
                    strokeWidth="3"
                    strokeDasharray="4 10"
                    className="dashed-ring"
                    />
                </svg>
            </div>
            
        </div>

        <div className='flex flex-col justify-center items-start p-2 '>
            <div className='flex flex-col justify-center items-center text-2xl lg:4xl font-semibold'> 
                 <h1 className='lg:text-4xl outfit'>About Me</h1>
            </div>
           
            <p className=' lg:w-60 md:w-60 lg:pt-3 lg:text-lg text-xs poppins'>I am passionate about web development and creating technologies that improve the lives of others</p>
        </div>
    </div>
    </div>
    </>
     );
}

export default Me;