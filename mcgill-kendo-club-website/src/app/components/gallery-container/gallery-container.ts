import { Component, OnInit, HostListener } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { GalleryPhoto } from '@app/interfaces/gallery-photo';
import data from '@assets/gallery/photos.json';

@Component({
  selector: 'app-gallery-container',
  imports: [TranslatePipe],
  templateUrl: './gallery-container.html',
  styleUrl: './gallery-container.scss',
})
export class GalleryContainer implements OnInit {
  photos: GalleryPhoto[] = [];
  activeIndex: number | null = null;

  constructor() {}

  readonly columnCount = 3;
  columns: GalleryPhoto[][] = [];

  ngOnInit(): void {
    this.sortPhotosByDate();
  }

  private sortPhotosByDate() {
    this.photos = (data as unknown as GalleryPhoto[]).slice().sort((a, b) => b.date.localeCompare(a.date));
    this.columns = Array.from({ length: this.columnCount }, () => []);
    this.photos.forEach((photo, i) => this.columns[i % this.columnCount].push(photo));
  }

  photoSrc(filename: string): string {
    return `assets/gallery/${filename}`;
  }

  open(index: number): void {
    this.activeIndex = index;
  }

  close(): void {
    this.activeIndex = null;
  }

  prev(): void {
    if (this.activeIndex !== null)
      this.activeIndex = (this.activeIndex - 1 + this.photos.length) % this.photos.length;
  }

  next(): void {
    if (this.activeIndex !== null)
      this.activeIndex = (this.activeIndex + 1) % this.photos.length;
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent): void {
    if (this.activeIndex === null) return;
    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'ArrowRight') this.next();
  }
}
