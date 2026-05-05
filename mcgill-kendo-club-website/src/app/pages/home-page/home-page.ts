import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GeneralFooter } from '../../components/general-footer/general-footer';
import { GeneralHeader } from '../../components/general-header/general-header';

@Component({
  selector: 'app-home-page',
  imports: [
    RouterLink,
    GeneralHeader,
    GeneralFooter
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
