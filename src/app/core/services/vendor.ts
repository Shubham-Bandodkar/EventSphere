import { Injectable } from '@angular/core';
import { Vendor } from '../models/vendor.model';
@Injectable({
  providedIn: 'root',
})
export class VendorService {
  getFeaturedVendors(): Vendor[] {

    return [

      {
        id:1,
        name:'Dream Photography',
        category:'Photographer',
        rating:4.9,
        reviewCount:120,
        location:'Panjim',
        startingPrice:25000,
        image:'assets/images/vendors/photographer.jpg',
        verified:true
      },

      {
        id:2,
        name:'Goa DJ Nights',
        category:'DJ',
        rating:4.8,
        reviewCount:98,
        location:'Calangute',
        startingPrice:15000,
        image:'assets/images/vendors/dj.jpg',
        verified:true
      },

      {
        id:3,
        name:'Royal Caterers',
        category:'Caterer',
        rating:4.7,
        reviewCount:180,
        location:'Margao',
        startingPrice:500,
        image:'assets/images/vendors/catering.jpg',
        verified:true
      }

    ];

  }
}
