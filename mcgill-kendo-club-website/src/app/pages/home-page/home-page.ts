import { Component } from '@angular/core';
import { GeneralFooter } from '../../components/general-footer/general-footer';
import { GeneralHeader } from '../../components/general-header/general-header';

@Component({
  selector: 'app-home-page',
  imports: [
    GeneralHeader,
    GeneralFooter
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}
