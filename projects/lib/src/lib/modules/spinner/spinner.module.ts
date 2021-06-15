import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { SpinnerStatusService } from './service/spinner-status.service';



@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent
  ],
  providers: [SpinnerStatusService]
})
export class SpinnerModule { }
