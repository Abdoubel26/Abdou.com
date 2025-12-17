function Hero() {
    return ( 
    <div>
        <div className=" bg-[url('/bg.jpg')] bg-cover bg-no-repeat bg-fixed bg-center backdrop-blur-2xl">
            <div className="flex justify-center items-center h-70 flex-col">
                <h1 className="text-5xl text-white font-semibold ">Hello, I'm Abdou</h1>
                <p className=" text-cyan-200 text-lg font-semibold bg-black/40 rounded-lg p-1">I create interesting web applications!</p>
            </div>
        </div> 
    </div>
    );
}

export default Hero;