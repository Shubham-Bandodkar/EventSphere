import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-feature-item',
    imports: [CommonModule],
  templateUrl: './feature-item.html',
  styleUrl: './feature-item.css',
})
export class FeatureItem {
   @Input({ required: true })
  icon!: string;

  @Input({ required: true })
  title!: string;

  @Input()
  description = '';
}
