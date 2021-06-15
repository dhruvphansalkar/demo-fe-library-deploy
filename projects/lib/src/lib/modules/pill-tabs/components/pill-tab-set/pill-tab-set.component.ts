import { Component, OnInit, QueryList, ContentChildren, ViewEncapsulation, Output, EventEmitter, AfterViewInit, Input } from '@angular/core';

import { PillTabComponent } from '../pill-tab/pill-tab.component';

@Component({
  selector: 'lib-pill-tab-set',
  templateUrl: './pill-tab-set.component.html',
  styleUrls: ['./pill-tab-set.component.scss']
})
export class PillTabSetComponent implements OnInit, AfterViewInit {

  @ContentChildren(PillTabComponent) tabInstances: QueryList<PillTabComponent>;
  @Output() tabClickEvent = new EventEmitter();
  @Input() selectedTabIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {this.tabClicked(this.selectedTabIndex); }, 1);
  }

  tabClicked(selectedIndex: number): void {
    if (this.tabInstances !== undefined && this.tabInstances !== null) {
      this.tabInstances.forEach((element, elIndex) => {
        if (elIndex === selectedIndex) {
          element.titleCssClass = 'title-active';
          element.bodyCssClass = 'active show';
        } else {
          element.titleCssClass = '';
          element.bodyCssClass = 'zero-size';
        }
      });
    }
    this.tabClickEvent.emit(selectedIndex);
  }
}
