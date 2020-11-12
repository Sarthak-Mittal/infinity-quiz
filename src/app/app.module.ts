import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './shared/material';
import { ZenModeModule } from './zen-mode/zen-mode.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';
import { TimeBasedModule } from './time-based/time-based.module';
import { TwoPlayerModule } from './two-player/two-player.module';
import { TriviaDbService } from './shared/services/trivia-db.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './shared/services/category.service';
import { SharedService } from './shared/services/shared.service';
import { ReuseModule } from './reuse/reuse.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ZenModeModule,
    TimeBasedModule,
    TwoPlayerModule,
    HttpClientModule,
    ReuseModule
  ],
  providers: [
    TriviaDbService, 
    CategoryService,
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
