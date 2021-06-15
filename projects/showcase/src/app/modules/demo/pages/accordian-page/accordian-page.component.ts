import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-demo-accordian-page',
  templateUrl: './accordian-page.component.html',
  styleUrls: ['./accordian-page.component.scss']
})
export class AccordianPageComponent implements OnInit {

expanded = false;

  constructor() { }

  ngOnInit(): void {
  }

  open(lib): void {
    lib.openAccordion();
  }

  close(lib): void {
    lib.closeAccordion();
  }

}
