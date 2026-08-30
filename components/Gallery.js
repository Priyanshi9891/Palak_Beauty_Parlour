

"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/images/gallery/image1.jpg",
  "/images/gallery/image2.jpg",
  "/images/gallery/image3.jpg",
  "/images/gallery/image4.jpg",
  "/images/gallery/image5.jpg",
  "/images/gallery/image6.jpg",
  "/images/gallery/image7.jpg",
  "/images/gallery/image8.jpg",
];

export default function Gallery() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="gallery"
      className="py-20 md:py-24 bg-[#fff8f2]"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <p className="uppercase tracking-[0.25em] text-[#7d1235] text-sm font-semibold">
            Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mt-3 text-[#7d1235]">
            Our Beauty Moments
          </h2>

          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Explore our latest beauty, bridal and styling moments.
          </p>
        </div>

        {/* Gallery Wrapper */}
        <div className="relative">

          {/* Left Button */}
          <button
            type="button"
            onClick={scrollLeft}
            aria-label="Previous images"
            className="
              absolute
              left-2
              md:-left-5
              top-1/2
              -translate-y-1/2
              z-20
              w-10
              h-10
              md:w-12
              md:h-12
              rounded-full
              bg-white
              text-[#7d1235]
              shadow-lg
              flex
              items-center
              justify-center
              hover:bg-[#7d1235]
              hover:text-white
              transition
            "
          >
            <ChevronLeft size={22} />
          </button>

          {/* Images */}
          <div
            ref={sliderRef}
            className="
              flex
              gap-4
              overflow-x-auto
              scroll-smooth
              snap-x
              snap-mandatory
              pb-4
              scrollbar-hide
            "
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {images.map((image, index) => (
              <div
                key={image}
                className="
                  flex-none
                  w-[85%]
                  sm:w-[48%]
                  md:w-[31.5%]
                  lg:w-[23.5%]
                  snap-start
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  shadow-sm
                "
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={image}
                    alt={`Palak Beauty Parlour Gallery ${index + 1}`}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            type="button"
            onClick={scrollRight}
            aria-label="Next images"
            className="
              absolute
              right-2
              md:-right-5
              top-1/2
              -translate-y-1/2
              z-20
              w-10
              h-10
              md:w-12
              md:h-12
              rounded-full
              bg-white
              text-[#7d1235]
              shadow-lg
              flex
              items-center
              justify-center
              hover:bg-[#7d1235]
              hover:text-white
              transition
            "
          >
            <ChevronRight size={22} />
          </button>

        </div>

        {/* Mobile hint */}
        <p className="text-center text-sm text-gray-500 mt-5 md:hidden">
          Swipe to explore more →
        </p>

      </div>
    </section>
  );
}


