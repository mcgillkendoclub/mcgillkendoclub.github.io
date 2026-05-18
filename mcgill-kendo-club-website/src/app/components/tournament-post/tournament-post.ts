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

  medalImage(result: string | number): string | null {
    if (typeof result === 'string') {
      const n = result.trim().toLowerCase();
      if (n.startsWith('1')) return 'icons/gold_medal.png';
      if (n.startsWith('2')) return 'icons/silver_medal.png';
      if (n.startsWith('3')) return 'icons/bronze_medal.png';
      return null;
    }
    switch (result) {
      case 1: return 'icons/gold_medal.png';
      case 2: return 'icons/silver_medal.png';
      case 3: return 'icons/bronze_medal.png';
      default: return null;
    }
  }

  medal(result: string | number): string {
    if (typeof result === 'string') {
      return result;
    }
    switch (result) {
      case 1: return '1st';
      case 2: return '2nd';
      case 3: return '3rd';
      default: return String(result) + 'th';
    }
  }
}
