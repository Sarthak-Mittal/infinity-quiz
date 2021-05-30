import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-time-info',
  templateUrl: './time-info.component.html',
  styleUrls: ['./time-info.component.css']
})
export class TimeInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  startGame() {
    this.router.navigate(['time/start']);
  }
}
