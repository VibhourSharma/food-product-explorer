import "./globals.css";

export const metadata = {
  title: "food-explorer",
  description: "A food explorer app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
