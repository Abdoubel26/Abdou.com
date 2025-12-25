import solvra from '../assets/Solvra_icon.png'
import youtube from '../assets/Y.png'
import gemini from '../assets/gemini.png'
function Projects() {
    return ( 
    <div className="flex flex-col justify-center items-center p-4">

        <div className="flex lg:flex-row justify-between  flex-col">
            <div className=" p-3 shadow-gray-500 shadow my-2  hover:shadow-[4px_4px_4px] transition-all w-100 lg:mx-3">
                <div className='flex '> 
                   <img src={solvra} className='h-13 m-1 border border-dashed rounded-2xl'></img><h1 className='text-3xl font-semibold p-3'>Solvra</h1> 
                </div>
                <p className=' '>An app helping people clarify their problems using a recrusive method</p>
            </div>

            <div className=" p-3  my-2 shadow-gray-500 shadow hover:shadow-[4px_4px_4px] transition-all w-100 lg:mx-3">
                <div className='flex '>
                    <img src={gemini} className='h-13'></img>
                    <h1  className='text-3xl  font-semibold p-3'>Gemini Clone</h1>
                </div>
                    <p>I'm always trying to discover new technologies and what I can do them, building a Gemini clone is great example for this.</p>
                    <a href='https://github.com/Abdoubel26/Google-Gemini-clone' className='hover:underline text-blue-800'>Source Code</a>
            </div>

            <div className=" p-3  my-2 shadow-gray-500 shadow hover:shadow-[4px_4px_4px] transition-all w-100 lg:mx-3">
                <div className='flex '>
                  <img src={youtube} className='h-13' ></img> 
                    <h1  className='text-3xl font-semibold p-3'>YouTube clone</h1>
                </div>
                    <p>Creating Clones of Popular Platforms Like YouTube is a Great way to sharpen my web development skills</p>
            </div>

        </div>
    </div> );
}

export default Projects;