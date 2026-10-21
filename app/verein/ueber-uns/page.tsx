import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Über uns", description: "Der BBSV Berlin-Brandenburger Sportverein e. V. – Vorstand, Verein und Kinderschutz." };

const timeline = [
  { y: "1980", t: "Gründung des Karatevereins Shotokan Karate Do Berlin Pankow e. V." },
  { y: "1989", t: "Gründung des Vereins Budokai e. V." },
  { y: "1993", t: "Zusammenschluss beider Vereine zum Shotokan Ryu Berlin e. V." },
  { y: "2000", t: "Sanierung und Übernahme einer Sporthalle in Pankow – das Pankower Sportzentrum entsteht, der Verein wird Mehrspartenverein." },
];

export default function UeberUns() {
  return (
    <>
      <PageHero title="Über uns" subtitle="Der Berlin-Brandenburger Sportverein e. V." />
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-5 text-lg leading-relaxed text-navy/80">
          <p>
            Der Berlin-Brandenburger Sportverein e. V. (BBSV) ist aus dem 1980 gegründeten Karateverein Shotokan Karate Do Berlin Pankow e. V. und dem 1989
            gegründeten Verein Budokai e. V. hervorgegangen. Beide Vereine haben sich 1993 zum Shotokan Ryu Berlin e. V. zusammengeschlossen, der sich zu einem
            der erfolgreichsten Karatevereine Berlins entwickelt hat.
          </p>
          <p>
            Als wir als Verein im Jahr 2000 die Möglichkeit erhielten, mit Unterstützung des Senats von Berlin eine in einem sehr schlechten Zustand befindliche
            Sporthalle in Pankow zu sanieren und für die Eigennutzung zu übernehmen, wurde nicht lange überlegt. Es entstand mit großem Engagement und
            Bereitschaft zur umfangreichen Eigenleistung unsere Trainingsstätte im Zentrum von Pankow. Mit Eröffnung dieses Pankower Sportzentrums wurde der
            Verein zu einem Mehrspartenverein erweitert. Durch ihn werden seit vielen Jahren Trainingsgruppen in Berlin und Umland betreut. Ganz nach eigenem
            Interesse kann hier ein sportlicher Ausgleich zum Alltag erlangt werden.
          </p>
          <p>
            Unser Training wird durch lizensierte Trainer durchgeführt. Besonderen Wert bei unseren Sportangeboten legen wir auf gesundheitsfördernde Aspekte des
            Trainings.
          </p>
          <p>
            Allen Vereinsmitgliedern stehen außer dem Training auch andere Freizeitangebote zur Verfügung. Mit Trainings- und Kinderferienlagern im In- und
            Ausland, Radtouren, Vereinsfeiern und weiteren Angeboten, bieten wir ein breites Vereinsleben.
          </p>
        </div>

        <h2 className="mt-16 text-3xl font-bold">Unsere Geschichte</h2>
        <ol className="mt-8 space-y-6 border-l-2 border-brand/30 pl-6">
          {timeline.map((e) => (
            <li key={e.y} className="relative">
              <span className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full bg-brand ring-4 ring-white" aria-hidden />
              <p className="font-display text-2xl font-bold text-brand">{e.y}</p>
              <p className="text-navy/80">{e.t}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
