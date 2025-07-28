const Services = () => {
  const services = [
    {
      title: "Weddings",
      description: "Elegant floral arrangements, romantic lighting, and personalized touches for your special day.",
    },
    {
      title: "Baby Showers",
      description: "Soft, themed decor to celebrate new beginnings with warmth and joy.",
    },
    {
      title: "Birthday Parties",
      description: "Custom setups for all ages — from chic adult parties to fun kid-friendly themes.",
    },
    {
      title: "Bridal Showers",
      description: "Stylish decor tailored to honor the bride-to-be in a beautiful, relaxed setting.",
    },
    {
      title: "Corporate Events",
      description: "Professional, polished designs for galas, launches, and business gatherings.",
    },
    {
      title: "Custom Styling",
      description: "Unique event designs based on your vision, colors, and themes — fully personalized.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-semibold text-gold mb-4">Our Services</h2>
      <p className="max-w-2xl mx-auto text-gray-700 mb-10">
        From elegant weddings to intimate baby showers, LUV Decorations brings your event to life with personalized decor and timeless style.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gold rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
