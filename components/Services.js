const services = [
  {
    title: "Bridal Makeup",
    description:
      "Elegant bridal looks designed especially for your special day.",
    image: "/images/bridal.jpg",
  },
  {
    title: "Party Makeup",
    description:
      "Beautiful makeup looks for parties, celebrations and events.",
    image: "/images/party.jpg",
  },
  {
    title: "Hair Styling",
    description:
      "Modern hairstyles for everyday looks and special occasions.",
    image: "/images/hair.jpg",
  },
  {
    title: "Facial & Skin Care",
    description:
      "Relaxing skin treatments for a fresh and glowing appearance.",
    image: "/images/facial.jpg",
  },
  {
    title: "Nail Art",
    description:
      "Creative nail designs for your personal style.",
    image: "/images/nails.jpg",
  },
  {
    title: "Hair Treatment",
    description:
      "spa , smoothing, keratin & more",
    image: "/images/hairt.jpg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.25em] text-[#7d1235] text-sm font-semibold">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mt-3">
            Beauty Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-[#fff8f2] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-serif text-[#7d1235]">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

