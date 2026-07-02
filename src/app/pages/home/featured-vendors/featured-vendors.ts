import { Component } from '@angular/core';
import { VendorService } from '../../../core/services/vendor';
import { Vendor } from '../../../core/models/vendor.model';
import { SectionHeader } from '../../../shared/components/section-header/section-header';
import { VendorCard } from '../../../shared/components/vendor-card/vendor-card';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll';

@Component({
  selector: 'app-featured-vendors',
  imports: [
    CommonModule,
    VendorCard,
    SectionHeader,AnimateOnScrollDirective
  ],
  templateUrl: './featured-vendors.html',
  styleUrl: './featured-vendors.css',
})
export class FeaturedVendors {

   vendors: Vendor[] = [];

  constructor(private vendorService: VendorService) {
    this.vendors = this.vendorService.getFeaturedVendors();
  }
}
