import { Component } from '@angular/core';
import { GeneralHeader } from "@app/components/general-header/general-header";
import { GeneralFooter } from "@app/components/general-footer/general-footer";

@Component({
  selector: 'app-signup-page',
  imports: [GeneralHeader, GeneralFooter],
  templateUrl: './signup-page.html',
  styleUrl: './signup-page.scss',
})
export class SignupPage {}
