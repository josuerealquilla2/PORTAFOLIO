import { Component, OnInit, OnDestroy, signal, output } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  template: `
    @if (visible()) {
      <div class="loader" [class.exit]="exiting()">
        @for (g of [greetings[index()]]; track index()) {
          <span class="word"><span class="dot"></span>{{ g }}</span>
        }
      </div>
    }
  `,
  styleUrl: './intro.scss',
})
export class Intro implements OnInit, OnDestroy {
  greetings = ['Hola', 'Hello', 'Bonjour', 'Ciao', 'Olá',
    'Guten Tag', 'こんにちは', 'नमस्ते', 'مرحبا', '你好'];

  index = signal(0);
  visible = signal(true);
  exiting = signal(false);
  finished = output<void>();

  private timer?: ReturnType<typeof setInterval>;
  private readonly stepMs = 375;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      if (this.index() < this.greetings.length - 1) {
        this.index.update(i => i + 1);
      } else {
        clearInterval(this.timer);
        this.exiting.set(true);
        setTimeout(() => { this.visible.set(false); this.finished.emit(); }, 800);
      }
    }, this.stepMs);
  }

  ngOnDestroy(): void { clearInterval(this.timer); }
}
