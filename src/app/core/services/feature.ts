import { Injectable } from '@angular/core';
import { Feature } from '../models/feature.model';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  getFeatures(): Feature[] {

    return [

      {
        title: 'Verified Vendors',
        description: 'Every vendor is carefully verified to ensure quality and trust.',
        icon: 'verified'
      },

      {
        title: 'Instant Booking',
        description: 'Book your favorite event or venue within minutes.',
        icon: 'bolt'
      },

      {
        title: 'Secure Payments',
        description: 'Pay safely with encrypted online payment gateways.',
        icon: 'payments'
      },

      {
        title: 'Thousands of Events',
        description: 'Explore concerts, weddings, birthdays and corporate events.',
        icon: 'celebration'
      }

    ];

  }
}
