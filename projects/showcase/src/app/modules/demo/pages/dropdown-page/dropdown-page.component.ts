import { Component, OnInit, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DropdownModel } from '@library/lib/models';

@Component({
  selector: 'ng-demo-dropdown-page',
  templateUrl: './dropdown-page.component.html',
  styleUrls: ['./dropdown-page.component.scss']
})
export class DropdownPageComponent implements OnInit {

  inline = true;

  filterForm: FormGroup = new FormGroup({});
  dropDownControl;
  constructor() {
    const def: DropdownModel = {
      label: 'Ajax',
      value: 'ajx'
    };
    this.filterForm.addControl('abc', new FormControl(def));
  }

  ngOnInit(): void {
  }

  valueChange(): void {
    this.filterForm.reset();
  }

  valueChange2(): void {
    console.log(this.filterForm.value);
  }

}
