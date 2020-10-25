import { Component, OnInit } from '@angular/core';
import { triviaResponse } from 'src/app/shared/model/triviaResponse';
import { TriviaDbService } from 'src/app/shared/services/trivia-db.service';

@Component({
  selector: 'app-zen-canvas',
  templateUrl: './zen-canvas.component.html',
  styleUrls: ['./zen-canvas.component.css']
})
export class ZenCanvasComponent implements OnInit {
  statement: string;
  options: string[] = [];
  correctAnswer: string;
  selected: string;

  triviaResponse: triviaResponse = null;

  constructor(private triviaDbService: TriviaDbService) { }

  ngOnInit(): void {

    this.getQuestion();  
  }

  getQuestion(){
    this.triviaDbService.getQuestion("1","multiple").subscribe(
      (data: triviaResponse) =>{
        this.triviaResponse = data;

        if(this.triviaResponse.response_code == "0"){
          this.statement = this.triviaResponse.results[0].question;
          this.correctAnswer = this.triviaResponse.results[0].correct_answer;
          this.options = this.jumbleUpOptions(this.triviaResponse.results[0].correct_answer, this.triviaResponse.results[0].incorrect_answers);    
        }
      },
      (error)=>{
        console.log(error)
      }
    )
  }

  jumbleUpOptions(correct: string, incorrect: string[]){

    let options: string[] = [];
    options.push(correct)
    incorrect.forEach((elem) =>{
      options.push(elem)
    })
    
    for(let i=0; i<=this.getRandomInt(10); i++){
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
