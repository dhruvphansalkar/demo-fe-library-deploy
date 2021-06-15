import { Component, OnInit } from '@angular/core';
import { TreeMenuModel } from '../../../../../../../lib/src/lib/modules/tree-menu/tree-menu';

@Component({
  selector: 'ng-demo-tree-menu-page',
  templateUrl: './tree-menu-page.component.html',
  styleUrls: ['./tree-menu-page.component.scss'],
})
export class TreeMenuPageComponent implements OnInit {
  items: Array<TreeMenuModel> = [
    {
      text: 'Fruits',
      children: [
        {
          text: 'Apple',
        },
        {
          text: 'Banana',
        },
        {
          text: 'Pineapple',
        },
      ],
    },
    {
      text: 'Zucchini',
    },
    {
      text: 'Farinaceous',
      children: [
        {
          text: 'Bread',
        },
        {
          text: 'Pasta',
          children: [
            {
              text: 'Rigatoni',
            },
            {
              text: 'Maccheroni',
            },
            {
              text: 'Luca Toni',
              externalLink: 'https://it.wikipedia.org/wiki/Luca_Toni'
            },
          ],
        },
      ],
    },
  ];
  treeMenuHtmlCode = `<lib-tree-menu [menuItems]="items"></lib-tree-menu>`;

  constructor() {}

  ngOnInit(): void {}
}
