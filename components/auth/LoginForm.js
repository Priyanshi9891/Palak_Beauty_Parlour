// "use client";

// import { useState } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";

// export default function LoginForm() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] =
//     useState("");

//   const [loading, setLoading] =
//     useState(false);

//   const [error, setError] =
//     useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setError("");
//     setLoading(true);

//     try {
//       const result = await signIn(
//         "credentials",
//         {
//           email,
//           password,
//           redirect: false,
//         }
//       );

//       if (result?.error) {
//         setError("Invalid email or password");
//         return;
//       }

//       router.push("/");
//       router.refresh();
//     } catch (error) {
//       console.error(error);
//       setError("Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="space-y-5"
//     >
//       <div>
//         <label className="block text-sm font-semibold mb-2">
//           Email
//         </label>

//         <input
//           type="email"
//           required
//           value={email}
//           onChange={(e) =>
//             setEmail(e.target.value)
//           }
//           placeholder="you@example.com"
//           className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#7d1235]"
//         />
//       </div>

//       <div>
//         <label className="block text-sm font-semibold mb-2">
//           Password
//         </label>

//         <input
//           type="password"
//           required
//           value={password}
//           onChange={(e) =>
//             setPassword(e.target.value)
//           }
//           placeholder="••••••••"
//           className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#7d1235]"
//         />
//       </div>

//       {error && (
//         <p className="text-red-600 text-sm">
//           {error}
//         </p>
//       )}

//       <button
//         disabled={loading}
//         className="w-full bg-[#7d1235] text-white py-3.5 rounded-full font-semibold disabled:opacity-50"
//       >
//         {loading ? "LOGGING IN..." : "LOGIN"}
//       </button>

//       <p className="text-center text-gray-600 text-sm">
//         Don't have an account?{" "}
//         <Link
//           href="/signup"
//           className="text-[#7d1235] font-semibold"
//         >
//           Sign Up
//         </Link>
//       </p>
//     </form>
//   );
// }

"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
        setLoading(false);
        return;
      }

      // Get logged-in user's session
      const response = await fetch("/api/auth/session");
      const session = await response.json();

      // Check role
      if (session?.user?.role === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/");
      }

      router.refresh();
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold mb-2">
          Email
        </label>

        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#7d1235] focus:ring-1 focus:ring-[#7d1235]"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-semibold mb-2">
          Password
        </label>

        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#7d1235] focus:ring-1 focus:ring-[#7d1235]"
        />
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl p-3">
          {error}
        </div>
      )}

      {/* Login button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#7d1235] text-white py-3.5 rounded-full font-semibold hover:bg-[#65102c] transition disabled:opacity-50"
      >
        {loading ? "LOGGING IN..." : "LOGIN"}
      </button>
    </form>
  );
}