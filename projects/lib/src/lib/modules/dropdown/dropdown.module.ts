import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './component/dropdown/dropdown.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownOptionComponent } from './component/dropdown-option/dropdown-option.component';
import { HtmlDesanitizationPipe } from './pipes/html-desanitization.pipe';



@NgModule({
  declarations: [DropdownComponent, DropdownOptionComponent, HtmlDesanitizationPipe],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DropdownComponent,
    DropdownOptionComponent
  ]
})
export class DropdownModule { }
