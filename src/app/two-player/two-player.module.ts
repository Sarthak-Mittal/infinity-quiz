import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoPlayerCanvasComponent } from './two-player-canvas/two-player-canvas.component';
import { TwoPlayerLandingPageComponent } from './two-player-landing-page/two-player-landing-page.component';
import { MaterialModule } from '../shared/material';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    TwoPlayerCanvasComponent,
    TwoPlayerLandingPageComponent
  ],
  exports: [
    TwoPlayerCanvasComponent
  ],
})
export class TwoPlayerModule { }
