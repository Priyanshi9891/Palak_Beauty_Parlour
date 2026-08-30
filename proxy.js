import { withAuth } from "next-auth/middleware";

export default withAuth(
  function proxy(req) {
   
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return token?.role === "admin";
      },
    },
  }
);

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};