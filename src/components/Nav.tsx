


function Nav() {
    return ( 
    <>
    <div className="flex flex-row lg:justify-between justify-center items-center border-b border-b-gray-500 bg-gray-900 lg:text-xl fixed left-0 top-0 w-screen min-w-screen z-10">
        <div className=" hidden lg:flex ">
            <h1 className="p-3 pl-2 font-extrabold cursor-default text-white poppins">ABDOU</h1>
        </div>
        
        <div className="flex flex-row lg:justify-end lg:gap-20 justify-around w-full my-2 items-center outfit">
        <nav className="lg:px-3 px-1 text-md lg:text-2xl font-bold text-white uppercase cursor-pointer">Projects</nav>
        <nav className="lg:px-3 px-1 text-md lg:text-2xl font-bold text-white uppercase cursor-pointer">Skills</nav>
        <nav className="lg:px-3 px-1 text-md lg:text-2xl font-bold text-white uppercase cursor-pointer">About</nav>
        <nav className="lg:px-3 px-1 text-md lg:text-2xl font-bold text-white uppercase cursor-pointer">Contact</nav>  
        </div>
        
    </div>
    </>
     );
}

export default Nav;