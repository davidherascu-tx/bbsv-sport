import { type SchemaTypeDefinition, type Template } from 'sanity'
import { post } from '../schemas/post'

export const schema: { types: SchemaTypeDefinition[]; templates: (prev: Template[]) => Template[] } = {
  types: [post],
  templates: (prev) => [
    // Neue Meldung innerhalb eines Jahr-Ordners: Datum wird mit heute im gewählten Jahr vorbelegt
    {
      id: 'post-in-year',
      title: 'Meldung',
      schemaType: 'post',
      parameters: [{name: 'year', type: 'string'}],
      value: ({year}: {year: string}) => ({date: `${year}${new Date().toISOString().slice(4, 10)}`}),
    },
    ...prev,
  ],
}
