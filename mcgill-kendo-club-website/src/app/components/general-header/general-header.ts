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
  constructor(private translate: TranslateService) {}

  get currentLang() { return this.translate.getCurrentLang() || 'en'; }

  setLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
}
