import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentPost } from './tournament-post';

describe('TournamentPost', () => {
  let component: TournamentPost;
  let fixture: ComponentFixture<TournamentPost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TournamentPost],
    }).compileComponents();

    fixture = TestBed.createComponent(TournamentPost);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
