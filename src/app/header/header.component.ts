import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  currentLan: number = 1;

  constructor(private sharedLangService: NavBarComponent) {}
  
  ngOnInit() {
      this.sharedLangService.currentLan$.subscribe(data => {
        this.currentLan = data;
        console.log(this.currentLan)
      });
  }
}
