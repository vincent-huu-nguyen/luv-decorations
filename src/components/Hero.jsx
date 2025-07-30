import decorExample from '../assets/decorExample.jpg';

const Hero = () => {
    return (
        <section
            id="home"
            className="h-screen flex items-center justify-center bg-cover bg-center text-center px-6"
            style={{ backgroundImage: `url(${decorExample})` }}
        >
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-xl mx-auto border-4 border-gold">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gold font-[cursive]">
                    Elegant Decor for Unforgettable Moments
                </h2>
                <p className="text-lg mb-6 text-gray-700">
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
