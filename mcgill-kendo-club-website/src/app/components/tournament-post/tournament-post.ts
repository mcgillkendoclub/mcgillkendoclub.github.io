import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { TournamentResult } from '@app/interfaces/tournament-results';

@Component({
  selector: 'app-tournament-post',
  imports: [TranslatePipe, DatePipe],
  templateUrl: './tournament-post.html',
  styleUrl: './tournament-post.scss',
})
export class TournamentPost {
  @Input() tournament!: TournamentResult;

  medal(result: string | number): string {
    if (typeof result === 'string') {
      const normalizedResult = result.trim().toLowerCase();
      if (normalizedResult.startsWith('1')) {
        return '🥇';
      } else if (normalizedResult.startsWith('2')) {
        return '🥈';
      } else if (normalizedResult.startsWith('3')) {
        return '🥉';
      }
      return result;
    }
    else {
      switch (result) {
        case 1: 
          return '🥇';
        case 2:
          return '🥈';
        case 3:
          return '🥉';
        default: 
          return String(result) + 'th';
      }
    }
  }
}
