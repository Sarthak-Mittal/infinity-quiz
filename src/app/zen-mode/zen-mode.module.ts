import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZenCanvasComponent } from './zen-canvas/zen-canvas.component';




@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ZenCanvasComponent
  ],
  exports:[
    ZenCanvasComponent
  ]
})
export class ZenModeModule { }
