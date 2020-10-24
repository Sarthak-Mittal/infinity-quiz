import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatementComponent } from './statement/statement.component';
import { OptionComponent } from './option/option.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StatementComponent, OptionComponent],
  exports: [StatementComponent],
})
export class QuestionModule { }
