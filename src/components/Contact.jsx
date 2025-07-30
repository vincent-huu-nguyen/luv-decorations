import marbleExample from '../assets/marbleExample.jpg';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 bg-cover text-center"
            style={{ backgroundImage: `url(${marbleExample})` }}>
            <h2 className="text-4xl font-semibold text-gold font-[cursive] mb-4">Let’s Make Your Vision a Reality</h2>
            <p className="text-gray-700 mb-6">We’re just one call away from transforming your next event.</p>
            <a
                href="tel:+11234567890"
                className="border-2 border-gold text-gold px-6 py-3 rounded-full hover:bg-gold hover:text-white transition font-semibold"
            >
                Call Now
            </a>
        </section>

    );
};

export default Contact;