import { Component, Input } from '@angular/core';
import { Vendor } from '../../../core/models/vendor.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-vendor-card',
  imports: [CommonModule],
  templateUrl: './vendor-card.html',
  styleUrl: './vendor-card.css',
})
export class VendorCard {
   @Input({ required: true }) vendor!: Vendor;

}
