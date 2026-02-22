import type { Metadata } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/custom-cursor";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ryanm - Software Engineer",
  description: "Portfolio of ryan malawa - Frontend, Backend, Devops",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth cursor-none lg:cursor-none">
      <body
        className={`${spaceGrotesk.variable} ${playfairDisplay.variable} font-sans antialiased selection:bg-neutral-800`}
      >
        <CustomCursor />
        <div className="max-w-4xl mx-auto px-4 pb-12 md:pb-20 min-h-screen">
          <div className="border-x border-b border-dashed border-neutral-700/60 h-full p-4 md:p-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
