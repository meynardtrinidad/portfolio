import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Section } from "@/components/layout/section";
import { Navbar } from "@/components/navbar";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meynard Trinidad",
  description: "Portfolio by Meynard Trinidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased bg-background`}
      >
        <main className="flex flex-col justify-center items-center w-full">
          <Section asChild className="flex-row items-center justify-between">
            <Navbar />
          </Section>
          {children}
        </main>
      </body>
    </html>
  );
}
