import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zen-landing-page',
  templateUrl: './zen-landing-page.component.html',
  styleUrls: ['./zen-landing-page.component.css']
})
export class ZenLandingPageComponent implements OnInit {

  selectedDifficulty = 'medium';

  constructor() { }

  ngOnInit(): void {
  }

}
