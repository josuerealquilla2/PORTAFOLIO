import { Component, inject, signal, computed, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements OnInit, OnDestroy {
  readonly t = inject(I18nService).t;

  nameRepeats = Array(10).fill('Josue Quilla');

  readonly nameLetters = [
    ...'Josue'.split('').map((c, i) => ({ char: c, delay: i * 0.07, word: 0 })),
    { char: ' ', delay: 5 * 0.07, word: 0 },
    ...'quilla'.split('').map((c, i) => ({ char: c, delay: (i + 6) * 0.07, word: 1 })),
  ];

  private greetings = [
    'Hola', 'Hello', 'Bonjour', 'नमस्ते',
    'こんにちは', '안녕하세요', 'Ciao', 'Olá', 'Hei', 'Привет'
  ];

  currentGreetingIdx = signal(0);
  greetingVisible = signal(true);
  readonly currentGreeting = computed(() => this.greetings[this.currentGreetingIdx()]);

  private interval?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.greetingVisible.set(false);
      setTimeout(() => {
        this.currentGreetingIdx.update(i => (i + 1) % this.greetings.length);
        this.greetingVisible.set(true);
      }, 350);
    }, 2200);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
