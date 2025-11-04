import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NameCursor from "@/components/NameCursor";

export const metadata = {
  title: "Zainab | Portfolio",
  description: "My Portfolio",
  icons: {
    icon: "zlogo.ico", // yahaan tumhara Z icon
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <NameCursor/>
        {children}
      </body>
    </html>
  );
}
