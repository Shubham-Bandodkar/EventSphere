import { Injectable } from '@angular/core';
import { WorkStep } from '../models/work-step.model';

@Injectable({
  providedIn: 'root',
})
export class HowItWorksService {
  getSteps(): WorkStep[] {

    return [

      {
        step: 1,
        title: 'Search',
        description: 'Browse events, venues and vendors near you.',
        icon: 'search'
      },

      {
        step: 2,
        title: 'Choose',
        description: 'Compare options and select the perfect match.',
        icon: 'event_available'
      },

      {
        step: 3,
        title: 'Book',
        description: 'Confirm instantly with secure online payments.',
        icon: 'payments'
      },

      {
        step: 4,
        title: 'Enjoy',
        description: 'Relax and make unforgettable memories.',
        icon: 'celebration'
      }

    ];

  }

}
