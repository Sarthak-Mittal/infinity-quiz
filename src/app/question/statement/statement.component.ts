import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  @Input() statement: string;
  @Input() options: string[];
  @Output() selectedOpt = new EventEmitter<string>();

  returnedOpt(optionSelected) {
    this.selectedOpt.emit(optionSelected)
  }
  
  constructor() { }

  ngOnInit(): void {

  }

}
