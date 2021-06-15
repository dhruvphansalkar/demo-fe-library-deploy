import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input[type=checkbox][libCheckboxForm]',
  exportAs: 'libCheckboxForm',
})
export class CheckboxFormDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'form-checkbox-demo');
  }

}
