import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  @Input() options: string[];
  @Input() correctAns: string;
  @Output() result = new EventEmitter<boolean>();


  answerGiven: boolean;
  optionChosen: string;

  selected(option: string){
    if(! this.answerGiven){
      this.answerGiven = true
      this.optionChosen = option
      if(option === this.correctAns){
        // alert("Correct")
        this.result.emit(true);
      }else{
        // alert("Wrong")
        this.result.emit(false);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.answerGiven = false;
  }

}
