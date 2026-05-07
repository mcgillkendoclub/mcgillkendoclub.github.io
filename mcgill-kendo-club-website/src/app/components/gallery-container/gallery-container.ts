import { Component, OnInit, HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GalleryPhoto } from '@app/interfaces/gallery-photo';
import data from '@assets/gallery/photos.json';

@Component({
  selector: 'app-gallery-container',
  imports: [],
  templateUrl: './gallery-container.html',
  styleUrl: './gallery-container.scss',
})
export class GalleryContainer implements OnInit {
  photos: GalleryPhoto[] = [];
  activeIndex: number | null = null;

  constructor(private http: HttpClient) {}

  readonly columnCount = 3;
  interleavedPhotos: GalleryPhoto[] = [];

  ngOnInit() {
    this.sortPhotos();
  }
  sortPhotos(){
    this.photos = [...data].sort((a, b) => b.date.localeCompare(a.date));
    const cols: GalleryPhoto[][] = Array.from({ length: this.columnCount }, () => []);
    this.photos.forEach((photo, index) => cols[index % this.columnCount].push(photo));
    this.interleavedPhotos = cols.flat();
  }

  photoSrc(filename: string): string {
    return `assets/gallery/${filename}`;
  }

  open(index: number) {
    this.activeIndex = index;
  }

  close() {
    this.activeIndex = null;
  }

  prev() {
    if (this.activeIndex !== null)
      this.activeIndex = (this.activeIndex - 1 + this.photos.length) % this.photos.length;
  }

  next() {
    if (this.activeIndex !== null)
      this.activeIndex = (this.activeIndex + 1) % this.photos.length;
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (this.activeIndex === null) return;
    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'ArrowRight') this.next();
  }
}
