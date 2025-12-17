function Nav() {
    return ( 
    <>
    <div className="flex flex-row justify-between bg-white lg:text-xl ">
        <div>
            <h1 className="p-3 pl-1 font-semibold cursor-default">ABDOU</h1>
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