import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @Input() expanded: boolean;
  @Output() expansionChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggle(): boolean {
    this.expanded = !this.expanded;
    this.expansionChange.emit(this.expanded);
    return this.expanded;
  }

  public isExpanded(): boolean {
    return this.expanded;
  }

  public openAccordion(): void {
    this.expanded = true;
    this.expansionChange.emit(this.expanded);
  }

  public closeAccordion(): void {
    this.expanded = false;
    this.expansionChange.emit(this.expanded);
  }

}
