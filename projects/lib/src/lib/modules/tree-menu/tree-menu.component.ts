import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { TreeMenuModel } from './tree-menu';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TreeMenuComponent implements OnInit {
  @Input() menuItems: Array<TreeMenuModel>;
  @Input() classNames: string;

  constructor(public router: Router) {

  }

  ngOnInit(): void {}

  clickItem(item: TreeMenuModel, $event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    item.expanded = !item.expanded;
  }

  changeRoute(item: TreeMenuModel, $event: MouseEvent): void {
    if (item.routerLink) {
      this.router.navigateByUrl(item.routerLink);
    }
  }
}
