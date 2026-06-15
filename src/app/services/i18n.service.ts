import { Injectable, computed, signal } from '@angular/core';
import { translations, Lang, T } from '../i18n/translations';

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>((localStorage.getItem('lang') as Lang) ?? 'es');
  readonly t = computed<T>(() => translations[this.lang()]);

  toggle(): void {
    const next: Lang = this.lang() === 'es' ? 'en' : 'es';
    this.lang.set(next);
    localStorage.setItem('lang', next);
  }
}
