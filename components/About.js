export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[#fff8f2]"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase tracking-[0.25em] text-[#7d1235] text-sm font-semibold">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mt-4">
            Beauty That Makes
            <span className="text-[#7d1235]">
              {" "}You Shine
            </span>
          </h2>

          <p className="mt-6 text-gray-700 leading-8">
            At Palak Beauty Parlour, we believe beauty is
            personal. Our team provides carefully designed
            beauty experiences for everyday elegance,
            celebrations and your most special moments.
          </p>

          <p className="mt-4 text-gray-700 leading-8">
            From bridal makeup to hair styling and skin
            care, every service is delivered with care,
            attention and professionalism.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden">
          <img
            src="/images/about.jpg"
            alt="Beauty salon"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
