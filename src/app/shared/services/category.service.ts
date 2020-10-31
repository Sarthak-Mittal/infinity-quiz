import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

   private _jsonURL = 'assets/json/category.json';

  constructor(private httpService: HttpClient) { }

  getCategories() {
    return this.httpService.get(this._jsonURL);
  }

}