import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeMenuComponent } from './tree-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TreeMenuComponent],
  exports: [
    TreeMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TreeMenuModule { }
