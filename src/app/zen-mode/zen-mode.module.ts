import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZenCanvasComponent } from './zen-canvas/zen-canvas.component';
import { QuestionModule } from '../question/question.module';
import { MaterialModule } from '../shared/material';


@NgModule({
  imports: [
    CommonModule,
    QuestionModule,
    MaterialModule
  ],
  declarations: [
    ZenCanvasComponent
  ],
  exports:[
    ZenCanvasComponent
  ]
})
export class ZenModeModule { }
