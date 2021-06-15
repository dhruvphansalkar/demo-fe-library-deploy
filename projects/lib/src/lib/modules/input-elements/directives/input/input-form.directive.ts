import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input:not([type=checkbox];[type=radio])[libInputForm], textarea[libInputForm]',
  exportAs: 'libInputForm',
})
export class InputFormDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'form-control-demo');
  }

}
