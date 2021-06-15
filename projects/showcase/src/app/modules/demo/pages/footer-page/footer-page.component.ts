import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-demo-footer-page',
  templateUrl: './footer-page.component.html',
  styleUrls: ['./footer-page.component.scss']
})
export class FooterPageComponent implements OnInit {
  footerHtmlCode = `
    <footer class="shadow-top">
      <div class="row p-1">
        <div class="col-9"></div>
        <div class="col-3 d-flex flex-column align-items-end">
          <div class="product-name">{{ productName }} My<span class="text-black">Product</span></div>
          <div class="small">{{ now | date:'EEEE dd LLLL yyyy' }}</div>
        </div>
      </div>
    </footer>
`;
  constructor() { }

  ngOnInit(): void {
  }

}
