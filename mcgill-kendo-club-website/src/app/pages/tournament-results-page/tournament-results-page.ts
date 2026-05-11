import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { GeneralHeader } from "@app/components/general-header/general-header";
import { GeneralFooter } from "@app/components/general-footer/general-footer";
import { TournamentPost } from '@app/components/tournament-post/tournament-post';
import { TournamentResult } from '@app/interfaces/tournament-results';
import data from '@assets/tournaments-results.json';

@Component({
  selector: 'app-tournament-results-page',
  imports: [GeneralHeader, GeneralFooter, TranslatePipe, TournamentPost],
  templateUrl: './tournament-results-page.html',
  styleUrl: './tournament-results-page.scss',
})
export class TournamentResultsPage {
  readonly tournaments: TournamentResult[] = (data as unknown as TournamentResult[])
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
}
