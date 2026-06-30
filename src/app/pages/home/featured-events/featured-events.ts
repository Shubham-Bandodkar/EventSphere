import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../../../core/models/event.model';
import { EventCard } from '../../../shared/components/event-card/event-card';
import { SectionHeader } from '../../../shared/components/section-header/section-header';
@Component({
  selector: 'app-featured-events',
  imports: [
    CommonModule,
    EventCard,
    SectionHeader
  ],
  templateUrl: './featured-events.html',
  styleUrl: './featured-events.css',
})
export class FeaturedEvents {
  events: Event[] = [

    {
      id: 1,
      title: 'Goa Music Festival',
      category: 'Concert',
      location: 'Goa',
      date: '15 Aug 2026',
      price: 999,
      rating: 4.8,
      image: 'assets/images/events/concert.jpg',
      isFeatured: true
    },

    {
      id: 2,
      title: 'Luxury Beach Wedding',
      category: 'Wedding',
      location: 'Candolim',
      date: '20 Aug 2026',
      price: 4999,
      rating: 4.9,
      image: 'assets/images/events/wedding.jpg',
      isFeatured: true
    },

    {
      id: 3,
      title: 'Corporate Summit',
      category: 'Corporate',
      location: 'Panjim',
      date: '10 Sept 2026',
      price: 699,
      rating: 4.7,
      image: 'assets/images/events/corporate.jpg',
      isFeatured: true
    }

  ];
}
