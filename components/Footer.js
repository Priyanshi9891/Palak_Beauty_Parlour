export default function Footer() {
  return (
    <footer className="bg-[#fff8f2] text-[#7d1235] border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <div className="flex items-baseline font-serif font-bold">
            <span className="text-5xl md:text-6xl text-[#D4AF37] leading-none">
              P
            </span>

            <span className="text-2xl md:text-3xl text-[#7d1235] leading-none">
              ALAK
            </span>
          </div>

          <p className="mt-5 text-[#7d1235]/70 leading-7 max-w-sm">
            Premium beauty experiences designed to
            make you feel confident, elegant and beautiful.
          </p>

          <p className="mt-4 text-sm text-[#D4AF37] font-medium">
            Beauty • Elegance • Confidence
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-serif text-xl text-[#7d1235]">
            Quick Links
          </h3>

          <div className="mt-5 space-y-3">
            <a
              href="#home"
              className="block text-[#7d1235]/70 hover:text-[#7d1235] hover:underline underline-offset-4 transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="block text-[#7d1235]/70 hover:text-[#7d1235] hover:underline underline-offset-4 transition"
            >
              About
            </a>

            <a
              href="#services"
              className="block text-[#7d1235]/70 hover:text-[#7d1235] hover:underline underline-offset-4 transition"
            >
              Services
            </a>

            <a
              href="#gallery"
              className="block text-[#7d1235]/70 hover:text-[#7d1235] hover:underline underline-offset-4 transition"
            >
              Gallery
            </a>

            <a
              href="#offers"
              className="block text-[#7d1235]/70 hover:text-[#7d1235] hover:underline underline-offset-4 transition"
            >
              Offers
            </a>

            <a
              href="#reviews"
              className="block text-[#7d1235]/70 hover:text-[#7d1235] hover:underline underline-offset-4 transition"
            >
              Reviews
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-serif text-xl text-[#7d1235]">
            Contact Us
          </h3>

          <div className="mt-5 space-y-4 text-[#7d1235]/70">

            <p>
             24 Rose Avenue, Lanka,
              <br />
              Varanasi, Uttar Pradesh 221005
            </p>

            <p>
               +91 98765 43210
            </p>

            <p>
               hello@palakbeauty.com
            </p>

            <p>
               Mon - Sun: 10:00 AM - 8:00 PM
            </p>

          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-[#7d1235]/10 py-6 px-6 text-center text-[#7d1235]/50 text-sm">
        © {new Date().getFullYear()} Palak Beauty Parlour.
        All rights reserved.
      </div>
    </footer>
  );
}