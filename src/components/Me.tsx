import pic from '../assets/propic.jpeg'
import gsap from 'gsap';

function Me() {




    return ( 
    <>
    <div className="flex bg-no-repeat bg-cover bg-center border-b-2 border-dotted border-b-blue-800 max-w-screen w-screen overflow-clip flex-col justify-center items-center animate-dropFade">
    <div className="flex bg-linear-to-tr from-amber-100/20 to-amber-400/20 flex-row justify-center w-full lg:p-10 p-2 pt-10">
        <div className='lg:px-5 px-1'>
            <div className='rounded-full overflow-hidden lg:h-60 lg:w-60 h-40 w-40 border-3 p-0.5 border-dashed border-amber-800 m-3'>
                <img src={pic} className=''></img>
                <svg
                    className="absolute -left-32 inset-0 w-full h-full rotate-0"
                    viewBox="0 0 100 100"
                >
                    <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="none"
                    stroke="red"
                    strokeWidth="3"
                    strokeDasharray="4 10"
                    className="dotted-ring"
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