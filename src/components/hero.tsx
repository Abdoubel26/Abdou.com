
function Hero() {
    return ( 
    <div>
        <div className=" bg-[url('/bg.jpg')] pt-6 h-70  bg-cover bg-no-repeat  bg-center animate-dropFade  ">
            <div className="flex justify-center items-center h-80   flex-col backdrop-blur-xs lg:backdrop-blur-sm">
                <h1 className="text-5xl text-white font-semibold lg:text-7xl  ">Hello, I'm Abdou </h1>
                <p className=" outlined-text text-white text-lg lg:text-xl font-semibold pt-2">I Create Web Applications!</p>
            </div>
        </div> 
    </div>
    );
}

export default Hero;