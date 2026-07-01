import { Component } from '@angular/core';
import { FeatureService } from '../../../core/services/feature';
import { Feature } from '../../../core/models/feature.model';
import { SectionHeader } from '../../../shared/components/section-header/section-header';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-why-eventsphere',
   imports: [
    CommonModule,
    SectionHeader
  ],
  templateUrl: './why-eventsphere.html',
  styleUrl: './why-eventsphere.css',
})
export class WhyEventsphere {
  features: Feature[] = [];

  constructor(private featureService: FeatureService) {

    this.features = this.featureService.getFeatures();

  }

}
