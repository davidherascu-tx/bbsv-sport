'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {deDELocale} from '@sanity/locale-de-de'
import {media} from 'sanity-plugin-media'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  document: {
    // Vorlage "post-in-year" nur innerhalb der Ordnerstruktur anbieten, nicht im globalen Plus-Menü
    newDocumentOptions: (prev, {creationContext}) =>
      creationContext.type === 'global' ? prev.filter((item) => item.templateId !== 'post-in-year') : prev,
  },
  plugins: [
    deDELocale(),
    // Mediathek: zentrale Verwaltung aller Bilder und Dateien, in Meldungen wiederverwendbar
    media(),
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
