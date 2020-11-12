import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeCanvasComponent } from './time-canvas/time-canvas.component';
import { TimeLandingPageComponent } from './time-landing-page/time-landing-page.component';
import { MaterialModule } from '../shared/material';
import { ReuseModule } from '../reuse/reuse.module';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReuseModule
  ],
  declarations: [
    TimeCanvasComponent,
    TimeLandingPageComponent
  ],
  exports: [
    TimeCanvasComponent
  ],
})
export class TimeBasedModule { }
