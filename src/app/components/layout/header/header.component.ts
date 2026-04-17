import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void { }
  // Handles clicks outside of navbar or on menu items to close it on mobile/tablet
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (window.innerWidth < 992) {
      const target = event.target as HTMLElement;
      const navbar = document.querySelector('.navbar-collapse');
      const toggle = document.querySelector('.navbar-toggler');

      // Close if navbar is open AND (click is outside navbar OR click is on a nav-link)
      if (navbar && navbar.classList.contains('show')) {
        const clickedInsideNavbar = navbar.contains(target);
        const clickedToggler = toggle?.contains(target);
        const clickedNavLink = target.closest('.nav-link');

        if (!clickedInsideNavbar && !clickedToggler || clickedNavLink) {
          const expandedButton = document.querySelector('button[aria-expanded="true"]') as HTMLElement;
          if (expandedButton) {
            expandedButton.click();
          }
        }
      }
    }
  }
}
