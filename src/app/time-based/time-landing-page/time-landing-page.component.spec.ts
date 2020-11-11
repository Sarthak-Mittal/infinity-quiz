import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLandingPageComponent } from './time-landing-page.component';

describe('TimeLandingPageComponent', () => {
  let component: TimeLandingPageComponent;
  let fixture: ComponentFixture<TimeLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
