import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-demo-radio-button-page',
  templateUrl: './radio-button-page.component.html',
  styleUrls: ['./radio-button-page.component.scss']
})
export class RadioButtonPageComponent implements OnInit {
  value: string;

  ngOnInit(): void { }
  constructor() { }
  selectedValue(event: any): void {
    this.value = event;
    console.log(this.value);
  }
}
