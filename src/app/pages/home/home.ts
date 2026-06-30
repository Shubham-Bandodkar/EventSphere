import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Categories } from './categories/categories';
import { WhyEventsphere } from './why-eventsphere/why-eventsphere';
import { FeaturedEvents } from './featured-events/featured-events';
import { PopularVenues } from './popular-venues/popular-venues';
import { FeaturedVendors } from './featured-vendors/featured-vendors';
import { HowItWorks } from './how-it-works/how-it-works';
import { UpcomingEvents } from './upcoming-events/upcoming-events';
import { Testimonials } from './testimonials/testimonials';
import { DownloadApp } from './download-app/download-app';
import { Newsletter } from './newsletter/newsletter';
import { Footer } from './footer/footer';
@Component({
  selector: 'app-home',
  imports: [
    Hero,
    Categories,
    WhyEventsphere,
    FeaturedEvents,
    PopularVenues,
    FeaturedVendors,
    HowItWorks,
    UpcomingEvents,
    Testimonials,
    DownloadApp,
    Newsletter,
    Footer,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
