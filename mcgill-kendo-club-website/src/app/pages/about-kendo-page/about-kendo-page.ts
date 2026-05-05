import { Component } from '@angular/core';
import { GeneralHeader } from "@app/components/general-header/general-header";
import { GeneralFooter } from "@app/components/general-footer/general-footer";

@Component({
  selector: 'app-about-kendo-page',
  imports: [GeneralHeader, GeneralFooter],
  templateUrl: './about-kendo-page.html',
  styleUrl: './about-kendo-page.scss',
})
export class AboutKendoPage {}
