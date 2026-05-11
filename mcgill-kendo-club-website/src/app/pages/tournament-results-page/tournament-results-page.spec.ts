import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentResultsPage } from './tournament-results-page';

describe('TournamentResultsPage', () => {
  let component: TournamentResultsPage;
  let fixture: ComponentFixture<TournamentResultsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TournamentResultsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TournamentResultsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
