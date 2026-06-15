import { Component, OnInit, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { I18nService } from '../../services/i18n.service';
import { SkillCategory } from '../../models/skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills implements OnInit {
  readonly t = inject(I18nService).t;
  categories: SkillCategory[] = [];
  active = 0;

  constructor(private portfolio: PortfolioService) {}

  ngOnInit(): void {
    this.categories = this.portfolio.getSkillCategories();
  }
}
