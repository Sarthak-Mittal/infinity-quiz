import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeInfoComponent } from './time-based/time-info/time-info.component';
import { TimeLandingPageComponent } from './time-based/time-landing-page/time-landing-page.component';
import { TimeModeInitiatorComponent } from './time-based/time-mode-initiator/time-mode-initiator.component';
import { TwoPlayerLandingPageComponent } from './two-player/two-player-landing-page/two-player-landing-page.component';
import { ZenLandingPageComponent } from './zen-mode/zen-landing-page/zen-landing-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/zen', pathMatch: 'full' },
  { path: 'zen', component: ZenLandingPageComponent },
  {
    path: 'time',
    component: TimeLandingPageComponent,
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: TimeInfoComponent },
      { path: 'start', component: TimeModeInitiatorComponent }
    ]
  },
  { path: 'multiplayer', component: TwoPlayerLandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
