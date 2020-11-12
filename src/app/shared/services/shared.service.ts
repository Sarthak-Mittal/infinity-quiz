import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public hasGameStarted = new BehaviorSubject<boolean>(false);

  public category = new BehaviorSubject<string>('');
  public difficulty = new BehaviorSubject<string>('medium');

  constructor() { }
}
