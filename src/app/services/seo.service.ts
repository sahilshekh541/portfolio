import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private title: Title, private meta: Meta) {}

  updateSeo(config: {
    title: string;
    description: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogUrl?: string;
    keywords?: string;
    author?: string;
  }) {
    this.title.setTitle(config.title);
    
    // Standard Meta Tags
    this.meta.updateTag({ name: 'description', content: config.description });
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }
    if (config.author) {
      this.meta.updateTag({ name: 'author', content: config.author });
    }

    // Open Graph Tags
    this.meta.updateTag({ property: 'og:title', content: config.ogTitle || config.title });
    this.meta.updateTag({ property: 'og:description', content: config.ogDescription || config.description });
    if (config.ogImage) {
      this.meta.updateTag({ property: 'og:image', content: config.ogImage });
    }
    if (config.ogUrl) {
      this.meta.updateTag({ property: 'og:url', content: config.ogUrl });
    }
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: config.ogTitle || config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.ogDescription || config.description });
  }

  addSchemaMarkup(schema: any) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
