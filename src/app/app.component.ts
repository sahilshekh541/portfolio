import { AfterViewInit, Component } from '@angular/core';
declare global {
  interface Window {
    hideAppLoader: () => void;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  constructor() { }
  ngAfterViewInit() {
    setTimeout(() => {
      window.hideAppLoader();
    });
  }
}
