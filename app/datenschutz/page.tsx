import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { childProtection, club, telHref } from "@/lib/data";

export const metadata: Metadata = { title: "Datenschutz" };

const h2 = "mt-10 text-2xl font-bold text-navy";
const h3 = "mt-6 text-lg font-bold text-navy";
const link = "text-brand hover:underline";

export default function Datenschutz() {
  return (
    <>
      <PageHero title="Datenschutzerklärung" subtitle="Informationen nach Art. 13 DSGVO" />
      <section className="mx-auto max-w-3xl space-y-4 px-4 py-16 leading-relaxed text-navy/80">
        <p>
          Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie darüber, welche Daten beim Besuch dieser Website und bei der Kontaktaufnahme mit
          uns verarbeitet werden und welche Rechte Ihnen zustehen.
        </p>

        <h2 className={h2}>1. Verantwortlicher</h2>
        <p>
          <strong>{club.name}</strong>
          <br />
          {club.street}, {club.city}
          <br />
          Telefon: <a href={telHref(club.phone)} className={link}>{club.phone}</a>
          <br />
          E-Mail: <a href={`mailto:${club.email}`} className={link}>{club.email}</a>
        </p>
        <p>Vertreten durch den Vorstand: {club.board.map((b) => `${b.name} (${b.role})`).join(", ")}.</p>

        <h2 className={h2}>2. Besuch der Website</h2>
        <h3 className={h3}>Server-Logfiles</h3>
        <p>
          Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch Informationen erfasst und in sogenannten Server-Logfiles gespeichert. Das sind: IP-Adresse, Datum
          und Uhrzeit der Anfrage, abgerufene Seite bzw. Datei, übertragene Datenmenge, Referrer-URL sowie Browsertyp und Betriebssystem. Die Verarbeitung dient dem sicheren und
          stabilen Betrieb der Website (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO, berechtigtes Interesse). Die Daten werden nach kurzer Zeit gelöscht, sofern sie nicht zur
          Aufklärung eines Missbrauchs länger benötigt werden. Eine Zusammenführung mit anderen Daten findet nicht statt.
        </p>
        <h3 className={h3}>Cookies und Tracking</h3>
        <p>
          Diese Website verwendet keine Cookies zu Analyse-, Tracking- oder Werbezwecken und setzt keine Analyse- oder Marketing-Dienste ein. Daher ist kein Cookie-Banner
          erforderlich.
        </p>
        <h3 className={h3}>Schriftarten</h3>
        <p>
          Die verwendeten Schriftarten werden beim Bau der Website lokal eingebunden und von unserem eigenen Server ausgeliefert. Es findet keine Verbindung zu Servern von Google
          oder anderen Anbietern statt.
        </p>
        <h3 className={h3}>SSL-/TLS-Verschlüsselung</h3>
        <p>Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Sie erkennen eine verschlüsselte Verbindung an „https://“ in der Adresszeile Ihres Browsers.</p>

        <h2 className={h2}>3. Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name, E-Mail-Adresse, Nachricht), um
          Ihre Anfrage zu beantworten (Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO bei Vertragsbezug, im Übrigen Art. 6 Abs. 1 lit. f DSGVO). Die Daten werden gelöscht, sobald die Anfrage abschließend
          bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>

        <h2 className={h2}>4. Mitgliedschaft und Probetraining</h2>
        <p>
          Zur Durchführung der Mitgliedschaft und des Trainingsbetriebs verarbeiten wir die Daten, die Sie uns im Aufnahmeantrag oder bei der Anmeldung zum Probetraining mitteilen
          (z. B. Name, Anschrift, Geburtsdatum, Kontaktdaten, Bankverbindung, ggf. Graduierung). Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Mitgliedschaftsverhältnis) sowie,
          soweit gesetzlich erforderlich, Art. 6 Abs. 1 lit. c DSGVO. Die Daten werden nur an Stellen weitergegeben, die für den Vereinsbetrieb erforderlich sind (z. B.
          Sportverbände für Startberechtigungen und Versicherungen, Kreditinstitut für den Beitragseinzug). Wir speichern sie für die Dauer der Mitgliedschaft und anschließend nur
          so lange, wie gesetzliche Aufbewahrungsfristen es verlangen.
        </p>
        <p>Bei Kindern und Jugendlichen erfolgt die Verarbeitung auf Grundlage des Antrags bzw. der Einwilligung der Erziehungsberechtigten.</p>

        <h2 className={h2}>5. Fotos und Videos</h2>
        <p>
          Fotos und Videos von Personen veröffentlichen wir nur, wenn eine Einwilligung vorliegt (Art. 6 Abs. 1 lit. a DSGVO, § 22 KUG). Eine erteilte Einwilligung können Sie
          jederzeit mit Wirkung für die Zukunft widerrufen.
        </p>

        <h2 className={h2}>6. Externe Links</h2>
        <p>
          Diese Website enthält Links zu externen Websites. Beim Anklicken eines Links gelten die Datenschutzbestimmungen des jeweiligen Betreibers; auf diese haben wir keinen
          Einfluss.
        </p>

        <h2 className={h2}>7. Ihre Rechte</h2>
        <p>Sie haben uns gegenüber folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Auskunft (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO), insbesondere bei Verarbeitung auf Grundlage berechtigter Interessen</li>
          <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
        <p>
          Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an <a href={`mailto:${club.email}`} className={link}>{club.email}</a>. Zum Kinderschutz erreichen Sie {childProtection.name} unter{" "}
          <a href={`mailto:${childProtection.email}`} className={link}>{childProtection.email}</a>.
        </p>

        <h2 className={h2}>8. Beschwerderecht bei der Aufsichtsbehörde</h2>
        <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist für uns:</p>
        <p>
          Berliner Beauftragte für Datenschutz und Informationsfreiheit
          <br />
          Alt-Moabit 59–61, 10555 Berlin
          <br />
          <a href="https://www.datenschutz-berlin.de" target="_blank" rel="noopener noreferrer" className={link}>www.datenschutz-berlin.de</a>
        </p>

        <h2 className={h2}>9. Aktualität</h2>
        <p>Diese Datenschutzerklärung hat den Stand Oktober 2026. Wir passen sie an, wenn sich unsere Angebote oder die Rechtslage ändern.</p>
      </section>
    </>
  );
}
