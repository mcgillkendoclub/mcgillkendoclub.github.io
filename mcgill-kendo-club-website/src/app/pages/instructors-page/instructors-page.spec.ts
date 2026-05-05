import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsPage } from './instructors-page';

describe('InstructorsPage', () => {
  let component: InstructorsPage;
  let fixture: ComponentFixture<InstructorsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstructorsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(InstructorsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
