import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-badge',
  imports: [CommonModule],
  templateUrl: './badge.html',
  styleUrl: './badge.css',
})
export class Badge {
  @Input({ required: true })
  text!: string;

  @Input()
  variant: 'primary' | 'success' | 'warning' | 'danger' = 'primary';

}
