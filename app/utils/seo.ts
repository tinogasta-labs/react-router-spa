import type { MetaFunction } from 'react-router'

export function getMetaTags({
  title = 'Template - Tinogasta Labs',
  description = 'SPA Template created by Tinogasta Labs.',
  keywords = 'React Router, React, Tinogasta Labs, SPA Template',
}: {
  title?: string
  description?: string
  keywords?: string
} = {}) {
  return [
    { title },
    { name: 'description', content: description },
    {
      name: 'keywords',
      content: keywords,
    },
  ] satisfies ReturnType<MetaFunction>
}
