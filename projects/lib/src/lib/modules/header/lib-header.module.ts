import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibHeaderComponent } from './component/lib-header/lib-header.component';



@NgModule({
  declarations: [LibHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [LibHeaderComponent]
})
export class HeaderModule { }
