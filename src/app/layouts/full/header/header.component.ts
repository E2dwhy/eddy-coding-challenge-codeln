import { Component } from '@angular/core';
import { USER } from 'src/app/constants/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class AppHeaderComponent {
  selectedCountryCode = 'us';
  selectedLanguage = 'fr';
  user = USER

  countryCodes = ['us', 'lu', 'de', 'bs', 'br', 'pt'];

  changeSelectedCountryCode(value: string): void {
    this.selectedCountryCode = value;
  }
}
