import { AfterViewInit, Component } from '@angular/core';

declare function hideInitialLoader(): void;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  constructor() { }

  ngAfterViewInit(): void {
    hideInitialLoader();
  }
}
