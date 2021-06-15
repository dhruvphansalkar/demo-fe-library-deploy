import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input[type=radio][libRadioForm]',
  exportAs: 'libRadioForm',
})
export class RadioFormDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'form-radio-demo');
  }

}
