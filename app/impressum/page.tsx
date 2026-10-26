import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { club, telHref } from "@/lib/data";

export const metadata: Metadata = { alternates: { canonical: "/impressum" }, title: "Impressum", description: "Impressum und Vereinsangaben des BBSV Berlin-Brandenburger Sportverein e. V." };

const h2 = "mt-10 text-2xl font-bold text-navy";
const link = "text-brand hover:underline";

export default function Impressum() {
  return (
    <>
      <PageHero title="Impressum" subtitle="Angaben gemäß § 5 DDG" />
      <section className="mx-auto max-w-3xl space-y-4 px-4 py-16 leading-relaxed text-navy/80">
        <h2 className={`${h2} !mt-0`}>Anbieter</h2>
        <p>
          <strong>{club.name}</strong>
          <br />
          {club.street}
          <br />
          {club.city}
        </p>

        <h2 className={h2}>Vertreten durch den Vorstand</h2>
        <ul className="space-y-1">
          {club.board.map((b) => (
            <li key={b.name}>
              {b.name} ({b.role})
            </li>
          ))}
        </ul>

        <h2 className={h2}>Vereinsregister</h2>
        <p>
          Eingetragen im Vereinsregister
          <br />
          Registergericht: {club.register.court}
          <br />
          Registernummer: {club.register.number}
        </p>

        <h2 className={h2}>Kontakt</h2>
        <p>
          Telefon: <a href={telHref(club.phone)} className={link}>{club.phone}</a>
          <br />
          E-Mail: <a href={`mailto:${club.email}`} className={link}>{club.email}</a>
        </p>

        <h2 className={h2}>Verantwortlich für journalistisch-redaktionelle Inhalte</h2>
        <p>
          Verantwortlich im Sinne des § 18 Abs. 2 MStV:
          <br />
          {club.editorial}
          <br />
          {club.name}, {club.street}, {club.city}
        </p>

        <h2 className={h2}>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach den §§ 8 bis 10 DDG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
          Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>

        <h2 className={h2}>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
          übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten
          ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>

        <h2 className={h2}>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede
          Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
          beachtet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>

        <h2 className={h2}>Bildnachweise</h2>
        <p className="font-semibold">Slider / Trainingsangebote</p>
        <ul className="space-y-1">
          {["ESB Professional", "Andresr", "wavebreakmedia", "Robert Kneschke", "Stasique"].map((n) => (
            <li key={n}>Shutterstock.com/{n}</li>
          ))}
        </ul>

        <h2 className={h2}>Streitbeilegung</h2>
        <p>Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      </section>
    </>
  );
}
