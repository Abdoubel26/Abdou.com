import sign from '../assets/signature.png'
import emailjs from "emailjs-com";
import { useState } from 'react';
 


function Contact() {
  
  const [message, setMessage] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('');
  
  function sendMessage(message: string, firstName: string, lastName: string, email: string) {
  emailjs.send(
    "service_cu4adwh",     
    "template_ugey1if",     
    { name: firstName + ' ' + lastName,
      message: message,
      email: email
     },  
    "NmSf18KEG6xN5QSpE"          
  );
  setEmail('')
  setFirstName('')
  setLastName('')
  setMessage('')
  }




  return (
    <div className='h-fit flex flex-col items-center bg-linear-to-b  from-blue-950 to-gray-900 text-white'>
        <h1 className="outfit lg:text-6xl text-4xl mt-20 mb-6 font-bold underline  ">Let's Connect!</h1>

        <div className='flex row h-full  w-screen'>

            <div className='lg:flex hidden h-118 items-center flex-col w-[50%] '>
              <h1 className='text-3xl bungee mt-4 '>Let's Build Something Together</h1>

                <img className='h-[35%]  flex flex-1 ' src={sign}></img>

              <div className="social-card my-2 justify-end">
  <a href='https://github.com/Abdoubel26' target='_blank'><button className="Btn github">
    <span className="svgContainer">
      <svg height="1.6em" viewBox="0 0 496 512" fill="white">
        <path
          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        ></path>
      </svg>
    </span>
    <span className="BG"></span>
  </button></a>

  <a href='https://x.com/abdou_belounis' target='_blank'><button className="Btn twitter">
  <span className="svgContainer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1.6em"
      fill="white"
      viewBox="0 0 1200 1227"
    >
      <path d="M714.163 519.284L1160.89 0H1051.72L667.137 450.887L356.69 0H0L468.972 681.821L0 1226.37H109.174L515.197 744.218L843.31 1226.37H1200L714.137 519.284H714.163ZM563.556 671.964L521.81 612.475L148.708 79.694H301.49L602.176 511.778L643.922 571.267L1051.78 1150.3H898.998L563.556 671.99V671.964Z"/>
    </svg>
  </span>
  <span className="BG"></span>
</button></a>


 <a href='https://discord.com/users/1228788061039755276' target='_blank'> <button className="Btn discord">
    <span className="svgContainer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1.4em"
        fill="white"
        viewBox="0 0 640 512"
      >
        <path
          d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
        ></path>
      </svg>
    </span>
    <span className="BG"></span>
  </button></a>
</div>


            </div>

            <div className='flex flex-col p-2 items-center w-full lg:w-[50%]'>
                <form className='flex flex-col items-center w-full' onSubmit={(e) => { 
                  e.preventDefault()
                  sendMessage(message, firstName, lastName, email)
                }}>
                <div className='flex flex-col w-full items-center justify-center lg:flex-row'>

                <div className='flex flex-col mx-1 '><label className='ml-2'>First Name</label><input value={firstName} onChange={(e) => setFirstName(e.target.value)} required type='text' placeholder='First Name' className='rounded-full p-2 focus:outline-none bg-gray-200 text-black pl-4  outfit text-lg border-black border'></input></div> 
                <div className='flex flex-col mx-1 '><label className='ml-2'>Last Name</label><input value={lastName} onChange={(e) => setLastName(e.target.value)} required type='text' placeholder='Last Name' className='rounded-full p-2 focus:outline-none  bg-gray-200  text-black pl-4 outfit text-lg border-black border'></input></div>
                </div>
                 <div className='flex flex-col mx-1 mt- w-full lg:my-6 justify-center items-center'><label className='lg:ml-11 p-1 self-start'>Email</label><input value={email} onChange={(e) => setEmail(e.target.value)} required type='email' placeholder='Emai' className='rounded-full lg:w-[86%] p-2 w-full focus:outline-none  bg-gray-200  text-black pl-4 outfit text-lg border-black border'></input></div>
                 <div className='flex flex-col mx-1  w-full items-center justify-center  mb-3 px-1 '><label className='lg:ml-11 p-1 self-start '>Message</label><textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} placeholder='Write Your Message Here' className='rounded-2xl p-2 lg:w-[86%] w-full focus:outline-none bg-gray-200  text-black pl-4 outfit text-lg border-black border'></textarea></div>
                <button type='submit' className=' rounded-full border-white bungee border-2 text-white hover:shadow-[3px_5px_0px_rgba(0,0,0,0.3)] transition-all duration-200 active:shadow-none hover:shadow-olive-300 p-3 w-[86%]  bg-black'>Submit</button>
                </form>
            </div>

        </div>

    </div>
  )
}

export default Contact


// service_en76gh5
// template_ugey1if
// 