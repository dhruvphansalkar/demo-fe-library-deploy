import { Component, OnInit } from '@angular/core';
import { TreeMenuModel } from '../../../../../lib/src/lib/modules/tree-menu/tree-menu';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  sidebarItems: Array<TreeMenuModel> = [
    { text: 'Input Text', routerLink: '/demo/input-text-page' },
    { text: 'Text Area', routerLink: '/demo/text-area-examples' },
    { text: 'Checkboxes', routerLink: '/demo/checkbox-page' },
    { text: 'Radio Button', routerLink: '/demo/radio-button-example' },
    { text: 'Drop-Down', routerLink: '/demo/dropdown-examples' },
    { text: 'Date Picker', routerLink: '/demo/datepicker' },
    { text: 'Buttons', routerLink: '/demo/button-examples' },
    { text: 'Switch', routerLink: '/demo/switch-page' },
    { text: 'Footer', routerLink: '/demo/footer' },
    { text: 'Header', routerLink: '/demo/header' },
    { text: 'Go On Top Butto', routerLink: '/demo/go-to-top-button-demo' },
    { text: 'Accordion', routerLink: 'demo/accordian-examples' },
    { text: 'Navs', routerLink: '/demo/nav-page' },
    { text: 'Spinner', routerLink: '/demo/spinner-example' },
    { text: 'Tooltip', routerLink: '/demo/tooltip-page' },
    { text: 'Pills-Tab', routerLink: '/demo/pill-tab-example' },
    { text: 'Sidebar', routerLink: '/demo/sidebar-page' },
    { text: 'Tree Menu', routerLink: '/demo/tree-menu-page' },

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
