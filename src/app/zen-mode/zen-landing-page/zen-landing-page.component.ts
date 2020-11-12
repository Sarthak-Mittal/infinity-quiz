import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-zen-landing-page',
  templateUrl: './zen-landing-page.component.html',
  styleUrls: ['./zen-landing-page.component.css']
})
export class ZenLandingPageComponent implements OnInit {

  isStarted : boolean;

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

  startGame(){
    timer(700).subscribe(x=>{ 
      this.isStarted = true;
      this.sharedService.hasGameStarted.next(true);
    }) 
  }


}
