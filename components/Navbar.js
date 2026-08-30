

"use client";

import Link from "next/link";
import { Menu, X, User, LogOut } from "lucide-react";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar({ onBookAppointment }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link
            href="/"
            className="flex items-baseline font-serif font-bold text-[#7d1235]"
          >
            <span className="text-5xl md:text-6xl text-[#D4AF37] leading-none">
              P
            </span>

            <span className="text-2xl md:text-3xl leading-none">
              ALAK
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">

            <a
              href="#home"
              className="relative py-2 transition-colors hover:text-[#7d1235]
              after:absolute after:left-0 after:bottom-0 after:h-[2px]
              after:w-0 after:bg-[#7d1235]
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              HOME
            </a>

            <a
              href="#about"
              className="relative py-2 transition-colors hover:text-[#7d1235]
              after:absolute after:left-0 after:bottom-0 after:h-[2px]
              after:w-0 after:bg-[#7d1235]
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              ABOUT
            </a>

            <a
              href="#services"
              className="relative py-2 transition-colors hover:text-[#7d1235]
              after:absolute after:left-0 after:bottom-0 after:h-[2px]
              after:w-0 after:bg-[#7d1235]
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              SERVICES
            </a>

            <a
              href="#gallery"
              className="relative py-2 transition-colors hover:text-[#7d1235]
              after:absolute after:left-0 after:bottom-0 after:h-[2px]
              after:w-0 after:bg-[#7d1235]
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              GALLERY
            </a>

            <a
              href="#offers"
              className="relative py-2 transition-colors hover:text-[#7d1235]
              after:absolute after:left-0 after:bottom-0 after:h-[2px]
              after:w-0 after:bg-[#7d1235]
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              OFFERS
            </a>

            <a
              href="#reviews"
              className="relative py-2 transition-colors hover:text-[#7d1235]
              after:absolute after:left-0 after:bottom-0 after:h-[2px]
              after:w-0 after:bg-[#7d1235]
              after:transition-all after:duration-300
              hover:after:w-full"
            >
              REVIEWS
            </a>

          </div>

        
         <div className="hidden md:flex items-center gap-3">

  {session ? (
    <>
   
      <Link
        href="/my-appointments"
        className="relative flex items-center gap-2 px-4 py-2
        after:absolute after:left-4 after:right-4 after:bottom-0
        after:h-[2px] after:w-0 after:bg-[#7d1235]
        after:transition-all after:duration-300
        hover:after:w-[calc(100%-2rem)]"
      >
        <User size={17} />
        My Appointments
      </Link>

      {/* LOGOUT */}
      <button
        onClick={() =>
          signOut({
            callbackUrl: "/",
          })
        }
        className="relative flex items-center gap-2 px-4 py-2
        after:absolute after:left-4 after:right-4 after:bottom-0
        after:h-[2px] after:w-0 after:bg-[#7d1235]
        after:transition-all after:duration-300
        hover:after:w-[calc(100%-2rem)]"
      >
        <LogOut size={17} />
        Logout
      </button>
    </>
  ) : (
    <>
      {/* LOGIN */}
      <Link
        href="/login"
        className="relative px-4 py-2
        after:absolute after:left-4 after:right-4 after:bottom-0
        after:h-[2px] after:w-0 after:bg-[#7d1235]
        after:transition-all after:duration-300
        hover:after:w-[calc(100%-2rem)]"
      >
        LOGIN
      </Link>

      {/* REGISTER */}
      <Link
        href="/signup"
        className="relative px-4 py-2
        after:absolute after:left-4 after:right-4 after:bottom-0
        after:h-[2px] after:w-0 after:bg-[#7d1235]
        after:transition-all after:duration-300
        hover:after:w-[calc(100%-2rem)]"
      >
        REGISTER
      </Link>
    </>
  )}

  {/* BOOK APPOINTMENT */}
  <button
    onClick={onBookAppointment}
    className="
      bg-[#D4AF37]
      text-white
      px-6
      py-3
      rounded-full
      font-semibold
      hover:bg-[#b8941f]
      transition
    "
  >
    BOOK APPOINTMENT
  </button>

</div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="lg:hidden text-[#7d1235]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 pt-3 space-y-4">

            <a
              href="#home"
              className="block py-2 hover:text-[#7d1235] hover:underline underline-offset-4"
              onClick={() => setMobileOpen(false)}
            >
              HOME
            </a>

            <a
              href="#about"
              className="block py-2 hover:text-[#7d1235] hover:underline underline-offset-4"
              onClick={() => setMobileOpen(false)}
            >
              ABOUT
            </a>

            <a
              href="#services"
              className="block py-2 hover:text-[#7d1235] hover:underline underline-offset-4"
              onClick={() => setMobileOpen(false)}
            >
              SERVICES
            </a>

            <a
              href="#gallery"
              className="block py-2 hover:text-[#7d1235] hover:underline underline-offset-4"
              onClick={() => setMobileOpen(false)}
            >
              GALLERY
            </a>

            <a
              href="#offers"
              className="block py-2 hover:text-[#7d1235] hover:underline underline-offset-4"
              onClick={() => setMobileOpen(false)}
            >
              OFFERS
            </a>

            <a
              href="#reviews"
              className="block py-2 hover:text-[#7d1235] hover:underline underline-offset-4"
              onClick={() => setMobileOpen(false)}
            >
              REVIEWS
            </a>

            {!session && (
              <Link
                href="/login"
                className="block py-2 hover:text-[#7d1235] hover:underline underline-offset-4"
              >
                LOGIN
              </Link>
            )}

            {session && (
              <>
                <Link
                  href="/my-appointments"
                  className="block py-2 hover:text-[#7d1235] hover:underline underline-offset-4"
                >
                  MY APPOINTMENTS
                </Link>

                <button
                  onClick={() => {
                    setMobileOpen(false);
                    signOut({
                      callbackUrl: "/",
                    });
                  }}
                  className="block py-2 hover:text-[#7d1235] hover:underline underline-offset-4"
                >
                  LOGOUT
                </button>
              </>
            )}

            {/* MOBILE BOOK APPOINTMENT */}
            <button
              onClick={() => {
                setMobileOpen(false);
                onBookAppointment();
              }}
              className="
                w-full
                bg-[#D4AF37]
                text-white
                py-3
                rounded-full
                font-semibold
                hover:bg-[#b8941f]
                transition
              "
            >
              BOOK APPOINTMENT
            </button>

          </div>
        )}
      </div>
    </nav>
  );
}

