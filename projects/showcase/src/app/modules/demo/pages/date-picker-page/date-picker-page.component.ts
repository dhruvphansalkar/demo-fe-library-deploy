import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerConfig } from '@library/lib/models';

@Component({
  selector: 'ng-demo-date-picker-page',
  templateUrl: './date-picker-page.component.html',
  styleUrls: ['./date-picker-page.component.scss']
})
export class DatePickerPageComponent implements OnInit {
  datePickerConfig: DatePickerConfig;

  datePickerForm: FormGroup;
  model: NgbDateStruct;
  exampleWithRawModel = `
    <div class="row">
      <lib-date-picker
        label="Date Picker"
        id="datepicker-2"
        class="col-3"
        [config]="datePickerConfig"
        [(ngModel)]="model"
        (todayClick)="setTodayDate($event)"
      ></lib-date-picker>
    </div>`;
  exampleWithFormControl = `
    <div class="row">
      <div class="col-5">
        <form [formGroup]="datePickerForm">
          <lib-date-picker
            label="Date Picker"
            id="datepicker-1"
            [config]="datePickerConfig"
            [formControl]="datePickerForm.get('dateControl')"
            (todayClick)="setTodayDate($event)"
          ></lib-date-picker>
        </form>
      </div>
    </div>`;
  constructor(private fb: FormBuilder, private calendar: NgbCalendar) {
    this.datePickerConfig = {
      autoClose: true,
      placeholder: 'Date Placeholder',
      showLabel: false,
      placement: 'bottom'
    };
    this.datePickerForm = fb.group({
      dateControl: [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    console.log(this.datePickerForm);
  }

  disableForm(): void {
    this.datePickerForm.disable();
  }
  enableForm(): void {
    this.datePickerForm.enable();
  }

  setTodayDateFormControl($event: NgbDate): void {
    const dateString = this.calendar.getToday();
    const dateControl = this.datePickerForm.get('dateControl') as FormControl;
    dateControl.setValue(dateString);
  }
  setTodayDateRawModel($event: NgbDate): void {
    this.model  = this.calendar.getToday();

  }
}
