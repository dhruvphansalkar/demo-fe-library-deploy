import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibNavComponent } from './component/lib-nav/lib-nav.component';



@NgModule({
  declarations: [LibNavComponent],
  imports: [
    CommonModule
  ],
  exports: [LibNavComponent]
})
export class NavModule { }
