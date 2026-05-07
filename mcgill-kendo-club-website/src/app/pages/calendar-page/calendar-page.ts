import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { GeneralHeader } from "@app/components/general-header/general-header";
import { GeneralFooter } from "@app/components/general-footer/general-footer";

@Component({
  selector: 'app-calendar-page',
  imports: [GeneralHeader, GeneralFooter, TranslatePipe],
  templateUrl: './calendar-page.html',
  styleUrl: './calendar-page.scss',
})
export class CalendarPage {}
