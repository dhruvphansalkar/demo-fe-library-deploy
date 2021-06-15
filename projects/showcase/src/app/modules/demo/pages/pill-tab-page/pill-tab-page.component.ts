import { Component, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ng-demo-pill-tab-page',
  templateUrl: './pill-tab-page.component.html',
  styleUrls: ['./pill-tab-page.component.scss']
})
export class PillTabPageComponent implements OnInit {

  footerHtmlCode = `<lib-pill-tab-set [selectedTabIndex] = "1" (tabClickEvent) = "doSomeThing($event)">
  <lib-pill-tab [title]="'Selector'">
     <code>
      &lt;lib-pill-tab-set&gt;<br>
          &nbsp;&lt;lib-pill-tab [title]="'Properties'"&gt;<br>
          &nbsp;&nbsp;Content of the tab<br>
          &nbsp;&lt;/lib-pill-tab&gt;<br>
      &lt;/lib-pill-tab-set&gt;<br>
     </code>
  </lib-pill-tab>
  <lib-pill-tab [title]="'Properties'">
      1. [title] : pass the title of each tab.<br>
      2. [(active)] : define which tab will be active on load.
  </lib-pill-tab>
  <lib-pill-tab [title]="'TypeScript'">
      ngAfterViewInit(): void &#123;<br>
      &nbsp;this.cdr.detectChanges();<br>
      &#125;
  </lib-pill-tab>
</lib-pill-tab-set>`;

  constructor(private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
  }

  doSomeThing(data): void {
    console.log(data);
  }

}
