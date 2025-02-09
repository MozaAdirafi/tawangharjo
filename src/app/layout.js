import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from '@/components/Footer';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Desa Tawangharjo",
  description: "Website Desa Tawangharjo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Desa Tawangharjo</title>
        <meta name="description" content="Website Desa Tawangharjo" />
        <link rel="icon" href="/Logo_tawangharjo.ico" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
