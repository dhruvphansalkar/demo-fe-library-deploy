import { Component, OnInit, Input, forwardRef, Output, EventEmitter, ViewChild, ContentChildren, QueryList, AfterContentChecked, ViewChildren, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { DropdownModel } from '../../../../models/dropdown/dropdown.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { NgbDropdownConfig, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { DropdownOptionComponent } from '../dropdown-option/dropdown-option.component';
@Component({
  selector: 'lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DropdownComponent), multi: true },
  ]

})
export class DropdownComponent implements OnInit, ControlValueAccessor, AfterViewInit {

  @ContentChildren(DropdownOptionComponent) optionsList: QueryList<DropdownOptionComponent>;

  labelList: string[] = [];
  @Input() isDisabled: false | true = false;
  @Input() defaultLabel = '';
  @Input() blockButton: false | true = false;
  @Input() placement = 'bottom-left';
  @Output() valueChange = new EventEmitter();
  @ViewChild(NgbDropdown) dropdown;
  arrowToggleController: true | false = false;
  controlValue: DropdownModel;
  initDone = false;
  outerHTML = '<div _ngcontent-dmi-c122=""><div _ngcontent-dmi-c132=""> che <span _ngcontent-dmi-c132="" style="color: red;">123</span></div>Chelsea </div>';
  constructor(private cd: ChangeDetectorRef, private ngbDropdownConfig: NgbDropdownConfig) {
    this.ngbDropdownConfig.placement = this.placement;
  }

  onChange: (item) => void;
  onTouched: () => void;

  ngOnInit(): void {
    this.initDone = true;
  }

  ngAfterViewInit(): void {
    this.optionsList.toArray().forEach((element, index) => {
      this.labelList[index] = element.outerHtml;
    });
    this.cd.detectChanges();
  }

  onSelectValue(item): void {
    this.controlValue = {
      label: item.optionText,
      value: item.value
    };
    this.onChange(this.controlValue.value);
    this.valueChange.emit(item.value);
  }

  writeValue(obj: DropdownModel): void {
    if (obj) {
      this.controlValue = {
        label: obj.label,
        value: obj.value
      };
      setTimeout(() => {this.onChange(this.controlValue.value); }, 1);
    } else {
      this.controlValue = {
        label: '',
        value: ''
      };
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  focusFunction(): void {
    this.arrowToggleController = this.isOpen();
  }

  focusOutFunction(): void {
    this.arrowToggleController = false;
  }

  private isOpen(): boolean {
    return this.dropdown.isOpen();
  }

}
