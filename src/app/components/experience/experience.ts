import { Component, OnInit, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { I18nService } from '../../services/i18n.service';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class ExperienceComponent implements OnInit {
  readonly t = inject(I18nService).t;
  experiences: Experience[] = [];

  constructor(private portfolio: PortfolioService) {}

  ngOnInit(): void {
    this.experiences = this.portfolio.getExperiences();
  }
}
