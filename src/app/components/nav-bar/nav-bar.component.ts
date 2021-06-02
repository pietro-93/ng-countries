import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  isSelected = true;

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleMode();
  }
  changeIcon(): void {
    this.isSelected = !this.isSelected;
  }

}
