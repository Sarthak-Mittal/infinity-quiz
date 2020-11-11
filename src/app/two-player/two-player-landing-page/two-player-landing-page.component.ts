import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-two-player-landing-page',
  templateUrl: './two-player-landing-page.component.html',
  styleUrls: ['./two-player-landing-page.component.css']
})
export class TwoPlayerLandingPageComponent implements OnInit {

  isStarted : boolean;

  selectedCategory: string;
  selectedDifficulty: string;

  constructor(
    private sharedService: SharedService) {

  }

  ngOnInit(): void {

    this.isStarted = false;

    this.sharedService.difficulty.subscribe(
      val => {
        this.selectedDifficulty = val
      }
    )

    this.sharedService.category.subscribe(
      val => {
        this.selectedCategory = val
      }
    )

  }

  startGame(){
    timer(800).subscribe(x=>{ 
      this.isStarted = true;
    }) 
  }

}
