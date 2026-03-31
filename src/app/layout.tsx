import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aragha Gupta | Full Stack Developer & AI/ML Expert",
  description:
    "Explore the portfolio of Aragha Gupta, a Professional Software Developer specializing in Next.js, AI/ML, and modern web solutions. Built for performance and user experience.",
  keywords: [
    "Aragha Gupta",
    "Full Stack Developer",
    "Next.js Portfolio",
    "AI/ML",
    "Software Engineer",
    "React Developer",
  ],
  authors: [{ name: "Aragha Gupta" }],
  openGraph: {
    title: "Aragha Gupta | Personal Portfolio",
    description:
      "Full Stack Developer & AI/ML Expert — Building the future of the web.",
    url: "https://araghagupta.vercel.app",
    siteName: "Aragha Gupta Portfolio",
    images: [
      {
        url: "/Website-overview.png",
        width: 1200,
        height: 630,
        alt: "Aragha Gupta Portfolio Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aragha Gupta | Full Stack Developer",
    description: "Building modern web applications and AI automations.",
    images: ["/Website-overview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
