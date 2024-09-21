import Navbar from "@/components/Navbar";
import "./globals.css";
import { ProductProvider } from "@/context/ProductContext";

export const metadata = {
  title: "food Explorer",
  description: "A food exploring website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProductProvider>
          <Navbar />
          {children}
        </ProductProvider>
      </body>
    </html>
  );
}
