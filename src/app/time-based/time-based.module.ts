import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeCanvasComponent } from './time-canvas/time-canvas.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimeCanvasComponent
  ],
  exports: [
    TimeCanvasComponent
  ],
})
export class TimeBasedModule { }
