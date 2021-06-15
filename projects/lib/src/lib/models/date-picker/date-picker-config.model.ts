import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

export class DatePickerConfig {
  showLabel?: boolean;
  placeholder?: string;
  navigation?: 'arrow' | 'none' | 'select';
  placement?: 'top'          |
              'top-left'    |
              'top-right'   |
              'bottom'      |
              'bottom-left' |
              'bottom-right'|
              'left'        |
              'left-top'    |
              'left-bottom' |
              'right'       |
              'right-top'   |
              'right-bottom';
  startDate?: NgbDate;
  autoClose?: true | false | 'inside' | 'outside';
}
