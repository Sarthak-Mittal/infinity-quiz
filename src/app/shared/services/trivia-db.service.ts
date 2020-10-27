import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { triviaResponse } from '../model/triviaResponse';

const ROOT_URL : string = "https://opentdb.com/api.php"

@Injectable({
  providedIn: 'root'
})
export class TriviaDbService {

  constructor(private http: HttpClient) { }

  getQuestion(noOfQuestion: string, type:string, difficulty: string ):Observable<triviaResponse>{
    const params = new HttpParams()
      .set('type', type)
      .set('amount', noOfQuestion)
      .set('difficulty', difficulty)
      .set('encode', 'base64');
    return this.http.get<triviaResponse>(ROOT_URL, {params});
  }
}
