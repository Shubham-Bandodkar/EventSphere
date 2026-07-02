import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingEvent } from '../../../core/models/upcoming-event.model';
@Component({
  selector: 'app-upcoming-event-card',
  imports: [CommonModule],
  templateUrl: './upcoming-event-card.html',
  styleUrl: './upcoming-event-card.css',
})
export class UpcomingEventCard {
   @Input({ required: true })
  event!: UpcomingEvent;

}
