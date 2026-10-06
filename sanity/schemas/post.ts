import { defineArrayMember, defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Meldung",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Überschrift", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Adresse (URL)",
      type: "slug",
      description: "Wird aus der Überschrift erzeugt – auf „Generate“ klicken.",
      options: { source: "title", maxLength: 80 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "date", title: "Datum", type: "date", options: { dateFormat: "DD.MM.YYYY" }, initialValue: () => new Date().toISOString().slice(0, 10), validation: (r) => r.required() }),
    defineField({
      name: "image",
      title: "Titelbild",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Bildbeschreibung (für Screenreader)", type: "string" })],
    }),
    defineField({ name: "text", title: "Text", type: "text", rows: 10, validation: (r) => r.required() }),
    defineField({
      name: "moreImages",
      title: "Weitere Bilder (unter dem Text)",
      description: "Einfache Bilder ohne Titel. Sie erscheinen direkt unter dem Text in voller Breite, ohne Vergrößerung.",
      type: "array",
      of: [defineArrayMember({ type: "image", options: { hotspot: true } })],
      options: { layout: "grid" },
    }),
    defineField({
      name: "files",
      title: "Downloads (PDF oder andere Dateien)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "download",
          title: "Download",
          fields: [
            defineField({ name: "title", title: "Beschriftung des Buttons", type: "string", validation: (r) => r.required() }),
            defineField({ name: "file", title: "Datei", type: "file", validation: (r) => r.required() }),
          ],
          preview: { select: { title: "title", subtitle: "file.asset.originalFilename" } },
        }),
      ],
    }),
    defineField({
      name: "gallery",
      title: "Bildergalerie",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Bildbeschreibung (für Screenreader)", type: "string" }),
            defineField({ name: "caption", title: "Bildunterschrift", type: "string" }),
          ],
        }),
      ],
      options: { layout: "grid" },
    }),
  ],
  orderings: [{ title: "Datum, neueste zuerst", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "date", media: "image" } },
});
