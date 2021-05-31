import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/services/shared.service';


@Component({
  selector: 'app-time-landing-page',
  templateUrl: './time-landing-page.component.html',
  styleUrls: ['./time-landing-page.component.css']
})
export class TimeLandingPageComponent implements OnInit {

  constructor(private sharedService: SharedService) {

  }

  ngOnInit(): void {
    Promise.resolve(null).then(() => { this.sharedService.hasGameStarted.next(false); })
  }
}
