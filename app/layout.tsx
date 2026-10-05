import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "BBSV – Berlin-Brandenburger Sportverein e. V.",
    template: "%s | BBSV Berlin-Brandenburg",
  },
  description:
    "Der Berlin-Brandenburger Sportverein e. V. – Sport für alle Generationen: Fußball, Handball, Volleyball, Leichtathletik, Schwimmen und Fitness.",
  metadataBase: new URL("https://www.bbsv-sport.de"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} ${oswald.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
