import pic from '../assets/propic.png'

function Me() {
    return ( 
    <>
    <div className='flex flex-col justify-center items-center'>
    <div className="flex felx-row p-10 bg-white">
        <div className='lg:px-5 px-1'>
            <div className='rounded-full overflow-hidden lg:h-60 lg:w-60 h-40 w-40 border border-dashed border-amber-800 m-3'>
                <img src={pic} className=''></img>
            </div>
            
        </div>

        <div className='flex flex-col justify-center items-start p-2 '>
            <div className='flex flex-col justify-center items-center text-2xl lg:4xl font-semibold'> 
                 <h1 className='lg:text-4xl'>About Me</h1>
            </div>
           
            <p className=' lg:w-60 md:w-60 lg:pt-3 lg:text-lg '>I am passionate About Web Development and Creating Tools That Improve The Lives of others</p>
        </div>
    </div>
    </div>
    </>
     );
}

export default Me;