import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeCanvasComponent } from './time-based/time-canvas/time-canvas.component';
import { TwoPlayerCanvasComponent } from './two-player/two-player-canvas/two-player-canvas.component';
import { ZenCanvasComponent } from './zen-mode/zen-canvas/zen-canvas.component';


const routes: Routes = [
  {path:'zen', component: ZenCanvasComponent},
  {path:'time', component: TimeCanvasComponent},
  {path:'multiplayer', component: TwoPlayerCanvasComponent},
  {path: '', redirectTo: '/zen', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
