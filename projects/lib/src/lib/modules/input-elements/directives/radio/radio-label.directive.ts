import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'label[libRadioLabel]',
  exportAs: 'libRadioLabel'
})
export class RadioLabelDirective {

  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'custom-control-radio-button-label-demo');
  }
}
