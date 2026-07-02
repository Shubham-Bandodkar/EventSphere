import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll';
import { SectionHeader } from '../../../shared/components/section-header/section-header';
import { TestimonialCard } from '../../../shared/components/testimonial-card/testimonial-card';
import { Testimonial } from '../../../core/models/testimonial.model';
import { Carousel } from '../../../shared/components/carousel/carousel';
import { TestimonialService } from '../../../core/services/testimonial';
import { CarouselConfig } from '../../../core/models/carousel.types';

@Component({
  selector: 'app-testimonials',
  imports: [
    CommonModule,
    Carousel,
    TestimonialCard,
    SectionHeader,
    AnimateOnScrollDirective
  ],
    templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
    testimonials: Testimonial[] = [];

  carouselConfig: CarouselConfig = {
    visibleItems: 2,
    autoPlay: true,
    autoPlayInterval: 4000,
    infinite: true,
    showDots: true,
    showArrows: true
  };

  constructor(private testimonialService: TestimonialService) {

    this.testimonials =
      this.testimonialService.getTestimonials();

  }

}
