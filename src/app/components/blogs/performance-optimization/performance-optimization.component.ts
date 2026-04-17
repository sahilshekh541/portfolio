import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/app/services/seo.service';
import { ImagePrefetchService } from 'src/app/services/image-prefetch.service';

@Component({
  selector: 'app-performance-optimization',
  templateUrl: './performance-optimization.component.html',
  styleUrls: ['./performance-optimization.component.css']
})
export class PerformanceOptimizationComponent implements OnInit, OnDestroy {
  private heroImage: string = '';

  constructor(
    private seoService: SeoService,
    private imagePrefetchService: ImagePrefetchService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeData = this.route.snapshot.data;

    if (routeData) {
      this.seoService.updateSeo({
        title: routeData['title'],
        description: routeData['description'],
        ogTitle: routeData['title'],
        ogDescription: routeData['description'],
        ogImage: routeData['ogImage'],
        ogUrl: window.location.href, // Dynamic URL
        keywords: 'Angular, Performance Optimization, Lazy Loading, Change Detection, OnPush, Bundle Size, Lighthouse, Web Development',
        author: 'Sahil Shekh'
      });

      this.heroImage = 'assets/images/angular-performance-optimization-thumbnail.webp';
      if (this.heroImage) {
        this.imagePrefetchService.addPrefetch(this.heroImage);
      }

      this.seoService.addSchemaMarkup({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": routeData['title'],
        "description": routeData['description'],
        "image": routeData['ogImage'],
        "author": {
          "@type": "Person",
          "name": "Sahil Shekh"
        },
        "datePublished": routeData['uploadDate'],
        "publisher": {
          "@type": "Organization",
          "name": "Sahil Shekh Portfolio"
        }
      });
    }
  }

  ngOnDestroy(): void {
    if (this.heroImage) {
      this.imagePrefetchService.removePrefetch(this.heroImage);
    }
  }
}
