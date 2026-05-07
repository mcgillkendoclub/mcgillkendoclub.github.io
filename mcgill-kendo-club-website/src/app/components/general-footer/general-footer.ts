import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-general-footer',
  imports: [TranslatePipe],
  templateUrl: './general-footer.html',
  styleUrl: './general-footer.scss',
})
export class GeneralFooter {
  get currentYear(): number {
    return new Date().getFullYear();
  }
}
