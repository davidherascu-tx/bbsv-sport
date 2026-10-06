export type Slot = { time: string; note?: string };
export type Day = { days: string; slots: Slot[] };

export type Location = {
  region: "Berlin" | "Brandenburg";
  district: string;
  venue: string;
  address: string;
  schedule: Day[];
  trainers: string[];
};

export const karateLocations: Location[] = [
  {
    region: "Berlin",
    district: "Berlin-Pankow",
    venue: "Pankower Sportzentrum",
    address: "Neue Schönholzer Str. 32, 13187 Berlin",
    schedule: [
      { days: "Montag und Mittwoch", slots: [{ time: "16.00 bis 19.00 Uhr" }] },
      {
        days: "Dienstag und Donnerstag",
        slots: [{ time: "15.30 bis 16.30 Uhr", note: "Budokids (4–6 Jahre)" }, { time: "18.00 bis 21.00 Uhr" }],
      },
    ],
    trainers: ["Dirk Leiding", "Pierre Leiding", "Antoine Borot"],
  },
  {
    region: "Berlin",
    district: "Berlin-Buch",
    venue: "Marianne-Buggenhagen-Oberschule",
    address: "Ernst-Busch-Str. 29, 13125 Berlin",
    schedule: [
      { days: "Montag", slots: [{ time: "16.00 bis 18.00 Uhr" }] },
      { days: "Mittwoch", slots: [{ time: "17.00 bis 19.00 Uhr" }] },
    ],
    trainers: ["Michel Homann"],
  },
  {
    region: "Berlin",
    district: "Friedrichshain",
    venue: "Ludwig-Hoffmann-Grundschule",
    address: "Lasdehner Str. 21, 10243 Berlin",
    schedule: [
      {
        days: "Montag und Mittwoch",
        slots: [
          { time: "16.00 bis 17.00 Uhr", note: "Kinder, Anfänger und Weißgurte" },
          { time: "17.00 bis 18.00 Uhr", note: "Kinder ab Gelbgurte" },
          { time: "18.00 bis 19.00 Uhr", note: "Jugendliche und Erwachsene bis 6. Kyu, auch Anfänger" },
          { time: "19.00 bis 20.00 Uhr", note: "Jugendliche und Erwachsene ab Braungurte" },
        ],
      },
    ],
    trainers: ["Jörg Daeblitz"],
  },
  {
    region: "Berlin",
    district: "Niederschönhausen",
    venue: "Grundschule am Hasengrund",
    address: "Sporthalle, Straße 18 Nr. 37 / Ecke Fritz-Reuter-Straße, 13156 Berlin",
    schedule: [
      {
        days: "Dienstag und Donnerstag",
        slots: [
          { time: "17.20 bis 18.10 Uhr", note: "Kinder, Anfänger und Weißgurte" },
          { time: "18.10 bis 19.00 Uhr", note: "Kinder ab Gelbgurte" },
          { time: "19.00 bis 20.00 Uhr", note: "Jugendliche und Erwachsene" },
        ],
      },
    ],
    trainers: ["Antoine Borot"],
  },
  {
    region: "Berlin",
    district: "Berlin-Pankow",
    venue: "Evangelische Grundschule",
    address: "Galenusstr. 60 A, 13187 Berlin",
    schedule: [{ days: "Dienstag", slots: [{ time: "16.30 bis 17.30 Uhr", note: "alle Graduierungen" }] }],
    trainers: ["Jörg Daeblitz"],
  },
  {
    region: "Berlin",
    district: "Weißensee",
    venue: "Pablo-Picasso-Grundschule",
    address: "Gymnastikraum, Smetanastraße 27, 13088 Berlin",
    schedule: [
      {
        days: "Freitag",
        slots: [
          { time: "17.30 bis 18.30 Uhr", note: "Kinder" },
          { time: "18.30 bis 19.30 Uhr", note: "Erwachsene" },
        ],
      },
    ],
    trainers: ["Antoine Borot"],
  },
  {
    region: "Berlin",
    district: "Weißensee",
    venue: "Heinz-Brandt-Schule",
    address: "Langhansstr. 120, 13086 Berlin",
    schedule: [
      {
        days: "Montag",
        slots: [
          { time: "18.00 bis 18.45 Uhr", note: "Kinder" },
          { time: "18.45 bis 19.45 Uhr", note: "Erwachsene" },
        ],
      },
    ],
    trainers: ["Antoine Borot"],
  },
  {
    region: "Berlin",
    district: "Weißensee",
    venue: "Stephanus Schule",
    address: "Albertinenstr. 20, 13186 Berlin",
    schedule: [{ days: "Montag und Freitag", slots: [{ time: "16.00 bis 17.00 Uhr", note: "Kinder" }] }],
    trainers: ["Antoine Borot"],
  },
  {
    region: "Berlin",
    district: "Wilmersdorf",
    venue: "Grundschule am Rüdesheimer Platz",
    address: "Rüdesheimer Str. 24 – 30, 14197 Berlin",
    schedule: [
      {
        days: "Dienstag",
        slots: [
          { time: "17.00 bis 18.00 Uhr", note: "AG/Weiß" },
          { time: "18.00 bis 19.00 Uhr", note: "Gelb/Orange/Grün" },
          { time: "19.00 bis 20.00 Uhr", note: "ab Blau" },
        ],
      },
      {
        days: "Freitag",
        slots: [
          { time: "15.00 bis 16.00 Uhr", note: "AG/Weiß" },
          { time: "16.00 bis 17.00 Uhr", note: "Weiß/Gelb" },
          { time: "17.00 bis 18.00 Uhr", note: "alle Graduierungen + Eltern-Kind Stunde" },
          { time: "18.00 bis 19.00 Uhr", note: "ab Blau" },
        ],
      },
    ],
    trainers: ["Marcel Menz"],
  },
  {
    region: "Brandenburg",
    district: "Hohen Neuendorf",
    venue: "Marie-Curie-Gymnasium",
    address: "Waldstraße 1a, 16540 Hohen Neuendorf",
    schedule: [
      {
        days: "Freitag",
        slots: [
          { time: "16.00 bis 17.00 Uhr", note: "Kinder, Anfänger und Weißgurte bis 9. Kyu" },
          { time: "17.00 bis 18.00 Uhr", note: "Jugend und Fortgeschrittene ab 8. Kyu" },
        ],
      },
    ],
    trainers: ["Stefan Büttner"],
  },
  {
    region: "Brandenburg",
    district: "Schildow",
    venue: "Sporthalle der Europaschule am Fließ",
    address: "Franz-Schmidt-Str. 5, 16552 Schildow",
    schedule: [
      {
        days: "Mittwoch",
        slots: [
          { time: "17.00 bis 18.00 Uhr", note: "Anfänger bis Gelbgurt" },
          { time: "18.00 bis 19.30 Uhr", note: "Mittelstufe und Oberstufe" },
        ],
      },
    ],
    trainers: ["Antoine Borot"],
  },
  {
    region: "Brandenburg",
    district: "Schildow",
    venue: "Neubau Zweifeld-Sporthalle",
    address: "Bahnhofstraße 6, 16552 Schildow",
    schedule: [
      {
        days: "Montag",
        slots: [
          { time: "17.00 bis 18.00 Uhr", note: "Anfänger bis Gelbgurt" },
          { time: "18.00 bis 19.30 Uhr", note: "Mittelstufe und Oberstufe" },
        ],
      },
    ],
    trainers: ["Dirk Leiding"],
  },
  {
    region: "Brandenburg",
    district: "Velten",
    venue: "Löwenzahngrundschule",
    address: "Hermann-Aurel-Ziegler-Str. 20, 16727 Velten",
    schedule: [
      {
        days: "März–Oktober: Dienstag und Donnerstag",
        slots: [
          { time: "16.00 bis 17.00 Uhr", note: "Kinder Anfänger bis 9. Kyu" },
          { time: "17.00 bis 18.00 Uhr", note: "Kinder, Jugend, Fortgeschrittene bis 7. Kyu" },
          { time: "18.00 bis 19.00 Uhr", note: "Jugend, Erwachsene bis 1. Kyu" },
        ],
      },
      { days: "März–Oktober: nur Dienstag", slots: [{ time: "19.00 bis 21.00 Uhr", note: "Erwachsene" }] },
      {
        days: "November–Februar: Dienstag",
        slots: [
          { time: "18.00 bis 19.00 Uhr", note: "Jugend, Erwachsene bis 1. Kyu" },
          { time: "19.00 bis 21.00 Uhr", note: "Erwachsene" },
        ],
      },
      {
        days: "November–Februar: Donnerstag",
        slots: [
          { time: "16.00 bis 17.00 Uhr", note: "Kinder Anfänger bis 9. Kyu" },
          { time: "17.00 bis 18.00 Uhr", note: "Kinder, Jugend, Fortgeschrittene bis 7. Kyu" },
          { time: "18.00 bis 19.00 Uhr", note: "Jugend, Erwachsene bis 1. Kyu" },
        ],
      },
    ],
    trainers: ["Jörg Daeblitz", "Rainer Kliebisch"],
  },
];

export const selbstverteidigungLocations: Location[] = [
  {
    region: "Berlin",
    district: "Berlin-Buch",
    venue: "Marianne-Buggenhagen-Oberschule",
    address: "Ernst-Busch-Str. 29, 13125 Berlin",
    schedule: [{ days: "Montag", slots: [{ time: "18.00 bis 19.30 Uhr" }] }],
    trainers: ["Michel Homann"],
  },
];

const pankowerSportzentrum = {
  region: "Berlin",
  district: "Berlin-Pankow",
  venue: "Pankower Sportzentrum",
  address: "Neue Schönholzer Str. 32, 13187 Berlin",
} as const;

export const sportLocations: Record<string, Location[]> = {
  karate: karateLocations,
  selbstverteidigung: selbstverteidigungLocations,
  koronarsport: [
    { ...pankowerSportzentrum, schedule: [{ days: "Donnerstag", slots: [{ time: "10.00 bis 11.00 Uhr" }] }], trainers: ["Thomas Bethke"] },
  ],
  "multiple-sklerose-sport": [
    { ...pankowerSportzentrum, schedule: [{ days: "Montag", slots: [{ time: "12.00 bis 13.00 Uhr" }] }], trainers: ["Thomas Bethke"] },
  ],
  pilates: [
    {
      ...pankowerSportzentrum,
      schedule: [{ days: "Dienstag", slots: [{ time: "09.00 bis 10.00 Uhr" }, { time: "10.00 bis 11.00 Uhr" }] }],
      trainers: ["Ralph Haas"],
    },
    {
      region: "Berlin",
      district: "Berlin-Tempelhof",
      venue: "Sporthalle Paul-Natorp-Gymnasium",
      address: "Goßlerstr. 13-15, 12161 Berlin",
      schedule: [{ days: "Donnerstag", slots: [{ time: "20.00 bis 21.00 Uhr" }] }],
      trainers: ["Gabriele Gonschior"],
    },
  ],
  seniorensport: [
    {
      ...pankowerSportzentrum,
      schedule: [
        { days: "Montag", slots: [{ time: "11.00 bis 12.00 Uhr" }] },
        { days: "Donnerstag", slots: [{ time: "09.00 bis 10.00 Uhr" }] },
      ],
      trainers: ["Thomas Bethke"],
    },
  ],
  yoga: [
    { ...pankowerSportzentrum, schedule: [{ days: "Montag", slots: [{ time: "19.00 bis 21.00 Uhr" }] }], trainers: ["Yogi Govinda"] },
  ],
  aerobic: [
    {
      region: "Brandenburg",
      district: "Schildow",
      venue: "Sporthalle der Europaschule am Fließ",
      address: "Franz-Schmidt-Str. 5, 16552 Schildow",
      schedule: [
        {
          days: "Dienstag",
          slots: [
            { time: "18.00 bis 19.00 Uhr", note: "wechselnd Aerobic und Step-Aerobic" },
            { time: "19.00 bis 20.00 Uhr", note: "Bauch-Beine-Po" },
          ],
        },
      ],
      trainers: ["Silja Berg"],
    },
  ],
};
