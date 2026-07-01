import { Injectable } from '@angular/core';
import { Venue } from '../models/venue.model';
@Injectable({
  providedIn: 'root',
})
export class VenueService {
    constructor() {}

  getPopularVenues(): Venue[] {

    return [

      {
        id: 1,
        name: 'Grand Hyatt Goa',
        location: 'Bambolim',
        capacity: 500,
        price: 250000,
        rating: 4.9,
        reviewCount: 245,
        image: 'assets/images/venues/grand-hyatt.jpg',
        verified: true,
        featured: true
      },

      {
        id: 2,
        name: 'Taj Fort Aguada',
        location: 'Candolim',
        capacity: 350,
        price: 180000,
        rating: 4.8,
        reviewCount: 190,
        image: 'assets/images/venues/taj.jpg',
        verified: true,
        featured: true
      },

      {
        id: 3,
        name: 'Cidade de Goa',
        location: 'Dona Paula',
        capacity: 450,
        price: 150000,
        rating: 4.7,
        reviewCount: 155,
        image: 'assets/images/venues/cidade.jpg',
        verified: true,
        featured: true
      }

    ];

  }

}
