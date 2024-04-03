import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('Kontakt')
  }

  formData: any = {};

  submitForm() {
    // Tutaj możesz dodać logikę wysyłania danych formularza, np. wywołanie usługi HTTP do wysłania danych na serwer
    console.log('Dane formularza:', this.formData);
    // W tym przykładzie po prostu wypisujemy dane w konsoli
  }
}
