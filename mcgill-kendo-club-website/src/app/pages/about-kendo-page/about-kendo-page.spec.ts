import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutKendoPage } from './about-kendo-page';

describe('AboutKendoPage', () => {
  let component: AboutKendoPage;
  let fixture: ComponentFixture<AboutKendoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutKendoPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutKendoPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
