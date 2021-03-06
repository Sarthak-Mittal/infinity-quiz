import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { timer } from 'rxjs';
import { triviaResponse } from 'src/app/shared/model/triviaResponse';
import { CommonFunctionService } from 'src/app/shared/services/common-function.service';
import { TriviaDbService } from 'src/app/shared/services/trivia-db.service';

@Component({
  selector: 'app-zen-canvas',
  templateUrl: './zen-canvas.component.html',
  styleUrls: ['./zen-canvas.component.css']
})
export class ZenCanvasComponent implements OnInit {

  @Input() difficulty: string;
  @Input() category: string;

  winRation: number = 0
  totalQuestions: number = 0
  rightAnswerCount: number = 0
  statement: string;
  options: string[] = [];
  correctAnswer: string;
  result: boolean;

  triviaResponse: triviaResponse = null;
  inTransit: boolean = false;

  constructor(private triviaDbService: TriviaDbService,
    private commonFunc: CommonFunctionService) {
  }

  ngOnInit(): void { }


  ngOnChanges() {
    this.totalQuestions = 0;
    this.rightAnswerCount = 0;
    this.calculateWinRation();
    this.getQuestion();
  }

  calculateWinRation() {
    this.winRation = (this.rightAnswerCount / this.totalQuestions) * 100
  }

  getNextQuestion(isAnswerRight) {
    if (isAnswerRight) {
      this.rightAnswerCount++
    }
    this.calculateWinRation()
    timer(1800).subscribe(x => { this.getQuestion() })
  }

  getQuestion() {
    this.inTransit = true
    this.triviaDbService.getQuestion("1", "multiple", this.difficulty, this.category).subscribe(
      (data: triviaResponse) => {

        this.triviaResponse = data;

        if (this.triviaResponse.response_code == "0") {
          this.statement = atob(this.triviaResponse.results[0].question);
          this.correctAnswer = atob(this.triviaResponse.results[0].correct_answer);
          this.options = this.commonFunc.jumbleUpOptions(this.triviaResponse.results[0].correct_answer, this.triviaResponse.results[0].incorrect_answers);
          this.totalQuestions++;
        }
        this.inTransit = false
      },
      (error) => {
        console.log(error)
      }
    )
  }






}
