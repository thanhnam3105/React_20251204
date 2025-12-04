function Header() {
    return ( 
        <div className="p-4 bg-black flex items-center justify-between">

            {/* left content */}
            <div className="flex items-center space-x-4">
                <h1 className="text-[30px] uppercase font-bold text-red-700">
                    Movie
                </h1>
                <nav className="flex items-center space-x-5">
                    <a href="#" className="text-white">Home</a>
                    <a href="#" className="text-white">About</a>
                    <a href="#" className="text-white">Contact</a>
                </nav>
            </div>

            {/* right content */}
            <div className="flex items-center space-x-3">
                <input type="text" placeholder="Search"  className="bg-white p-3 text-black"/>
                <button className="p-2 text-white bg-red-600">Search</button>
            </div>
        </div>
     );
}

export default Header;