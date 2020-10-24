import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoPlayerCanvasComponent } from './two-player-canvas/two-player-canvas.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TwoPlayerCanvasComponent
  ],
  exports: [
    TwoPlayerCanvasComponent
  ],
})
export class TwoPlayerModule { }
