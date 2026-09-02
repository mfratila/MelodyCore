import { useEffect } from 'react';

function upsertMeta(selector, attributes) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    document.head.appendChild(tag);
  }
  Object.entries(attributes).forEach(([key, value]) => tag.setAttribute(key, value));
}

function upsertCanonical(href) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

/**
 * Per-route document head. The static site shipped these tags inline in each HTML
 * file; in the SPA each page declares them and this keeps `<head>` in sync.
 */
export function Seo({ title, description, canonical, image, type = 'website' }) {
  useEffect(() => {
    document.title = title;
    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    });
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: new URL(canonical, window.location.origin).href,
    });

    if (image) {
      upsertMeta('meta[property="og:image"]', {
        property: 'og:image',
        content: new URL(image, window.location.origin).href,
      });
    }

    upsertCanonical(new URL(canonical, window.location.origin).href);
  }, [title, description, canonical, image, type]);

  return null;
}
