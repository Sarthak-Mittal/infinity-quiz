import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeCanvasComponent } from './time-canvas/time-canvas.component';
import { TimeLandingPageComponent } from './time-landing-page/time-landing-page.component';
import { MaterialModule } from '../shared/material';
import { ReuseModule } from '../reuse/reuse.module';
import { QuestionModule } from '../question/question.module';
import { TimeModeInitiatorComponent } from './time-mode-initiator/time-mode-initiator.component';
import { AppRoutingModule } from '../app-routing.module';
import { TimeInfoComponent } from './time-info/time-info.component';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReuseModule,
    QuestionModule,
    AppRoutingModule
  ],
  declarations: [
    TimeCanvasComponent,
    TimeLandingPageComponent,
    TimeModeInitiatorComponent,
    TimeInfoComponent
  ],
  exports: [
    TimeCanvasComponent
  ],
})
export class TimeBasedModule { }
