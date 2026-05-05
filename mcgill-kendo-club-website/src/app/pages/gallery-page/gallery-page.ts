import { Component } from '@angular/core';
import { GeneralHeader } from "@app/components/general-header/general-header";
import { GeneralFooter } from '@app/components/general-footer/general-footer';

@Component({
  selector: 'app-gallery-page',
  imports: [GeneralHeader, GeneralFooter],
  templateUrl: './gallery-page.html',
  styleUrl: './gallery-page.scss',
})
export class GalleryPage {}
