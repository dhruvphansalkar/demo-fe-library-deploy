import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextIconDirective } from './text-icon.directive';


@NgModule({
    declarations: [TextIconDirective],
  exports: [
    TextIconDirective
  ],
    imports: [
        CommonModule
    ]
})
export class TextIconModule { }
