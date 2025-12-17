import solvra from '../assets/Solvra_icon.png'
import youtube from '../assets/Y.png'
import gemini from '../assets/gemini.png'
function Projects() {
    return ( 
    <div className="flex flex-col justify-center items-center p-4">

        <div className="flex lg:flex-row  flex-col">
            <div className=" bg-gray-500 p-3 rounded-2xl my-2">
                <div className='flex '> 
                   <img src={solvra} className='h-13 m-1'></img><h1 className='text-3xl text-white font-semibold p-3'>Solvra</h1> 
                </div>
                <p className='text-white '>An app helping people clarify their problems using a recrusive method</p>
            </div>

            <div className=" bg-gray-500 p-3 rounded-2xl my-2">
                <div className='flex '>
                    <img src={gemini} className='h-13'></img>
                    <h1  className='text-3xl text-white font-semibold p-3'>Google Gemini Clone</h1>
                </div>
                
            </div>

            <div className=" bg-gray-500 p-3 rounded-2xl my-2">
                <div className='flex '>
                  <img src={youtube} className='h-13' ></img> 
                    <h1  className='text-3xl text-white font-semibold p-3'>Youtube clone</h1>
                </div>
                
                

            </div>

        </div>
    </div> );
}

export default Projects;