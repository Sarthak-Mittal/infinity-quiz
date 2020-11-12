import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from 'src/app/reuse/components/bottom-sheet/bottom-sheet.component';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  gameStarted: boolean = false;

  constructor(
    private bottomSheet: MatBottomSheet,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {

    this.sharedService.hasGameStarted.subscribe(
      val => {
        this.gameStarted = val
      }
    )

  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent);
  }

}
