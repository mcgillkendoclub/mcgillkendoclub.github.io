import { Component } from '@angular/core';
import { GeneralHeader } from "@app/components/general-header/general-header";
import { GeneralFooter } from "@app/components/general-footer/general-footer";
import { PricingCard } from "@app/components/pricing-card/pricing-card";
import data from "@assets/pricing-info.json";
import { PricingCardInfo } from '@app/interfaces/pricing-card-info';

@Component({
  selector: 'app-signup-page',
  imports: [GeneralHeader, GeneralFooter, PricingCard],
  templateUrl: './signup-page.html',
  styleUrl: './signup-page.scss',
})
export class SignupPage {
  readonly pricingCards: PricingCardInfo[] = data.membershipOptions;
}
