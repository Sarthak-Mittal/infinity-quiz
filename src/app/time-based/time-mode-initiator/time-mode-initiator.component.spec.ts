import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeModeInitiatorComponent } from './time-mode-initiator.component';

describe('TimeModeInitiatorComponent', () => {
  let component: TimeModeInitiatorComponent;
  let fixture: ComponentFixture<TimeModeInitiatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeModeInitiatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeModeInitiatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
