import { Component, OnInit, inject } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { I18nService } from '../../services/i18n.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  imports: [TitleCasePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects implements OnInit {
  readonly t = inject(I18nService).t;
  projects: Project[] = [];

  constructor(private portfolio: PortfolioService) {}

  ngOnInit(): void {
    this.projects = this.portfolio.getProjects();
  }

  toggle(project: Project): void {
    project.expanded = !project.expanded;
  }
}
