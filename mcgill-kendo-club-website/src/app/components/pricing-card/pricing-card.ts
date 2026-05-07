import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  imports: [],
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
