import { Injectable } from '@angular/core';
import { UpcomingEvent } from '../models/upcoming-event.model';

@Injectable({
  providedIn: 'root',
})
export class UpcomingEventService {
  getUpcomingEvents(): UpcomingEvent[] {

    return [

      {
        id:1,
        title:'Sunburn Goa',
        category:'Music Festival',
        location:'Vagator',
        date:'28 Dec 2026',
        price:2999,
        rating:4.9,
        image:'assets/images/upcoming/sunburn.jpg'
      },

      {
        id:2,
        title:'Goa Food Carnival',
        category:'Food',
        location:'Panjim',
        date:'15 Sept 2026',
        price:499,
        rating:4.7,
        image:'assets/images/upcoming/food.jpg'
      },

      {
        id:3,
        title:'Beach EDM Night',
        category:'Party',
        location:'Baga',
        date:'8 Oct 2026',
        price:799,
        rating:4.8,
        image:'assets/images/upcoming/beach-party.jpg'
      },

      {
        id:4,
        title:'Startup Meetup',
        category:'Business',
        location:'Porvorim',
        date:'20 Sept 2026',
        price:299,
        rating:4.6,
        image:'assets/images/upcoming/startup.jpg'
      }

    ];

  }
}
