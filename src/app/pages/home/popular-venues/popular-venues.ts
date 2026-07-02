import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeader } from '../../../shared/components/section-header/section-header';
import { VenueCard } from '../../../shared/components/venue-card/venue-card';
import { VenueService } from '../../../core/services/venue';
import { Venue } from '../../../core/models/venue.model';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll';

@Component({
  selector: 'app-popular-venues',
 imports: [
    CommonModule,
    VenueCard,
    SectionHeader,AnimateOnScrollDirective
  ],
    templateUrl: './popular-venues.html',
  styleUrl: './popular-venues.css',
})
export class PopularVenues {
   venues: Venue[] = [];

  constructor(private venueService: VenueService){

    this.venues = venueService.getPopularVenues();

  }
}
