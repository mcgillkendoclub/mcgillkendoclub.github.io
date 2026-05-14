import { Component, ChangeDetectorRef, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { GeneralHeader } from "@app/components/general-header/general-header";
import { GeneralFooter } from "@app/components/general-footer/general-footer";
import { PricingCard } from "@app/components/pricing-card/pricing-card";
import data from "@assets/pricing-info.json";
import { PricingCardInfo } from '@app/interfaces/pricing-card-info';

@Component({
  selector: 'app-signup-page',
  imports: [GeneralHeader, GeneralFooter, PricingCard, TranslatePipe],
  templateUrl: './signup-page.html',
  styleUrl: './signup-page.scss',
})
export class SignupPage {
  readonly pricingCards: PricingCardInfo[] = data.membershipOptions;
  readonly paymentEmail: string = 'mcgillkendoclub@gmail.com';
  emailCopied: boolean = false;
  emailFading: boolean = false;
  private copyTimer: ReturnType<typeof setTimeout> | null = null;
  private cdr = inject(ChangeDetectorRef);

  copyEmail() {
    navigator.clipboard.writeText(this.paymentEmail);
    this.emailCopied = true;
    this.emailFading = false;
    if (this.copyTimer) clearTimeout(this.copyTimer);
    this.copyTimer = setTimeout(() => {
      this.emailFading = true;
      this.cdr.markForCheck();
      setTimeout(() => {
        this.emailCopied = false;
        this.emailFading = false;
        this.cdr.markForCheck();
      }, 400);
    }, 1600);
  }
}
