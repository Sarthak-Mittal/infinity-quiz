import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoPlayerLandingPageComponent } from './two-player-landing-page.component';

describe('TwoPlayerLandingPageComponent', () => {
  let component: TwoPlayerLandingPageComponent;
  let fixture: ComponentFixture<TwoPlayerLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoPlayerLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoPlayerLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
