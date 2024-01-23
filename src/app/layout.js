import { Inter } from "next/font/google";
import { NavbarSimple } from "./components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Our Story",
  description: "A story about us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarSimple />
        {children}
      </body>
    </html>
  );
}
