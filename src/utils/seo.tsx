// Minimal SEO helper — sets document title, meta description, canonical and Open Graph tags.
export function setMeta({ title, description, url, image }: { title?: string; description?: string; url?: string; image?: string }) {
  if (title) document.title = title;

  const setTag = (name: string, content?: string) => {
    if (!content) return;
    let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  const setProperty = (prop: string, content?: string) => {
    if (!content) return;
    let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', prop);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setTag('description', description || '');
  setTag('keywords', 'catering, best catering in bangalore, bangalore catering services, wedding catering, corporate catering');

  if (url) {
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
    setProperty('og:url', url);
  }

  if (image) {
    setProperty('og:image', image);
    setTag('twitter:image', image);
  }

  if (title) {
    setProperty('og:title', title);
    setTag('twitter:title', title);
  }

  if (description) {
    setProperty('og:description', description);
    setTag('twitter:description', description);
  }
}

export default setMeta;
