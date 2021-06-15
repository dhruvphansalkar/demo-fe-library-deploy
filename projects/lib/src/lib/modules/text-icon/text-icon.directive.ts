import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[textIconDemo]',
})
export class TextIconDirective implements OnInit {
  @Input() iconClass: string[];

  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    this.createIcon();
  }

  createTextElement(): any {
    return this.render.createText(this.el.nativeElement.textContent);
  }

  createIconElement(): any {
    const iconElement = this.render.createElement('i');
    this.iconClass.forEach((icon) => this.render.addClass(iconElement, icon));
    return iconElement;
  }

  removeElementText(element: any): void {
    element.textContent = '';
  }

  appendIconElement(element, iconElement, textElement): void {
    this.render.appendChild(element, iconElement);
    this.render.appendChild(element, textElement);
  }

  createIcon(): void {
    const element = this.el.nativeElement;
    const textElement = this.createTextElement();
    this.removeElementText(element);
    const iconElement = this.createIconElement();
    this.appendIconElement(element, iconElement, textElement);
  }
}
