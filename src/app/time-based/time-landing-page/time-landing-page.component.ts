import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-time-landing-page',
  templateUrl: './time-landing-page.component.html',
  styleUrls: ['./time-landing-page.component.css']
})
export class TimeLandingPageComponent implements OnInit {

  isStarted: boolean;

  selectedCategory: string;
  selectedDifficulty: string;

  constructor(
    private sharedService: SharedService) {

  }

  ngOnInit(): void {

    this.isStarted = false;
    this.sharedService.hasGameStarted.next(false);

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

  startGame() {
    timer(800).subscribe(x => {
      this.isStarted = true;
      this.sharedService.hasGameStarted.next(true);
    })
  }


}
