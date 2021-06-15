import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerStatusService } from '../../service/spinner-status.service';

@Component({
  selector: 'lib-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  @Input() showSprinner: boolean;
  @Input() size: number;
  width: number;
  height: number;
  @Input() customClass: string;

  constructor(private spinnerService: SpinnerStatusService) { }

  ngOnInit(): void {
    if (!this.size) {
      this.height = 5;
      this.width = 5;
    } else {
      this.height = this.size;
      this.width = this.size;
    }
    if (!this.showSprinner) {
      this.showSprinner = false;
      this.subscription = this.spinnerService.loaderState
      .subscribe((data) => {
        this.showSprinner = data;
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
