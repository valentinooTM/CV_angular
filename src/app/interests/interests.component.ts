import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('Zainteresowania')
  }
}
