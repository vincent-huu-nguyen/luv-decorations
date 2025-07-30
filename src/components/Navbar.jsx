const Navbar = () => {
    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%] bg-white/50 backdrop-blur-xl shadow-2xl rounded-full z-50 transition-all">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-gold font-cursive">LUV Decorations</h1>

                {/* Nav Links */}
                <div className="flex items-center gap-4">
                    <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
                        {/* Nav links only visible on desktop */}
                        <li><a href="#home" className="hover:text-gold">Home</a></li>
                        <li><a href="#about" className="hover:text-gold">About</a></li>
                        <li><a href="#services" className="hover:text-gold">Services</a></li>
                        <li><a href="#gallery" className="hover:text-gold">Gallery</a></li>
                        <li><a href="#contact" className="hover:text-gold">Contact</a></li>
                    </ul>

                    {/* Call Now button visible on all screens */}
                    <a
                        href="tel:+11234567890"
                        className="border-2 border-gold text-gold px-4 py-2 rounded-full hover:bg-gold hover:text-white transition font-semibold text-sm md:text-base"
                    >
                        Call Now
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
