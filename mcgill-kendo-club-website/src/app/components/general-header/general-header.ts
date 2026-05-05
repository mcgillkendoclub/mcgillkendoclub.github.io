import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-general-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './general-header.html',
  styleUrl: './general-header.scss',
})
export class GeneralHeader {}
