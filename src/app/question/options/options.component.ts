import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  @Input() options: string[];
  @Output() selectedOption = new EventEmitter<string>();



  selected(option: string){
    this.selectedOption.emit(option);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
