import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'lib-nav',
  templateUrl: './lib-nav.component.html',
  styleUrls: ['./lib-nav.component.scss']
})
export class LibNavComponent implements OnInit {
  @Input() navMenu: object;
  @Output() navEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}

  onSelectionChange(event): void {
    this.navEvent.emit(event);
  }
}
