import { Component } from '@angular/core';
import { VendorService } from '../../../core/services/vendor';
import { Vendor } from '../../../core/models/vendor.model';
import { SectionHeader } from '../../../shared/components/section-header/section-header';
import { VendorCard } from '../../../shared/components/vendor-card/vendor-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured-vendors',
  imports: [
    CommonModule,
    VendorCard,
    SectionHeader
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
