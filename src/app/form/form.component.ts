import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  reviewForm: any = FormGroup;
  questionForm: any = FormGroup;
  display = true;
  questions: any = [];
  addQuestionModal: boolean = false;
  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private route: Router
  ) { }

  ngOnInit() {
    this.reviewForm = this.fb.group({
      about: ['', Validators.required],
    });
    this.questionForm = this.fb.group({
      type: ['', Validators.required],
      question: ['', Validators.required],
      answer: [''],
      options: this.fb.array([]),
    });
  }
  typeChange(value: string) {
    if (value == 'CHECKBOX') {
      this.questionForm.patchValue({ answer: [] });
    }
    else if (value == 'PARAGRAPH') {
      this.questionForm.patchValue({ answer: '' });
    }
  }
  addNewAnswerOption() {
    let classesData = this.questionForm.get('options') as FormArray;
    classesData.push(new FormControl(null));
  }
  addQuestion() {
    this.questions.push(this.questionForm.value);
    // this.commonService.addQuestions(this.questions);
    this.addQuestionModal = false;
    this.questionForm.reset();
  }
  reviewSubmit() {
    let data = this.reviewForm.value;
    data.questions = this.questions;
    this.commonService.reviewAnswer(data);
    this.route.navigate(['form/answer']);
  }
  addAnswer(event: any, index: any, value: any) {
    if (event.target.checked) {
      this.questions[index].answer.push(value);
    } else if(!event.target.checked) {
      this.questions[index].answer.splice(value,1);
    }
  }
  addParagraphAnswer(index: any, value: any) {
    this.questions[index].answer = value;
  }
  deleteOption(index: any) {
    let sections = this.questionForm.get('options') as FormArray;
    sections.removeAt(index);
  }
}
