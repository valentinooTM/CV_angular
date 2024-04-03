import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  protected currentLanSubject = new BehaviorSubject<number>(1);
  currentLan$ = this.currentLanSubject.asObservable();

  setSharedData(data: number) {
    this.currentLanSubject.next(data);
  }

  currentLan: number = 1

  changeLan(x: number){
    this.currentLan=x;
    this.setSharedData(x)  
  }

}

