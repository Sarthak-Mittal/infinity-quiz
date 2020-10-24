import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenCanvasComponent } from './zen-canvas.component';

describe('ZenCanvasComponent', () => {
  let component: ZenCanvasComponent;
  let fixture: ComponentFixture<ZenCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
