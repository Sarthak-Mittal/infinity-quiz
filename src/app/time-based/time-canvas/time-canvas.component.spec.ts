import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCanvasComponent } from './time-canvas.component';

describe('TimeCanvasComponent', () => {
  let component: TimeCanvasComponent;
  let fixture: ComponentFixture<TimeCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
