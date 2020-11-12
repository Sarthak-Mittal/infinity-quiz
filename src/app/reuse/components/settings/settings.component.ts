import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/interface/category';
import { CategoryService } from 'src/app/shared/services/category.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  
  categories: Category;
  options: Category[] = [];
  selectedDifficulty: string;
  selectedCategory: string;

  constructor(
    private categoryService: CategoryService,
    private sharedService: SharedService) {

    this.categoryService.getCategories().subscribe(
      res => {
        this.categories = <Category>res;
        for (let cate of Object.values(this.categories)) {
          this.options.push(cate)
        }
      }
    )
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

  onCategoryChange(value) {
    this.sharedService.category.next(value);
  }

  onDifficultyChange(value) {
    this.sharedService.difficulty.next(value);
  }
}

