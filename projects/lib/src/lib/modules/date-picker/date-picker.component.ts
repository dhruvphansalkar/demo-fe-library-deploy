import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { DatePickerConfig } from '../../models/date-picker/date-picker-config.model';
import { DatePickerI18nService, I18n } from './date-picker-i18n.service';

@Component({
  selector: 'lib-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DatePickerComponent), multi: true },
    {provide: NgbDatepickerI18n, useClass: DatePickerI18nService},
    I18n
  ]
})
export class DatePickerComponent implements OnInit, ControlValueAccessor {
  value: NgbDate | null;
  disabled = false;
  @Input() config: DatePickerConfig;
  @Input() id = 'date-picker';
  @Input() label = 'Date Picker';
  @Input() footerText = 'today';
  @Output() todayClick: EventEmitter<NgbDate> = new EventEmitter<NgbDate>();

  onChange = (_) => { };
  onTouched = () => { };

  constructor(
    private dateAdapter: NgbDateParserFormatter,
    private calendar: NgbCalendar
  ) {
  }

  ngOnInit(): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: NgbDate): void {
    this.value = value ? value : null;
  }

  onTodayClick($event): void {
    const today = this.calendar.getToday();
    this.todayClick.emit(today);
  }
}
