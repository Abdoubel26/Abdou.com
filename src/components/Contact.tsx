import React from 'react'

function Contact() {
  return (
    <div className='h-screen flex flex-col items-center bg-linear-to-b  from-gray-900 to-blue-950 text-white'>
        <h1 className="outfit lg:text-5xl text-4xl mt-13 mb-6 font-bold underline  ">Let's Connect!</h1>

        <div className='flex row w-screen'>

            <div className='lg:flex hidden flex-col w-[50%] '>

            </div>

            <div className='flex flex-col border-amber-50 border p-2 items-center w-full lg:w-[50%]'>
                <form className='flex flex-col items-center w-full'>
                <div className='flex flex-row'>

                <div className='flex flex-col mx-1 '><label className='ml-2'>First Name</label><input required type='text' placeholder='First Name' className='rounded-full p-2 focus:outline-none bg-gray-200 text-black pl-4  outfit text-lg border-black border'></input></div> 
                <div className='flex flex-col mx-1 '><label className='ml-2'>Last Name</label><input  required type='text' placeholder='Last Name' className='rounded-full p-2 focus:outline-none  bg-gray-200  text-black pl-4 outfit text-lg border-black border'></input></div>
                </div>
                <input required type='email' placeholder='Emai' className='rounded-full p-2 w-[86%] focus:outline-none my-6 bg-gray-200  text-black pl-4 outfit text-lg border-black border'></input>
                <textarea rows={5} placeholder='Write Your Message Here' className='rounded-2xl p-2 w-[86%] focus:outline-none my-3 bg-gray-200  text-black pl-4 outfit text-lg border-black border'></textarea>
                <button className=' rounded-full border-white bungee border-2 text-white p-3 w-[86%]  bg-black'>Submit</button>
                </form>
            </div>

        </div>

    </div>
  )
}

export default Contact
