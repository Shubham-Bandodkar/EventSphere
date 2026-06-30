import { Component, Input } from '@angular/core';
import { Event } from '../../../core/models/event.model';

@Component({
  selector: 'app-event-card',
  imports: [],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css',
})
export class EventCard {
   @Input({ required: true })
  event!: Event;

}
