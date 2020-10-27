import { Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { triviaResponse } from 'src/app/shared/model/triviaResponse';
import { TriviaDbService } from 'src/app/shared/services/trivia-db.service';

@Component({
  selector: 'app-zen-canvas',
  templateUrl: './zen-canvas.component.html',
  styleUrls: ['./zen-canvas.component.css']
})
export class ZenCanvasComponent implements OnInit {

  @Input() difficulty: string;

  statement: string;
  options: string[] = [];
  correctAnswer: string;
  result: boolean;

  triviaResponse: triviaResponse = null;
  inTransit: boolean = false;

  constructor(private triviaDbService: TriviaDbService) {
  }

  ngOnInit(): void { }
  
  ngOnChanges(){
    this.getQuestion();
  }

  getNextQuestion(event) {
    timer(1800).subscribe(x=>{ this.getQuestion() })
  }

  getQuestion() {
    this.inTransit = true
    this.triviaDbService.getQuestion("1", "multiple", this.difficulty).subscribe(
      (data: triviaResponse) => {


        this.triviaResponse = data;

        if (this.triviaResponse.response_code == "0") {
          this.statement = atob(this.triviaResponse.results[0].question);
          this.correctAnswer = atob(this.triviaResponse.results[0].correct_answer);
          this.options = this.jumbleUpOptions(this.triviaResponse.results[0].correct_answer, this.triviaResponse.results[0].incorrect_answers);
        }
        this.inTransit = false
      },
      (error) => {
        console.log(error)
      }
    )
  }

  jumbleUpOptions(correct: string, incorrect: string[]) {

    let options: string[] = [];
    options.push(atob(correct))
    incorrect.forEach((elem) => {
      options.push(atob(elem))
    })

    for (let i = 0; i <= this.getRandomInt(10); i++) {
      let temp;
      let a = this.getRandomInt(4)
      let b = this.getRandomInt(4)
      temp = options[a]
      options[a] = options[b]
      options[b] = temp
    }
    return options
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }




}
