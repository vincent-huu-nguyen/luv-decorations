const Hero = () => {
    return (
        <section
            id="home"
            className="h-screen flex items-center justify-center bg-white text-center px-6"
        >
            <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gold font-[cursive]">
                    Elegant Decor for Unforgettable Moments
                </h2>
                <p className="text-lg mb-6 text-gray-700 max-w-xl mx-auto">
                    Specializing in weddings, showers, and custom event styling.
                </p>
                <a
                    href="tel:+11234567890"
                    className="border-2 border-gold text-gold px-6 py-3 rounded-full hover:bg-gold hover:text-white transition font-semibold"
                >
                    Call Now
                </a>
            </div>
        </section>
    );
};

export default Hero;
