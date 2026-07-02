import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-store-button',
  imports: [CommonModule],
  templateUrl: './store-button.html',
  styleUrl: './store-button.css',
})
export class StoreButton {
  @Input()
  platform: 'apple' | 'google' = 'apple';
}
