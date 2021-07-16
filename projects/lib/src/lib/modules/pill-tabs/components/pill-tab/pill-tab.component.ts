import { Component, OnInit, Input, EventEmitter, Output, AfterViewInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'lib-pill-tab',
  templateUrl: './pill-tab.component.html',
  styleUrls: ['./pill-tab.component.scss']
})
export class PillTabComponent implements OnInit {

  @Input() title: string;
  titleCssClass: string;
  titleStyleColor: string;
  bodyCssClass: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
