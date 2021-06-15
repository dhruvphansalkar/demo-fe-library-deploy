import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-demo-go-to-top-button-page',
  templateUrl: './go-to-top-button-page.component.html',
  styleUrls: ['./go-to-top-button-page.component.scss']
})
export class GoToTopButtonPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show(button): void {
    button.showButton();
  }

  hide(button): void {
    button.hideButton();
  }

}
