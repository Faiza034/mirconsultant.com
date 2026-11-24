import { useEffect } from 'react'
import { SITE, } from '../data/site'

const setTag = (selector, create, attrs) => {
  let el = document.head.querySelector(selector)
  if (!el) { el = document.createElement(create); document.head.appendChild(el) }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
}

// Sets title, description, canonical and Open Graph tags per page.
export default function Seo({ title, description, path = '/', noindex = false }) {
  useEffect(() => {
    const url = SITE.url + (path === '/' ? '' : path)
    document.title = title
    setTag('meta[name="description"]', 'meta', { name: 'description', content: description })
    setTag('link[rel="canonical"]', 'link', { rel: 'canonical', href: url })
    setTag('meta[name="robots"]', 'meta', { name: 'robots', content: noindex ? 'noindex,follow' : 'index,follow' })
    const og = { 'og:title': title, 'og:description': description, 'og:url': url, 'og:type': 'website', 'og:site_name': SITE.name, 'og:image': `${SITE.url}/og-image.png` }
    Object.entries(og).forEach(([p, c]) => setTag(`meta[property="${p}"]`, 'meta', { property: p, content: c }))
    setTag('meta[name="twitter:card"]', 'meta', { name: 'twitter:card', content: 'summary_large_image' })
  }, [title, description, path, noindex])
  return null
}
