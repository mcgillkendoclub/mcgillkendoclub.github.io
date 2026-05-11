import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { GeneralFooter } from '../../components/general-footer/general-footer';
import { GeneralHeader } from '../../components/general-header/general-header';
import { AnnouncementBlogPost } from '../../components/announcement-blog-post/announcement-blog-post';
import { Announcement } from '@app/interfaces/announcement-blog-post';
import data from '@assets/announcements.json';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, GeneralHeader, GeneralFooter, TranslatePipe, AnnouncementBlogPost],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  latestAnnouncement: Announcement | null = (data as unknown as Announcement[])
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))[0] ?? null;
}
