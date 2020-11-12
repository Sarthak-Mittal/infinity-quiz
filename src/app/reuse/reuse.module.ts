import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { MaterialModule } from '../shared/material';



@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    SettingsComponent,
    BottomSheetComponent
  ],
  exports: [
    SettingsComponent
  ]
})
export class ReuseModule { }
