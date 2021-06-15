import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoToTopButtonComponent } from './components/go-to-top-button/go-to-top-button.component';



@NgModule({
  declarations: [GoToTopButtonComponent],
  imports: [
    CommonModule
  ],
  exports:[
    GoToTopButtonComponent
  ]
})
export class GoToTopButtonModule { }
