import { Component } from '@angular/core';
import { GeneralHeader } from "@app/components/general-header/general-header";
import { GeneralFooter } from "@app/components/general-footer/general-footer";
@Component({
  selector: 'app-tournament-results-page',
  imports: [GeneralHeader, GeneralFooter],
  templateUrl: './tournament-results-page.html',
  styleUrl: './tournament-results-page.scss',
})
export class TournamentResultsPage {}
