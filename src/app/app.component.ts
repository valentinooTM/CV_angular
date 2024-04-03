import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EmojiPipe } from './emoji.pipe';
import { HeaderComponent } from './header/header.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, NavBarComponent, EmojiPipe]
})
export class AppComponent {
  title = 'moje_cv';
}
