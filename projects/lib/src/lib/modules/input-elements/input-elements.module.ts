import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFormDirective } from './directives/input/input-form.directive';
import { CheckboxFormDirective } from './directives/checkbox/checkbox-form.directive';
import { CheckboxContainerDirective } from './directives/checkbox/checkbox-container.directive';
import { CheckboxLabelDirective } from './directives/checkbox/checkbox-label.directive';
import { RadioFormDirective } from './directives/radio/radio-form.directive';
import { RadioLabelDirective } from './directives/radio/radio-label.directive';
import { RadioContainerDirective } from './directives/radio/radio-container.directive';



@NgModule({
  declarations: [
    InputFormDirective,
    CheckboxFormDirective,
    CheckboxContainerDirective,
    CheckboxLabelDirective,
    RadioFormDirective,
    RadioLabelDirective,
    RadioContainerDirective],
  imports: [
    CommonModule
  ],
  exports: [InputFormDirective,
    CheckboxFormDirective,
    CheckboxContainerDirective,
    CheckboxLabelDirective,
    RadioFormDirective,
    RadioLabelDirective,
    RadioContainerDirective]
})
export class InputElementsModule { }
