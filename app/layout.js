import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ProductProvider } from "@/context/ProductContext";

export const metadata = {
  title: "food Explorer",
  description: "A food exploring website",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <ProductProvider>{children}</ProductProvider>
      </body>
    </html>
  );
}
