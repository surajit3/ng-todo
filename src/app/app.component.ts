import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  mode = '';
  constructor() {
    // Retrieve 'mode' from localStorage
    const storedMode = localStorage.getItem('mode');
        
    // Initialize 'mode' with the retrieved value or default to 'light'
    this.mode = storedMode ? storedMode : 'light'; // or another default value
  }

  toggleMode() {
    this.mode = (this.mode == 'light') ? 'dark' : 'light';
    localStorage.setItem('mode', this.mode);
  }

  title = 'todos';
}
