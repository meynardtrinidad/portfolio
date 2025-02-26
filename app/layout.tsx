import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Section } from "@/components/layout/section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
        <main className="flex flex-col items-center w-full h-full min-h-screen">
          <Section asChild className="flex-row items-center justify-between">
            <Navbar />
          </Section>
          {children}
          <Section asChild className="mt-auto flex-row items-center justify-between">
            <Footer />
          </Section>
        </main>
      </body>
    </html>
  );
}
