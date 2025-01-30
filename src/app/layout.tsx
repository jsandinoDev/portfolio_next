import type { Metadata } from "next";
import { Jersey_15 } from "next/font/google";
import "./globals.css";
import { NavBar } from "../components/NavBar";
import { Background } from "@/components/Background";

const jersey15 = Jersey_15({
  variable: "--font-jersey-15",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "JsandinoDev",
  description: "Fullstack Developer",
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${jersey15.variable} antialiased`}>
        <Background />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
