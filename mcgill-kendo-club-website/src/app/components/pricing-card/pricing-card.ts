import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-pricing-card',
  imports: [TranslatePipe],
  templateUrl: './pricing-card.html',
  styleUrl: './pricing-card.scss',
})
export class PricingCard {
  @Input() price!: string;
  @Input() semester!: string;
  @Input() pricingInterval!: string;
  @Input() includedBenefits!: string[];
  @Input() importantNotes!: string[];
}
