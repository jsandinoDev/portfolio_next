import type { Metadata } from "next";
import { Geist, Geist_Mono, Jersey_15  } from "next/font/google";
import "./globals.css";
import { NavBar } from "../components/NavBar";
import { Background } from "@/components/Background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jersey15 = Jersey_15({
    variable: "--font-jersey-15",
    subsets: ["latin"],
    weight: "400", // Specify the weight if required
  });

export const metadata: Metadata = {
  title: "JsandinoDev Portfolio",
  description: "Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jersey15.variable} antialiased`}
      >
        <Background />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
