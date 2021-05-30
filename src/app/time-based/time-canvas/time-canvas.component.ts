import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { triviaResponse } from 'src/app/shared/model/triviaResponse';
import { CommonFunctionService } from 'src/app/shared/services/common-function.service';
import { SharedService } from 'src/app/shared/services/shared.service';
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
  TOTAL_TIME: number = 50;
  TIME_INCENTIVE: number = 10;
  TIME_PENALTY: number = 10;

  gameOver: boolean;
  timeSurvived: number;

  constructor(private triviaDbService: TriviaDbService,
    private commonFunc: CommonFunctionService,
    private sharedService: SharedService,
    private router: Router) { }

  ngOnInit(): void {

    this.totalQuestions = 0;
    this.rightAnswerCount = 0;
    this.gameOver = false;
    this.timeSurvived = 0;

    this.timeLeft = this.TOTAL_TIME;
    this.countDown = interval(100).subscribe(x => {
      if (this.timeLeft > 0) {
        this.timeLeft -= 0.1;
        this.timeSurvived += 0.1;
      } else {
        this.over();;
      }
    });
  }



  ngOnChanges() {
    this.getQuestion();
  }

  over() {
    this.gameOver = true;
    this.sharedService.hasGameStarted.next(false);
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


  restartGame() {
    this.router.navigate(['time']);
  }

  ngOnDestroy() {
    this.countDown.unsubscribe();
  }

}
