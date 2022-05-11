import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {
  review : any;
  constructor(private commonService : CommonService) { }
  ngOnInit(): void {
    this.review = this.commonService.getReviewAnswer();
  }
}
