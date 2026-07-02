import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreButton } from '../../../shared/components/store-button/store-button';
import { PhoneMockup } from '../../../shared/components/phone-mockup/phone-mockup';
import { FeatureItem } from '../../../shared/components/feature-item/feature-item';
import { Badge } from '../../../shared/components/badge/badge';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll';
import { SectionHeader } from '../../../shared/components/section-header/section-header';

@Component({
  selector: 'app-download-app',
 imports: [
    CommonModule,
    Badge,
    FeatureItem,
    PhoneMockup,
    StoreButton,  SectionHeader,
    AnimateOnScrollDirective
  ],  templateUrl: './download-app.html',
  styleUrl: './download-app.css',
})
export class DownloadApp {}
