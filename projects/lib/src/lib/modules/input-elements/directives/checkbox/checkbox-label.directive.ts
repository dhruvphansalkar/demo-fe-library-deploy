import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'label[libCheckboxLabel]',
  exportAs: 'libCheckboxLabel'
})
export class CheckboxLabelDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'custom-control-checkbox-label-demo');
  }


}
