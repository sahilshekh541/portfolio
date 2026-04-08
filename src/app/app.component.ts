import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { gsap } from 'gsap';

declare function hideInitialLoader(): void;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private router: Router) { }

  ngOnInit() {
    // Initial Loader Animation via GSAP npm
    // const pb = document.getElementById('progress-bar');
    // const loader = document.getElementById('initial-loader');
    // const loaderPercentage = document.getElementById('loader-percentage');
    // const fragments = document.querySelectorAll('.logo-fragment');
    // const progressContainer = document.getElementById('progress-container');
    // const revealText = document.getElementById('reveal-text');

    // if (pb && loader && loaderPercentage) {
    //   const tl = gsap.timeline();

    //   // Show fragments quickly
    //   gsap.set(fragments, { visibility: 'visible' });

    //   // Stagger logo fragments
    //   tl.to(fragments, {
    //     opacity: 1,
    //     y: 0,
    //     rotationY: 0,
    //     scale: 1,
    //     duration: 1.2,
    //     stagger: 0.1,
    //     ease: 'back.out(1.7)',
    //   }, 0);

    //   // Progress bar and percentage number
    //   const progressObj = { value: 0 };
    //   tl.to(progressObj, {
    //     value: 100,
    //     duration: 2.2, /* match slightly longer than fragments */
    //     ease: 'power2.inOut',
    //     onUpdate: () => {
    //       if (loaderPercentage) loaderPercentage.innerText = Math.round(progressObj.value) + '%';
    //     }
    //   }, 0);

    //   tl.to(pb, {
    //     width: '100%',
    //     duration: 2.2,
    //     ease: 'power2.inOut'
    //   }, 0);

    //   // At 100%: pop logo, hide progress, reveal text
    //   tl.to(progressContainer, {
    //     opacity: 0,
    //     y: 20,
    //     duration: 0.4,
    //     ease: 'power2.in'
    //   }, '+=0.2');

    //   tl.to(fragments, {
    //     scale: 1.2,
    //     duration: 0.2,
    //     stagger: 0.05,
    //     ease: 'power1.out',
    //     yoyo: true,
    //     repeat: 1
    //   }, '<');

    //   tl.to(revealText, {
    //     opacity: 1,
    //     duration: 0.3,
    //     ease: 'power2.out'
    //   }, '<0.2');

    //   // Then shrink the whole loader to reveal main site
    //   tl.to(loader, {
    //     scale: 0.95,
    //     opacity: 0,
    //     y: '-100vh',
    //     duration: 1,
    //     ease: 'power4.inOut',
    //     delay: 0.4,
    //     onComplete: () => {
    //       loader.style.display = 'none';
    //     }
    //   });
    // }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        gsap.to('.page-transition-wrapper', {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: 'power2.in'
        });
      }
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // scroll to top on navigate
        gsap.to('.page-transition-wrapper', {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.1,
          ease: 'power3.out',
          clearProps: 'all'
        });
      }
    });
  }
}
