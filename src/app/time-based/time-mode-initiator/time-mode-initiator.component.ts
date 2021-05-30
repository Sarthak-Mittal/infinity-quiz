import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-time-mode-initiator',
  templateUrl: './time-mode-initiator.component.html',
  styleUrls: ['./time-mode-initiator.component.css']
})
export class TimeModeInitiatorComponent implements OnInit {

  selectedCategory: string;
  selectedDifficulty: string;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {

    this.sharedService.hasGameStarted.next(true);

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
