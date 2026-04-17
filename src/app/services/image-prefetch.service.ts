import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ImagePrefetchService {
  constructor(@Inject(DOCUMENT) private document: Document) { }

  /**
   * Adds a prefetch link to the document head for the specified image URL.
   * @param src The source path of the image to prefetch.
   */
  addPrefetch(src: string): void {
    if (!src) return;

    // Check if it already exists to avoid duplicates
    const selector = `link[rel="preload"][href="${src}"]`;
    if (this.document.head.querySelector(selector)) {
      return;
    }

    const link = this.document.createElement('link');
    link.rel = 'preload';
    link.setAttribute('fetchpriority', 'high');
    link.as = 'image';
    link.href = src;
    this.document.head.appendChild(link);
  }

  /**
   * Removes the prefetch link from the document head for the specified image URL.
   * @param src The source path of the image to remove.
   */
  removePrefetch(src: string): void {
    if (!src) return;

    const selector = `link[rel="prefetch"][href="${src}"]`;
    const link = this.document.head.querySelector(selector);

    if (link) {
      this.document.head.removeChild(link);
    }
  }
}
