import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-phone-mockup',
  imports: [],
  templateUrl: './phone-mockup.html',
  styleUrl: './phone-mockup.css',
})
export class PhoneMockup {
   @Input()
  image = '';
}
