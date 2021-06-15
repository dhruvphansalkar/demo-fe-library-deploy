import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: []
})
export class FooterComponent implements OnInit {
  @Input() productName: string;
  now: number;

  constructor() {
    this.now = Date.now();
  }

  ngOnInit(): void {}

}
