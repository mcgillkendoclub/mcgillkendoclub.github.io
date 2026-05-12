import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { GeneralFooter } from '../../components/general-footer/general-footer';
import { GeneralHeader } from '../../components/general-header/general-header';
import { AnnouncementBlogPost } from '../../components/announcement-blog-post/announcement-blog-post';
import { Announcement } from '@app/interfaces/announcement-blog-post';
import announcementsData from '@assets/announcements.json';
import slidesData from '@assets/home-page/slides.json';
import { HomePageSlide } from '@app/interfaces/home-page-slide';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, GeneralHeader, GeneralFooter, TranslatePipe, AnnouncementBlogPost],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage implements OnInit, OnDestroy {
  latestAnnouncement: Announcement | null = (announcementsData as unknown as Announcement[])
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))[0] ?? null;

  readonly slides: HomePageSlide[] = slidesData as unknown as HomePageSlide[];
  slideIndex = 0;
  private slideTimer: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }

  private startTimer(): void {
    if (this.slides.length > 1) {
      this.slideTimer = setInterval(() => this.nextSlide(), 5000);
    }
  }

  private stopTimer(): void {
    if (this.slideTimer) {
      clearInterval(this.slideTimer);
      this.slideTimer = null;
    }
  }

  nextSlide(): void {
    this.slideIndex = (this.slideIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.slideIndex = (this.slideIndex - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(i: number): void {
    this.stopTimer();
    this.slideIndex = i;
    this.startTimer();
  }

  slideSrc(filename: string): string {
    return `assets/home-page/${filename}`;
  }

  pauseSlideshow(): void {
    this.stopTimer(); 
  }
  
  resumeSlideshow(): void { 
    this.startTimer(); 
  }
}
