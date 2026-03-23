import type { Metadata } from "next";
import { Jersey_25 } from "next/font/google";
import "./globals.css";
import { NavBar } from "../components/NavBar";
import { Background } from "@/components/Background";
import { Providers } from "@/components/Providers";

const jersey25 = Jersey_25({
  variable: "--font-jersey-25",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Josue Sandino | jsandinoDev - Fullstack Developer",
  description:
    "Josue Sandino (jsandinoDev) is a Fullstack Developer specializing in web and software development. Explore projects, blog posts, and tutorials.",
  keywords: [
    "Josue Sandino",
    "jsandino",
    "jsandinoDev",
    "Fullstack Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Josue Sandino", url: "https://www.jsandinodev.com" }],
  creator: "Josue Sandino",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Josue Sandino | jsandinoDev - Fullstack Developer",
    description:
      "Discover projects, blog posts, and software engineering insights from Josue Sandino.",
    url: "https://www.jsandinodev.com",
    siteName: "jsandinoDev",
    images: [
      {
        url: "https://www.jsandinodev.com/preview.jpeg",
        width: 1200,
        height: 630,
        alt: "Josue Sandino Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josue Sandino | jsandinoDev - Fullstack Developer",
    description:
      "Discover projects, blog posts, and software engineering insights from Josue Sandino.",
    images: ["https://www.jsandinodev.com/preview.jpg"],
    creator: "@jsandinoDev",
  },
  metadataBase: new URL("https://www.jsandinodev.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jersey25.variable} antialiased`} suppressHydrationWarning>
        <Providers>
          <Background />
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
