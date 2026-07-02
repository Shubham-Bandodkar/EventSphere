import { Injectable } from '@angular/core';
import { Testimonial } from '../models/testimonial.model';

@Injectable({
  providedIn: 'root',
})
export class TestimonialService {
  getTestimonials(): Testimonial[] {

    return [

      {
        id:1,
        name:'Priya Sharma',
        city:'Goa',
        rating:5,
        comment:'EventSphere made our wedding planning effortless. The vendors were professional and everything was perfectly organized.',
        image:'assets/images/testimonials/priya.jpg',
        eventType:'Wedding'
      },

      {
        id:2,
        name:'Rahul Naik',
        city:'Panjim',
        rating:5,
        comment:'Booked a birthday venue within minutes. Amazing experience from start to finish.',
        image:'assets/images/testimonials/rahul.jpg',
        eventType:'Birthday'
      },

      {
        id:3,
        name:'Ananya Fernandes',
        city:'Margao',
        rating:5,
        comment:'The DJ and photographer exceeded our expectations. Highly recommended!',
        image:'assets/images/testimonials/ananya.jpg',
        eventType:'Corporate'
      }

    ];

  }

}
