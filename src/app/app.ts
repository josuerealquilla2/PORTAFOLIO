import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { ExperienceComponent } from './components/experience/experience';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';
import { Contact } from './components/contact/contact';
import { Intro } from './components/intro/intro';

@Component({
  selector: 'app-root',
  imports: [Intro, Navbar, Hero, ExperienceComponent, Projects, Skills, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;
  private mutationObserver!: MutationObserver;
  loaded = false;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.10, rootMargin: '0px 0px -40px 0px' }
    );

    this.observeAll();

    // Watch for new .reveal elements added by @for loops
    this.mutationObserver = new MutationObserver(() => this.observeAll());
    this.mutationObserver.observe(document.body, { childList: true, subtree: true });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.mutationObserver?.disconnect();
  }

  private observeAll(): void {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
      if (!el.classList.contains('visible')) {
        this.observer.observe(el);
      }
    });
  }
}
