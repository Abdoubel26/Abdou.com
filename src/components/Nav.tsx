function Nav() {
    return ( 
    <>
    <div className="flex flex-row justify-between bg-white lg:text-xl fixed left-0 top-0 w-full z-10">
        <div>
            <h1 className="p-3 pl-2 font-semibold cursor-default">ABDOU</h1>
        </div>
        
        <div className="flex flex-row justify-between p-3">
        <nav className=" px-3 uppercase cursor-pointer">Projects</nav>
        <nav className=" px-3 uppercase cursor-pointer">Skills</nav>
        <nav className=" px-3 uppercase cursor-pointer">About</nav>
        <nav className=" px-3 uppercase cursor-pointer">Contact</nav>  
        </div>
        
    </div>
    </>
     );
}

export default Nav;