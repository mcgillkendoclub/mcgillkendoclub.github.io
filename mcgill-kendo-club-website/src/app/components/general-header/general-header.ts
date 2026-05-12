import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-general-header',
  imports: [RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './general-header.html',
  styleUrl: './general-header.scss',
})
export class GeneralHeader {
  menuOpen = false;
  activeDropdown: string | null = null;

  constructor(private translate: TranslateService) {}

  get currentLang(): string { 
    return this.translate.getCurrentLang() || 'en'; 
  }

  setLang(lang: string): void {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  toggleMenu(): void { 
    this.menuOpen = !this.menuOpen; 
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.activeDropdown = null;
  }

  toggleDropdown(name: string, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.activeDropdown = this.activeDropdown === name ? null : name;
  }
}
