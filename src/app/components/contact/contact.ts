import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../../services/i18n.service';

interface ContactForm { name: string; email: string; message: string; }

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  readonly t = inject(I18nService).t;
  form: ContactForm = { name: '', email: '', message: '' };
  status = signal<'idle' | 'sent'>('idle');

  submit(): void {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    const subject = encodeURIComponent(`Portafolio — Mensaje de ${this.form.name}`);
    const body = encodeURIComponent(
      `Nombre: ${this.form.name}\nEmail: ${this.form.email}\n\nMensaje:\n${this.form.message}`
    );
    window.location.href = `mailto:u29956277@gmail.com?subject=${subject}&body=${body}`;
    this.status.set('sent');
    this.form = { name: '', email: '', message: '' };
  }
}
