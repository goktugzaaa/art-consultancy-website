import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Playfair_Display } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Footer from "@components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: "SZ Art Services",
  description: "Sanat danışmanlığı sitesi",
};

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.locale} className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Sanat danışmanlığı sitesi" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="stylesheet" href="https://use.typekit.net/vdr7svs.css" />
        </head>
      <body>
   
          <Navbar />
          {children}
          <Footer />
        
      </body>
    </html>
  );
}

