import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[libCheckboxContainer]',
  exportAs: 'libCheckboxContainer'
})
export class CheckboxContainerDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'custom-control');
    renderer.addClass(hostElement.nativeElement, 'custom-checkbox-demo');
  }


}
