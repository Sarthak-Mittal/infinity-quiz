import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatementComponent } from './statement/statement.component';
import { OptionsComponent } from './options/options.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StatementComponent, OptionsComponent,],
  exports: [StatementComponent],
})
export class QuestionModule { }
