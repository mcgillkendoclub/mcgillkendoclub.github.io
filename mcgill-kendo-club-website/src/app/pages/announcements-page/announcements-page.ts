import { Component } from '@angular/core';
import { GeneralHeader } from "@app/components/general-header/general-header";
import { GeneralFooter } from "@app/components/general-footer/general-footer";
import { AnnouncementBlogPost } from '@app/components/announcement-blog-post/announcement-blog-post';
import { Announcement } from '@app/interfaces/announcement-blog-post';
import data from '@assets/announcements.json';

@Component({
  selector: 'app-announcements-page',
  imports: [GeneralHeader, GeneralFooter, AnnouncementBlogPost],
  templateUrl: './announcements-page.html',
  styleUrl: './announcements-page.scss',
})
export class AnnouncementsPage {
  announcements: Announcement[] = [...data].sort((a, b) => b.date.localeCompare(a.date));
}
