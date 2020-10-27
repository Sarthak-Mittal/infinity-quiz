import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenLandingPageComponent } from './zen-landing-page.component';

describe('ZenLandingPageComponent', () => {
  let component: ZenLandingPageComponent;
  let fixture: ComponentFixture<ZenLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
