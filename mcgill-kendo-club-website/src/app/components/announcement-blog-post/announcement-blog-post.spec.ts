import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementBlogPost } from './announcement-blog-post';

describe('AnnouncementBlogPost', () => {
  let component: AnnouncementBlogPost;
  let fixture: ComponentFixture<AnnouncementBlogPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnnouncementBlogPost],
    }).compileComponents();

    fixture = TestBed.createComponent(AnnouncementBlogPost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
