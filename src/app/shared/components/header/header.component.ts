import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private bottomSheet: MatBottomSheet,
  ) { }

  ngOnInit(): void {
  }

  openBottomSheet(): void {
    this.bottomSheet.open(SettingsComponent);
  }

}
