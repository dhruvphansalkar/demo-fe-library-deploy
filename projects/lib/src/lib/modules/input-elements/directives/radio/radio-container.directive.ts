import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[libRadioContainer]',
  exportAs: 'libRadioContainer'
})
export class RadioContainerDirective {
  constructor(private renderer: Renderer2, hostElement: ElementRef) {
    renderer.addClass(hostElement.nativeElement, 'custom-control');
    renderer.addClass(hostElement.nativeElement, 'custom-radio-button-demo');

  }
}