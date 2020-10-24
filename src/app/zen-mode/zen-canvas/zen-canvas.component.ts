import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zen-canvas',
  templateUrl: './zen-canvas.component.html',
  styleUrls: ['./zen-canvas.component.css']
})
export class ZenCanvasComponent implements OnInit {
  statement: string;
  options: string[];
  correctAnswer: string;
  selected: string;

  constructor() { }

  ngOnInit(): void {
    this.statement = "this is a test questionthis is a test questionthis is a test questionthis is a test question";
    this.options = ["optionAA", "optionBB", "option3v", "option4 s"];
    this.correctAnswer = "optionAA"
  }

}
