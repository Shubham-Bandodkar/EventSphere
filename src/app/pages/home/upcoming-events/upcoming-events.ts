import { Component } from '@angular/core';
import { SectionHeader } from '../../../shared/components/section-header/section-header';
import { UpcomingEventCard } from '../../../shared/components/upcoming-event-card/upcoming-event-card';
import { UpcomingEvent } from '../../../core/models/upcoming-event.model';
import { UpcomingEventService } from '../../../core/services/upcoming-event';
import { CommonModule } from '@angular/common';
import { Carousel } from '../../../shared/components/carousel/carousel';
import { CarouselConfig } from '../../../core/models/carousel.types';
@Component({
  selector: 'app-upcoming-events',
  imports: [
    CommonModule,
    SectionHeader,
    Carousel,
    UpcomingEventCard
  ],
  templateUrl: './upcoming-events.html',
  styleUrl: './upcoming-events.css',
})
export class UpcomingEvents {
  events: UpcomingEvent[] = [];

  carouselConfig: CarouselConfig = {
    visibleItems: 3,
    autoPlay: true,
    autoPlayInterval: 3500,
    infinite: true,
    showDots: true,
    showArrows: true
  };

  constructor(private upcomingService: UpcomingEventService) {
    this.events = this.upcomingService.getUpcomingEvents();
  }
}
