import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'lib-sidebar',
  templateUrl: './lib-sidebar.component.html',
  styleUrls: ['./lib-sidebar.component.scss']
})
export class LibSidebarComponent implements OnInit {
  isCollapse = false;
  constructor() { }

  ngOnInit(): void {

  }

  collapseSidebar(): void {
    this.isCollapse = !this.isCollapse;
    const contentElement = document.getElementsByClassName('main')[0];
    contentElement.classList.toggle('sidebar-collapsed');
  }
}
