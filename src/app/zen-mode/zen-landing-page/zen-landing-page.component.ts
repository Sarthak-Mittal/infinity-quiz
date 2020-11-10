import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Observable } from 'rxjs';
import { SettingsComponent } from 'src/app/shared/components/settings/settings.component';
import { Category } from 'src/app/shared/interface/category';
import { CategoryService } from 'src/app/shared/services/category.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-zen-landing-page',
  templateUrl: './zen-landing-page.component.html',
  styleUrls: ['./zen-landing-page.component.css']
})
export class ZenLandingPageComponent implements OnInit {


  selectedCategory = '';
  selectedDifficulty = 'medium';


  constructor(
    private categoryService: CategoryService,
    private _bottomSheet: MatBottomSheet,
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


  openBottomSheet(): void {
    this._bottomSheet.open(SettingsComponent);
  }

}
