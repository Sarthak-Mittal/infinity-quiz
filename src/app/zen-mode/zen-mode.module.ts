import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZenCanvasComponent } from './zen-canvas/zen-canvas.component';
import { QuestionModule } from '../question/question.module';
import { MaterialModule } from '../shared/material';
import { ZenLandingPageComponent } from './zen-landing-page/zen-landing-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReuseModule } from '../reuse/reuse.module';


@NgModule({
  imports: [
    CommonModule,
    QuestionModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ReuseModule
  ],
  declarations: [
    ZenCanvasComponent,
    ZenLandingPageComponent
  ],
  exports:[
    // ZenCanvasComponent
  ]
})
export class ZenModeModule { }
