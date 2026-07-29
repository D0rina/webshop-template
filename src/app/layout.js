import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Naziv Trgovine",
  description: "Ručno izrađeni proizvodi s ljubavlju.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <body className={`${playfair.variable} ${inter.variable} font-sans bg-stone-50 text-stone-800`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}