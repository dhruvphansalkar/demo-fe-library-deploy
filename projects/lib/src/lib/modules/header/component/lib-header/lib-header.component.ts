import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-header',
  templateUrl: './lib-header.component.html',
  styleUrls: ['./lib-header.component.scss']
})
export class LibHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clickMenu(): void {
    console.log('clicked');
  }

}
