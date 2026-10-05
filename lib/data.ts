// Aktuelles und Termine sind noch Platzhalter. Eine Postadresse fehlt noch.
export const club = {
  name: "Berlin-Brandenburger Sportverein e. V.",
  short: "BBSV",
  domain: "www.bbsv-sport.de",
  phone: "030 / 48 63 81 61",
  phoneNote: "Mittwoch 9–10 Uhr",
  fax: "030 / 48 63 81 62",
  email: "info@bbsv-sport.de",
  emailBoard: "vorstand@bbsv-sport.de",
};

export const telHref = (n: string) => `tel:${n.replace(/[^+\d]/g, "")}`;

export const childProtection = {
  name: "Eric Heiland",
  email: "Kinderschutz@bbsv-sport.de",
};

export const contactGroups = [
  { title: "Kampfkunst", people: [], email: "info@bbsv-sport.de" },
  { title: "Fitness", people: [], email: "info@bbsv-sport.de" },
  {
    title: "Gesundheit",
    people: [{ name: "Thomas Bethke", topics: "Multiple Sklerose Sport, Koronarsport, Seniorensport", phone: "0152 / 59643203" }],
    email: "info@bbsv-sport.de",
  },
];

export type Sport = {
  slug: string;
  name: string;
  text: string;
};

export type Category = {
  slug: string;
  name: string;
  emoji: string;
  text: string;
  sports: Sport[];
};

export const categories: Category[] = [
  {
    slug: "kampfkunst",
    name: "Kampfkunst",
    emoji: "🥋",
    text: "Karate, Kobudo und Selbstverteidigung – Körper und Geist in Form.",
    sports: [
      {
        slug: "karate",
        name: "Karate",
        text: "Lerne eine alte japanische Kampfkunst kennen, die Körper und Geist fit hält. Karate ist ein vielseitiges Ganzkörpertraining und kann problemlos von jedem – egal wie alt oder sportlich – betrieben werden. Dabei unterstützen Dich erfahrene lizensierte Trainer.",
      },
      {
        slug: "selbstverteidigung",
        name: "Selbstverteidigung",
        text: "Lerne richtiges Verhalten, um einen Angriff zu vermeiden bzw. effektiv abzuwehren. Die Bewegungsabläufe sind auch ohne jahrelanges Training einfach und schnell zu erlernen. Die eingesetzten Techniken sind ohne große Kraft wirkungsvoll einsetzbar und sind für Frauen und Männer gleichermaßen geeignet.",
      },
    ],
  },
  {
    slug: "gesundheit",
    name: "Gesundheit",
    emoji: "❤️",
    text: "Gesundheitsfördernde Angebote für Prävention, Rehabilitation und Wohlbefinden.",
    sports: [
      {
        slug: "koronarsport",
        name: "Koronarsport",
        text: "Ziel dieses Sportangebotes ist es, unter ärztlicher Betreuung, angepasst an die individuelle Belastbarkeit jedes Einzelnen, die motorischen Grundeigenschaften wie Ausdauer, Koordination und Beweglichkeit zu trainieren. Damit soll den Teilnehmern ermöglicht werden, trotz ihres Krankheitsbildes den Anforderungen des Alltages zu entsprechen.",
      },
      {
        slug: "multiple-sklerose-sport",
        name: "Multiple Sklerose Sport",
        text: "Unsere zertifizierten Trainer leben selbst seit über 10 Jahren mit der Diagnose MS. Wir bieten selbstständig gehfähigen Betroffenen ein individuell angepasstes Training in kleinen Gruppen. Durch zahlreiche Studien ist inzwischen bewiesen, dass Bewegung und Sport gerade bei dieser Patientengruppe vielfältige positive Wirkungen auf die Lebensqualität hat und das Selbstbewusstsein stärkt.",
      },
      {
        slug: "pilates",
        name: "Pilates",
        text: "Pilates ist eine ganzheitliche Trainingsmethode, bei der die Kräftigung der Tiefenmuskulatur im Mittelpunkt steht. Das sanfte Körpertraining fördert Kraft und Beweglichkeit und ist dabei gleichzeitig entspannend.",
      },
      {
        slug: "seniorensport",
        name: "Seniorensport",
        text: "Es ist nie zu spät, mit dem Sport zu beginnen, und selten zu früh. Vielleicht fühlen Sie sich zu alt für eine sportliche Herausforderung. Oder erste Gesundheitsprobleme machen Ihnen zu schaffen. Und es macht Sie natürlich nicht jünger, Sport zu treiben. Dennoch trägt sportliche Aktivität auch mit zunehmendem Alter entscheidend dazu bei, Ihre Gesundheit zu erhalten und sogar zu verbessern. Im Berlin-Brandenburger Sportverein werden Sie von ausgebildeten Gesundheitssporttrainern angeleitet und betreut.",
      },
      {
        slug: "yoga",
        name: "Yoga",
        text: "Yoga stärkt Körper und Geist, mit mehr Kraft, Beweglichkeit und Balance. Baut Stress ab, verbessert Konzentration und schenkt innere Ruhe. Ideal für alle, die Fitness, Entspannung und Achtsamkeit verbinden möchten.",
      },
    ],
  },
  {
    slug: "fitness",
    name: "Fitness",
    emoji: "💪",
    text: "Ausdauer, Koordination und Belastbarkeit – für mehr Lebensqualität im Alltag.",
    sports: [
      {
        slug: "aerobic",
        name: "Aerobic / Step-Aerobic / Bauch-Beine-Po",
        text: "Unsere Angebote fördern Deine Ausdauer, Koordination und Belastbarkeit. Du steigerst Deine Leistungsfähigkeit, bist den Anforderungen des Alltags besser gewachsen und erhöhst damit Deine Lebensqualität.",
      },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getSport(cat: string, slug: string) {
  return getCategory(cat)?.sports.find((s) => s.slug === slug);
}

export type NavLink = { label: string; href: string; children?: NavLink[] };
export type NavItem = NavLink;

export const nav: NavItem[] = [
  {
    label: "Der Verein",
    href: "/verein/ueber-uns",
    children: [
      { label: "Über uns", href: "/verein/ueber-uns" },
      { label: "Trainer", href: "/verein/trainer" },
      { label: "Trainingsangebote", href: "/verein/trainingsangebote" },
      { label: "Mitgliedschaft", href: "/verein/mitgliedschaft" },
    ],
  },
  { label: "Aktuelles", href: "/aktuelles" },
  {
    label: "Sportangebote",
    href: "/sportangebote",
    children: categories.map((c) => ({
      label: c.name,
      href: `/sportangebote/${c.slug}`,
      children: c.sports.map((s) => ({ label: s.name, href: `/sportangebote/${c.slug}/${s.slug}` })),
    })),
  },
  { label: "Kontakt", href: "/kontakt" },
];

export type Trainer = {
  name: string;
  role?: string; // Vorstandsfunktion
  photo: string; // Datei in /public
  offers: string; // Anzeige, z. B. "Karate, Selbstverteidigung"
  sports: string[]; // Slugs der Sportangebote
};

export const trainerGroups: { category: string; trainers: Trainer[] }[] = [
  {
    category: "Kampfkunst",
    trainers: [
      { name: "Klaus Berg", photo: "/klaus_berg.jpg", offers: "Karate, Selbstverteidigung", sports: ["karate", "selbstverteidigung"] },
      { name: "Pierre Leiding", photo: "/pierre_leiding.jpg", role: "Stellv. Vorsitzender", offers: "Karate", sports: ["karate"] },
      { name: "Dirk Leiding", photo: "/dirk_leiding.jpg", role: "Kassenwart", offers: "Karate", sports: ["karate"] },
      { name: "Jörg Daeblitz", photo: "/joerg_daeblitz.jpg", offers: "Karate", sports: ["karate"] },
      { name: "Rainer Kliebisch", photo: "/rainer_kliebisch.jpg", offers: "Karate", sports: ["karate"] },
      { name: "Michel Homann", photo: "/michel_homann.jpg", offers: "Karate, Selbstverteidigung", sports: ["karate", "selbstverteidigung"] },
      { name: "Antoine Borot", photo: "/antoine_borot.jpg", offers: "Karate", sports: ["karate"] },
      { name: "Stefan Büttner", photo: "/stefan_buettner.jpg", offers: "Karate", sports: ["karate"] },
    ],
  },
  {
    category: "Fitness",
    trainers: [{ name: "Silja Berg", photo: "/silja_berg.jpg", offers: "Aerobic, Step-Aerobic, Bauch-Beine-Po", sports: ["aerobic"] }],
  },
  {
    category: "Gesundheit",
    trainers: [
      { name: "Thomas Bethke", photo: "/thomas_bethke.jpg", offers: "Multiple Sklerose Sport, Koronarsport, Seniorensport", sports: ["multiple-sklerose-sport", "koronarsport", "seniorensport"] },
      { name: "Ralph Haas", photo: "/ralph_haas.jpg", offers: "Pilates", sports: ["pilates"] },
      { name: "Yogi Govinda", photo: "/yogi_govinda.jpg", offers: "Yoga", sports: ["yoga"] },
    ],
  },
];

export function trainersFor(sportSlug: string) {
  return trainerGroups.flatMap((g) => g.trainers).filter((t) => t.sports.includes(sportSlug));
}

export const news = [
  { date: "2026-10-01", title: "Beispiel-Meldung", text: "Platzhalter für eine Neuigkeit aus dem Verein." },
  { date: "2026-09-15", title: "Beispiel-Meldung", text: "Platzhalter für eine weitere Neuigkeit aus dem Verein." },
];

export const events = [
  { date: "2026-11-07", title: "Beispiel-Termin", ort: "Ort folgt", kat: "Verein" },
  { date: "2026-12-12", title: "Beispiel-Termin", ort: "Ort folgt", kat: "Verein" },
];

// PDFs bitte nach public/downloads/ legen.
export const downloads = [
  { label: "BBSV Satzung", href: "/downloads/bbsv-satzung.pdf" },
  { label: "Beitrags- und Gebührenordnung", href: "/downloads/beitrags-und-gebuehrenordnung.pdf" },
  { label: "Aufnahmeantrag", href: "/downloads/aufnahmeantrag.pdf" },
];

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(iso));
}

export function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}
