

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero({ onBookAppointment }) {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-[#fff8f2]"
    >
     
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Palak Beauty Parlour"
          className="w-full h-full object-cover object-center"
        />
      </div>


      <div
        className="
          relative z-10
          min-h-screen w-full max-w-7xl mx-auto
          flex items-center
          px-5 sm:px-8 md:px-10
          pt-24 pb-12
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="
            w-full max-w-xl
            text-[#7d1235]
            text-center md:text-left
          "
        >
      
          <p
            className="
              uppercase
              tracking-[0.2em] sm:tracking-[0.3em]
              text-xs sm:text-sm
              font-semibold
              mb-4
            "
          >
            Beauty • Elegance • Confidence
          </p>

        
          <h1
            className="
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl
              font-serif
              leading-[1.1]
            "
          >
            Unveil Your
            <br />

           <span className="text-[#D4AF37]">
            Radiance
            </span>
          </h1>

          <p
            className="
              mt-5 sm:mt-6
              text-base sm:text-lg md:text-xl
              text-[#7d1235]
              max-w-lg
              mx-auto md:mx-0
              leading-relaxed
            "
          >
            Premium beauty treatments, bridal makeup,
            hair styling and personalized beauty
            experiences.
          </p>

    
          <div
            className="
              flex flex-col sm:flex-row
              items-center md:items-start
              justify-center md:justify-start
              gap-3 sm:gap-4
              mt-7 sm:mt-8
            "
          >
          
            <button
              onClick={onBookAppointment}
              className="
                w-full sm:w-auto
                bg-[#7d1235]
                text-white
                px-6 sm:px-7
                py-3.5 sm:py-4
                rounded-full
                font-semibold
                flex items-center justify-center gap-2
                hover:bg-[#65102c]
                transition
                shadow-md
              "
            >
              BOOK APPOINTMENT
              <ArrowRight size={18} />
            </button>

          
            <a
              href="#services"
              className="
                w-full sm:w-auto
                border-2 border-[#7d1235]
                text-[#7d1235]
                px-6 sm:px-7
                py-3.5 sm:py-4
                rounded-full
                font-semibold
                flex items-center justify-center
                hover:bg-[#7d1235]
                hover:text-white
                transition
              "
            >
              EXPLORE SERVICES
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

