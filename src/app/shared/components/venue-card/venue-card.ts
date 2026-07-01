import { Component, Input } from '@angular/core';
import { Venue } from '../../../core/models/venue.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-venue-card',
  imports: [CommonModule],
  templateUrl: './venue-card.html',
  styleUrl: './venue-card.css',
})
export class VenueCard {
   @Input({ required: true })
  venue!: Venue;

}
