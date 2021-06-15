import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-demo-spinner-page',
  templateUrl: './spinner-page.component.html',
  styleUrls: ['./spinner-page.component.scss']
})
export class SpinnerPageComponent implements OnInit {

  showSpinner = false;
  spinnerHtmlCode = `<div *ngIf="showSprinner">
  <div class="spinner-backdrop" [ngClass]="{'show': showSprinner}"></div>
</div>
<div class="text-center spinner-container" [hidden]="!showSprinner">
  <div class="spinner-border spinner-body" [ngClass]="customClass" [ngStyle]="{'width.rem':width,'height.rem':height}" role="status">
      <span class="sr-only">Loading...</span>
    </div>
</div>
`;
  constructor() { }

  ngOnInit(): void {
  }

  displaySpinner(): void {
    this.showSpinner = true;
    setTimeout(() => {this.showSpinner = false; }, 3000);
  }

}
