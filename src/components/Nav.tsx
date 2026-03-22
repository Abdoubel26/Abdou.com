function Nav() {
    return ( 
    <>
    <div className="flex flex-row lg:justify-between justify-center items-center border-b border-b-gray-500 bg-white lg:text-xl fixed left-0 top-0 w-screen min-w-screen z-10">
        <div className=" hidden lg:flex ">
            <h1 className="p-3 pl-2 font-semibold cursor-default poppins">ABDOU</h1>
        </div>
        
        <div className="flex flex-row lg:justify-end justify-between w-full my-2 items-center">
        <nav className=" lg:px-3 px-1 text-md lg:text-2xl font-medium lg:font-normal text-gray-900 uppercase cursor-pointer">Projects</nav>
        <nav className=" lg:px-3 px-1 text-md lg:text-2xl font-medium lg:font-normal text-gray-900 uppercase cursor-pointer">Skills</nav>
        <nav className=" lg:px-3 px-1 text-md lg:text-2xl font-medium lg:font-normal text-gray-900 uppercase cursor-pointer">About</nav>
        <nav className=" lg:px-3 px-1 text-md lg:text-2xl font-medium lg:font-normal text-gray-900 uppercase cursor-pointer">Contact</nav>  
        </div>
        
    </div>
    </>
     );
}

export default Nav;