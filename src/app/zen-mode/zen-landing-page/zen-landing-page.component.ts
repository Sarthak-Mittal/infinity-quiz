import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/interface/category';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-zen-landing-page',
  templateUrl: './zen-landing-page.component.html',
  styleUrls: ['./zen-landing-page.component.css']
})
export class ZenLandingPageComponent implements OnInit {

  categories: Category;
  myControl = new FormControl();
  options: Category[] = [];
  filteredOptions: Observable<string[]>;

  selectedCategory = '';
  selectedDifficulty = 'medium';
  category: string;

  constructor(private categoryService: CategoryService) {

    this.categoryService.getCategories().
      subscribe(
        res => {
          this.categories = <Category>res;
          for (let cate of Object.values(this.categories)) {
            this.options.push(cate)
          }
        }
      )
  }

  ngOnInit(): void {  }

}
