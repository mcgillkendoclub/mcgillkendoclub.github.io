import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralHeader } from './general-header';

describe('GeneralHeader', () => {
  let component: GeneralHeader;
  let fixture: ComponentFixture<GeneralHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
