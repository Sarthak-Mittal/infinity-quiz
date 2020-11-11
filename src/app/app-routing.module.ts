import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeLandingPageComponent } from './time-based/time-landing-page/time-landing-page.component';
import { TwoPlayerCanvasComponent } from './two-player/two-player-canvas/two-player-canvas.component';
import { ZenLandingPageComponent } from './zen-mode/zen-landing-page/zen-landing-page.component';


const routes: Routes = [
  {path:'zen', component: ZenLandingPageComponent},
  {path:'time', component: TimeLandingPageComponent},
  {path:'multiplayer', component: TwoPlayerCanvasComponent},
  {path: '', redirectTo: '/zen', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
