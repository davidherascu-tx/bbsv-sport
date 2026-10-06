import type {StructureResolver} from 'sanity/structure'
import {apiVersion} from './env'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
// Meldungen werden im Studio nach Jahr gruppiert (nur Ansicht im Backend),
// innerhalb eines Jahres nach Datum, neueste zuerst.
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Inhalt')
    .items([
      S.listItem()
        .title('Meldungen')
        .schemaType('post')
        .child(async () => {
          const dates = await context
            .getClient({apiVersion})
            .fetch<string[]>(`array::unique(*[_type == "post" && defined(date)].date)`)
          const years = [...new Set(dates.map((d) => d.slice(0, 4)))].sort().reverse()

          return S.list()
            .title('Meldungen')
            .items([
              ...years.map((year) =>
                S.listItem()
                  .id(`posts-${year}`)
                  .title(year)
                  .child(
                    S.documentList()
                      .title(`Meldungen ${year}`)
                      .schemaType('post')
                      .filter('_type == "post" && date >= $from && date <= $to')
                      .params({from: `${year}-01-01`, to: `${year}-12-31`})
                      .defaultOrdering([{field: 'date', direction: 'desc'}])
                      .initialValueTemplates([S.initialValueTemplateItem('post-in-year', {year})]),
                  ),
              ),
              S.divider(),
              S.listItem()
                .id('new-post')
                .title('＋ Neue Meldung')
                .child(() => S.editor().schemaType('post').documentId(crypto.randomUUID())),
            ])
        }),
    ])
