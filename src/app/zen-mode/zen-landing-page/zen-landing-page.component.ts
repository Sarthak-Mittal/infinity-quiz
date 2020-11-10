import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-zen-landing-page',
  templateUrl: './zen-landing-page.component.html',
  styleUrls: ['./zen-landing-page.component.css']
})
export class ZenLandingPageComponent implements OnInit {


  selectedCategory: string;
  selectedDifficulty: string;

  constructor(
    private sharedService: SharedService) {

  }

  ngOnInit(): void {

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




}
