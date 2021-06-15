import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-button-page',
  templateUrl: './button-page.component.html',
  styleUrls: ['./button-page.component.scss']
})
export class ButtonPageComponent implements OnInit {

  buttonCode = `<button class=" btn-primary-demo m-1">Enabled primary button</button>
  <button disabled class=" btn-primary-demo m-1">Disabled primary button</button>
  <button class=" btn-success-demo m-1">Enabled success button</button>
  <button disabled class=" btn-success-demo m-1">Disabled success button</button>
  <button class=" btn-outline-primary-demo m-1">Outline Primary</button>
  <button disabled class=" btn-outline-primary-demo m-1">Disabled Outline Primary </button>
  <button class=" btn-link-demo m-1"><i class="fa fa-sign-in"></i> IMPORTA DA XML</button>
  <button disabled class=" btn-link-demo m-1"><i class="fa fa-sign-in"></i> IMPORTA DA XML</button>`;

  constructor() { }

  ngOnInit(): void {
  }

  doSomething(): void {
    console.log('This button is enabled');
  }

}
