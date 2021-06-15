import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ng-demo-nav-page',
  templateUrl: './nav-page.component.html',
  styleUrls: ['./nav-page.component.scss']
})
export class NavPageComponent implements OnInit {
  dataFromChild: number;
    navMenu: object = [
    { label: 'Vendite Attive', path: '#' },
    { label: 'Opportunity', path: '#' },
    { label: 'Vendite Estine', path: '#' }
  ];
  constructor() { }

  ngOnInit(): void { }

  receivedNavIndex(navIndex): void {
    this.dataFromChild = navIndex;
    console.log('Index of the selected nav is ' + navIndex);
  }
}
