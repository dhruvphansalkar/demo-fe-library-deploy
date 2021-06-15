import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList, ElementRef, AfterContentInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'lib-dropdown-option',
  templateUrl: './dropdown-option.component.html',
  styleUrls: ['./dropdown-option.component.scss']
})
export class DropdownOptionComponent implements OnInit, AfterViewInit {

  @Input() value: string;

  @ViewChild('option') option: ElementRef;
  optionText: string;
  outerHtml: string;
  constructor() { }

  ngAfterViewInit(): void {
    this.optionText = this.option.nativeElement.innerText;
    this.outerHtml = this.option.nativeElement.outerHTML;
  }

  ngOnInit(): void {
  }
}
