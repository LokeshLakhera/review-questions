import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswersComponent } from './answers/answers.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path : '',component : FormComponent},
  {path : 'form/builder',component : FormComponent},
  {path : 'form/answer',component : AnswersComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
