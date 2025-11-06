import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Geometry Master Quest - Math Learning Game",
  description: "Interactive geometry and spatial reasoning game for 5th graders. Master shapes, angles, and mathematical concepts through engaging gameplay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} font-fredoka antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
