import Image from "next/image";
import Reveal from "./Reveal";

const sponsors = [
  { name: "TARGO BANK", logo: "/TARGO-BANK_logo.png", width: 180, height: 80 },
  { name: "Parkett Wehle", logo: "/Parkett_WEHLE_logo.png", width: 180, height: 80 },
  { name: "Grzenkowski", logo: "/GRZENKOWSKI_logo.png", width: 180, height: 80 },
  { name: "AS Fahrschulen Berlin", logo: "/as-fahrschule_logo.jpg", width: 600, height: 147 },
  { name: "Hauptstadt Sport TV", logo: "/hsstv-logo_logo.png", width: 300, height: 76 },
];

export default function Sponsors() {
  return (
    <section aria-labelledby="sponsoren" className="bg-soft">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto mb-10 max-w-xl text-center">
          <div className="mx-auto mb-4 h-1 w-16 bg-brand" />
          <h2 id="sponsoren" className="text-3xl font-bold">Unsere Sponsoren</h2>
          <p className="mt-3 text-navy/70">Wir danken unseren Partnern, die den Vereinssport in Berlin und Brandenburg unterstützen.</p>
        </div>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {sponsors.map((s, i) => (
            <Reveal
              as="li"
              key={s.name}
              delay={i * 90}
              dir="zoom"
              className="flex h-28 items-center justify-center overflow-hidden rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Image src={s.logo} alt={s.name} width={s.width} height={s.height} className="max-h-full w-auto max-w-full object-contain" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
