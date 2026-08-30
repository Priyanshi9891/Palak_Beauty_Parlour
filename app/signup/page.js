import Link from "next/link";
import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-[#fff8f2] flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 md:p-10">

        {/* Centered PALAK Logo */}
        <Link
          href="/"
          className="w-full flex items-baseline justify-center font-serif font-bold text-[#7d1235]"
        >
          <span className="text-5xl md:text-6xl text-[#D4AF37] leading-none">
            P
          </span>

          <span className="text-2xl md:text-3xl leading-none">
            ALAK
          </span>
        </Link>

        <h1 className="text-3xl font-serif text-center mt-7">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Create an account to book appointments
        </p>

        <SignupForm />
      </div>
    </main>
  );
}