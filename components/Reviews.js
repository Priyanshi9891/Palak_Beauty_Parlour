const reviews = [
  {
    name: "Priya Sharma",
    text: "Amazing experience. The makeup was elegant and exactly what I wanted.",
  },
  {
    name: "Anjali Verma",
    text: "Very professional service and beautiful salon atmosphere.",
  },
  {
    name: "Neha Singh",
    text: "Loved the hair styling and facial. Would definitely visit again.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.25em] text-[#7d1235] text-sm">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mt-3">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-[#fff8f2] rounded-3xl p-8"
            >
              <div className="text-[#c9a25b] text-xl">
                ★★★★★
              </div>

              <p className="mt-5 text-gray-700 leading-7">
                "{review.text}"
              </p>

              <p className="mt-5 font-semibold text-[#7d1235]">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
