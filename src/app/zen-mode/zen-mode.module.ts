import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZenCanvasComponent } from './zen-canvas/zen-canvas.component';
import { QuestionModule } from '../question/question.module';


@NgModule({
  imports: [
    CommonModule,
    QuestionModule
  ],
  declarations: [
    ZenCanvasComponent
  ],
  exports:[
    ZenCanvasComponent
  ]
})
export class ZenModeModule { }
