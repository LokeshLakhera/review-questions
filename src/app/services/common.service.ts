import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  // addQuestions(data:any){
  //   localStorage.setItem('data',JSON.stringify(data));
  // }
  reviewAnswer(data:any){
    localStorage.setItem('review',JSON.stringify(data));
  }
  getReviewAnswer(){
    let res :any= localStorage.getItem('review');
    return JSON.parse(res);
  }
}
