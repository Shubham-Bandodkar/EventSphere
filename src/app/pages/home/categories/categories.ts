import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeader } from '../../../shared/components/section-header/section-header';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll';

interface Category {
  title: string;
  icon: string;
  count: number;
}
@Component({
  selector: 'app-categories',
    imports: [
    CommonModule,
    SectionHeader,
    AnimateOnScrollDirective
  ],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {
   categories: Category[] = [
    {
      title: 'Wedding',
      icon: '💍',
      count: 120
    },
    {
      title: 'Birthday',
      icon: '🎂',
      count: 85
    },
    {
      title: 'Corporate',
      icon: '🏢',
      count: 40
    },
    {
      title: 'Concert',
      icon: '🎵',
      count: 95
    },
    {
      title: 'Cultural',
      icon: '🎭',
      count: 35
    },
    {
      title: 'Beach Party',
      icon: '🏖',
      count: 28
    }
  ];
}
