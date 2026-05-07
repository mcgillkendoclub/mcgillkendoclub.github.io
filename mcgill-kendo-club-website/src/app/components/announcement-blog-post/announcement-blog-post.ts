import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Announcement } from '@app/interfaces/announcement-blog-post';

@Component({
  selector: 'app-announcement-blog-post',
  imports: [DatePipe],
  templateUrl: './announcement-blog-post.html',
  styleUrl: './announcement-blog-post.scss',
})
export class AnnouncementBlogPost {
  @Input() announcement!: Announcement;
}
