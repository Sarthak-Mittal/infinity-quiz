import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionService {

  constructor() { }

  jumbleUpOptions(correct: string, incorrect: string[]) {

    let options: string[] = [];
    options.push(atob(correct))
    incorrect.forEach((elem) => {
      options.push(atob(elem))
    })

    for (let i = 0; i <= this.getRandomInt(10); i++) {
      let temp;
      let a = this.getRandomInt(4)
      let b = this.getRandomInt(4)
      temp = options[a]
      options[a] = options[b]
      options[b] = temp
    }
    return options
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
