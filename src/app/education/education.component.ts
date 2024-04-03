import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EmojiPipe } from '../emoji.pipe';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [EmojiPipe],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('Edukacja')
  }
}
