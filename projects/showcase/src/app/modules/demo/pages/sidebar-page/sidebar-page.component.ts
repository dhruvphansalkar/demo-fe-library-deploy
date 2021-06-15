import { Component, OnInit } from '@angular/core';
import { TreeMenuModel } from '../../../../../../../lib/src/lib/modules/tree-menu/tree-menu';

@Component({
  selector: 'ng-demo-sidebar-page',
  templateUrl: './sidebar-page.component.html',
  styleUrls: ['./sidebar-page.component.scss']
})
export class SidebarPageComponent implements OnInit {
  sidebarItems: Array<TreeMenuModel> = [
    { text: 'Input Text', routerLink: '/demo/input-text-page'},
    { text: 'Buttons', routerLink: '/demo/button-examples' },
  ];
  sidebarHtmlCode = `
    <div class="content">
      <lib-sidebar>
        <div menu>
          <lib-tree-menu [menuItems]="sidebarItems"></lib-tree-menu>
        </div>
      </lib-sidebar>
      <div class="main">
        <router-outlet></router-outlet>
      </div>
    </div>
`;
  constructor() { }

  ngOnInit(): void {
  }
}
