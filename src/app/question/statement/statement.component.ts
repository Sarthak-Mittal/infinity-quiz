import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {

  @Input() statement: string;
  @Input() options: string[];
  @Input() correctAns: string;
  @Output() result = new EventEmitter<boolean>();

  returnedResult(result: boolean) {
    this.result.emit(result)
  }
  
  constructor() { }

  ngOnInit(): void {

  }

}
