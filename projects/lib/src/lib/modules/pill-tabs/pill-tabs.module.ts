import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PillTabSetComponent } from './components/pill-tab-set/pill-tab-set.component';
import { PillTabComponent } from './components/pill-tab/pill-tab.component';



@NgModule({
  declarations: [PillTabSetComponent, PillTabComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PillTabSetComponent,
    PillTabComponent
  ]
})
export class PillTabsModule { }
