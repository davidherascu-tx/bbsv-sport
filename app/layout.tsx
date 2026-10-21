import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SiteShell from "@/components/SiteShell";
import Footer from "@/components/Footer";
import { club } from "@/lib/data";

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
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "BBSV Berlin-Brandenburg",
    title: "BBSV – Berlin-Brandenburger Sportverein e. V.",
    description: "Kampfkunst, Gesundheits- und Fitnesssport für Kinder, Jugendliche und Erwachsene in Berlin.",
    images: [{ url: "/BBSV_KeyVisual.png", alt: "BBSV Berlin-Brandenburger Sportverein" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: club.name,
  alternateName: club.short,
  url: "https://www.bbsv-sport.de",
  logo: "https://www.bbsv-sport.de/bbsv_logo.png",
  email: club.email,
  telephone: "+4930" + club.phone.replace(/\D/g, "").slice(3),
  address: { "@type": "PostalAddress", streetAddress: club.street, postalCode: "13187", addressLocality: "Berlin", addressCountry: "DE" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" data-scroll-behavior="smooth" className={`${inter.variable} ${oswald.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SiteShell header={<Header />} footer={<Footer />}>
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
