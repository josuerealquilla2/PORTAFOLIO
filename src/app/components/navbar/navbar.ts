import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { I18nService } from '../../services/i18n.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  private i18n = inject(I18nService);
  readonly theme = inject(ThemeService);

  scrolled = signal(false);
  menuOpen = signal(false);
  activeSection = signal('home');

  readonly navItems = computed(() => {
    const n = this.i18n.t().nav;
    return [
      { number: '01', label: n.home,         anchor: 'home' },
      { number: '02', label: n.experience,   anchor: 'experience' },
      { number: '03', label: n.projects,     anchor: 'projects' },
      { number: '04', label: n.skills,       anchor: 'skills' },
      { number: '05', label: n.contact,      anchor: 'contact' }
    ];
  });

  readonly langLabel = computed(() => this.i18n.lang() === 'es' ? 'EN' : 'ES');
  readonly isDark    = computed(() => this.theme.theme() === 'dark');

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
    this.updateActiveSection();
  }

  scrollTo(anchor: string): void {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.menuOpen.set(false);
  }

  toggleMenu():  void { this.menuOpen.update(v => !v); }
  toggleTheme(): void { this.theme.toggle(); }
  toggleLang():  void { this.i18n.toggle(); }

  private updateActiveSection(): void {
    for (const item of [...this.navItems()].reverse()) {
      const el = document.getElementById(item.anchor);
      if (el && el.getBoundingClientRect().top <= 100) {
        this.activeSection.set(item.anchor);
        return;
      }
    }
    this.activeSection.set('home');
  }
}
