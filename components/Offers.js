const offers = [
  {
    title: "Bridal Package",
    oldPrice: "₹25,999",
    price: "₹18,999",
    text: "Complete bridal beauty experience.",
  },
  {
    title: "Party Ready",
    oldPrice: "₹6,999",
    price: "₹3,999",
    text: "Makeup + hair styling package.",
  },
  {
    title: "New Client Offer",
    oldPrice: "₹4,999",
    price: "₹2,999",
    text: "Special welcome package.",
  },
];

export default function Offers() {
  return (
    <section
      id="offers"
      className="py-24 bg-[#7d1235] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.25em] text-[#f1c98c] text-sm">
            Special Offers
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mt-3">
            Pamper Yourself
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className="bg-white text-gray-900 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-serif text-[#7d1235]">
                {offer.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {offer.text}
              </p>

              <div className="mt-6">
                <span className="line-through text-gray-400 mr-3">
                  {offer.oldPrice}
                </span>

                <span className="text-2xl font-bold text-[#7d1235]">
                  {offer.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}