import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { GeneralHeader } from "@app/components/general-header/general-header";
import { GeneralFooter } from "@app/components/general-footer/general-footer";

@Component({
  selector: 'app-about-kendo-page',
  imports: [GeneralHeader, GeneralFooter, TranslatePipe],
  templateUrl: './about-kendo-page.html',
  styleUrl: './about-kendo-page.scss',
})
export class AboutKendoPage {}
