import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layouts/navbar/navbar';
import { BackToTop } from './shared/components/back-to-top/back-to-top';

@Component({
  selector: 'app-root',
 imports: [RouterOutlet, Navbar, BackToTop],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eventsphere-ui');
}
