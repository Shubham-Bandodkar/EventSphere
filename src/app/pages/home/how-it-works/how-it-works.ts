import { Component } from '@angular/core';
import { HowItWorksService } from '../../../core/services/how-it-works';
import { WorkStep } from '../../../core/models/work-step.model';
import { SectionHeader } from '../../../shared/components/section-header/section-header';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-how-it-works',
   imports: [
    CommonModule,
    SectionHeader
  ],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.css',
})
export class HowItWorks {
   steps: WorkStep[] = [];

  constructor(private howItWorksService: HowItWorksService) {
    this.steps = this.howItWorksService.getSteps();
  }
}
