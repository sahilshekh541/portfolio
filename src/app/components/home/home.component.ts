import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Sahil Shekh | Angular Developer | Frontend Developer India',
      description: 'Sahil Shekh is a Frontend Angular Developer with 1.5+ years of experience building scalable, high-performance web applications using Angular, TypeScript, and REST APIs.',
      keywords: 'Sahil Shekh, Angular Developer India, Frontend Developer Rajkot, Angular Portfolio, TypeScript Developer, REST API Integration, Junior Software Engineer',
      author: 'Sahil Shekh',
      ogTitle: 'Sahil Shekh - Angular Frontend Developer',
      ogDescription: 'Portfolio of Sahil Shekh showcasing Angular projects, scalable applications, and performance-driven frontend development.',
      ogImage: 'https://www.sahilshekh.github.io/assets/images/portfolio.png',
      ogUrl: 'https://www.sahilshekh.github.io/'
    });

    this.seoService.addSchemaMarkup({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Sahil Shekh",
      "url": "https://www.sahilshekh.github.io/",
      "image": "https://www.sahilshekh.github.io/assets/images/portfolio.png",
      "jobTitle": "Frontend Angular Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "ownAI"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rajkot",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      },
      "sameAs": [
        "https://www.linkedin.com/in/sahil-shekh541",
        "https://github.com/sahilshekh541"
      ],
      "knowsAbout": [
        "Angular",
        "TypeScript",
        "JavaScript",
        "Frontend Development",
        "REST API Integration",
        "SEO Optimization"
      ]
    });
  }
}
