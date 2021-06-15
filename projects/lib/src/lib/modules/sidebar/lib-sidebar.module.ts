import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibSidebarComponent } from './component/lib-sidebar/lib-sidebar.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { TextIconModule } from '../text-icon/text-icon.module';


@NgModule({
  declarations: [LibSidebarComponent],
  imports: [
    CommonModule,
    NgbTypeaheadModule,
    RouterModule,
    TextIconModule
  ],
  exports: [LibSidebarComponent]
})
export class SidebarModule { }
