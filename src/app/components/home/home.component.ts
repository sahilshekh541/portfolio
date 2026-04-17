import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { PROJECTS } from 'src/app/shared/config/constants';
import { ImagePrefetchService } from 'src/app/services/image-prefetch.service';

declare var gsap: any;
declare var ScrollTrigger: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  projects = PROJECTS;

  constructor(private seoService: SeoService, private imagePrefetchService: ImagePrefetchService) { }

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Sahil Shekh | Angular Developer | Frontend Developer India',
      description:
        'Sahil Shekh is a Frontend Angular Developer with 1.5+ years of experience building scalable, high-performance web applications using Angular, TypeScript, and REST APIs.',
      keywords:
        'Sahil Shekh, Angular Developer India, Frontend Developer Rajkot, Angular Portfolio, TypeScript Developer, REST API Integration, Junior Software Engineer',
      author: 'Sahil Shekh',
      ogTitle: 'Sahil Shekh - Angular Frontend Developer',
      ogDescription:
        'Portfolio of Sahil Shekh showcasing Angular projects, scalable applications, and performance-driven frontend development.',
      ogImage:
        'https://sahilshekh541.github.io/portfolio/assets/images/sahil-shekh-portfolio.png',
      ogUrl: 'https://sahilshekh541.github.io/portfolio/',
    });

    this.seoService.addSchemaMarkup({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Sahil Shekh',
      url: 'https://sahilshekh541.github.io/portfolio',
      image:
        'https://sahilshekh541.github.io/portfolio/assets/images/sahil-shekh-portfolio.png',
      jobTitle: 'Frontend Angular Developer',
      worksFor: {
        '@type': 'Organization',
        name: 'ownAI',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rajkot',
        addressRegion: 'Gujarat',
        addressCountry: 'India',
      },
      sameAs: [
        'https://www.linkedin.com/in/sahil-shekh541',
        'https://github.com/sahilshekh541',
      ],
      knowsAbout: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'Frontend Development',
        'REST API Integration',
        'SEO Optimization',
      ],
    });

    this.imagePrefetchService.addPrefetch('assets/images/hero-person.webp');
  }

  ngAfterViewInit(): void {
    this.initAnimations();
  }

  private initAnimations(): void {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // --- Hero Section Animations ---
      const heroTl = gsap.timeline();
      heroTl.fromTo('.hero-sidebar-left', {
        x: -50,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      })
        .fromTo('.portrait-container', {
          scale: 0.9,
          opacity: 0
        }, {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out'
        }, '-=0.5')
        .fromTo('.hero-main-name', {
          y: 80,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: 'expo.out'
        }, '-=0.8')
        .fromTo('.hero-badge-subtitle', {
          y: 30,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out'
        }, '-=1.1')
        .fromTo('.circular-text-wrapper', {
          opacity: 0
        }, {
          opacity: 1,
          duration: 1,
          ease: 'power2.inOut'
        }, '-=1.3');

      // --- Section Titles and Descriptions ---
      const sections = ['.about-new-section', '.tech-stack-section', '.feature-projects-section', '.experience-new-section', '.get-in-touch-section'];
      sections.forEach(section => {
        const titleSpan = document.querySelector(`${section} .section-title span`);
        const desc = document.querySelector(`${section} .section-description`);

        if (titleSpan) {
          gsap.from(titleSpan, {
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: titleSpan,
              start: 'top 90%',
              toggleActions: 'play none none none'
            }
          });
        }

        if (desc) {
          gsap.from(desc, {
            y: 20,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: desc,
              start: 'top 90%',
              toggleActions: 'play none none none'
            }
          });
        }
      });

      // --- About Section Content ---
      gsap.fromTo('.profile-card', {
        x: -50,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.profile-card',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      gsap.fromTo('.about-info-card', {
        x: 50,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-info-card',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      gsap.fromTo('.roles-apps-card', {
        y: 40,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.roles-apps-card',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });

      // --- Tech Stack Skills Stagger ---
      gsap.fromTo('.skill-card', {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      // --- Feature Projects Stagger ---
      gsap.fromTo('.project-card', {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      // --- Experience Timeline items ---
      const items = document.querySelectorAll('.timeline-item');
      items.forEach((item) => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      });

      // --- Get in Touch Menu Links Stagger ---
      gsap.fromTo('.menu-link', {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.menus-link',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.imagePrefetchService.removePrefetch('assets/images/hero-person.webp');
  }
}
