import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ng-demo-switch-page',
  templateUrl: './switch-page.component.html',
  styleUrls: ['./switch-page.component.scss']
})
export class SwitchPageComponent implements OnInit {
  public myForm: FormGroup;
  label1 = 'MESE';
  label2 = 'TRIMESTRE';
  isDisable = false;
  dataFromChild: boolean;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      mySwitch: []
    });
  }

  onSelectionChange(event): void {
    console.log('Is switch active? ', event);
  }
}
