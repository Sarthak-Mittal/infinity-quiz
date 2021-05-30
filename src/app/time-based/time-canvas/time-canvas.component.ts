import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { triviaResponse } from 'src/app/shared/model/triviaResponse';
import { CommonFunctionService } from 'src/app/shared/services/common-function.service';
import { TriviaDbService } from 'src/app/shared/services/trivia-db.service';

@Component({
  selector: 'app-time-canvas',
  templateUrl: './time-canvas.component.html',
  styleUrls: ['./time-canvas.component.css']
})
export class TimeCanvasComponent implements OnInit, OnChanges {

  @Input() difficulty: string;
  @Input() category: string;

  countDown: Subscription;

  inTransit: boolean = false;
  triviaResponse: triviaResponse = null;
  statement: string;
  correctAnswer: string;
  options: string[] = [];
  totalQuestions: number = 0;
  rightAnswerCount: number = 0;

  timeLeft: number;
  TOTAL_TIME: number = 100;
  TIME_INCENTIVE: number = 10;
  TIME_PENALTY: number = 10;

  constructor(private triviaDbService: TriviaDbService,
    private commonFunc: CommonFunctionService) { }

  ngOnInit(): void {

    this.totalQuestions = 0;
    this.rightAnswerCount = 0;

    this.timeLeft = this.TOTAL_TIME;
    this.countDown = interval(100).subscribe(x => {
      this.timeLeft -= 0.1;
    });
  }

  ngOnChanges() {
    this.getQuestion();
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


  getNextQuestion(isAnswerRight) {

    setTimeout(() => {
      if (isAnswerRight) {
        this.rightAnswerCount++;
        this.timeLeft += this.TIME_INCENTIVE;
      } else {
        this.timeLeft -= this.TIME_PENALTY;
      }
      this.getQuestion()
    }, 200)

  }




  ngOnDestroy() {
    this.countDown.unsubscribe();
  }

}
