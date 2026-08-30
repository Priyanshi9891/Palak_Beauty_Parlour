import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Palak Beauty Parlour",
  description:
    "Premium beauty, bridal makeup and salon services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}