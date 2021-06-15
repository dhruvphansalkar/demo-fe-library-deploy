import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class SpinnerStatusService {
  private loaderSubject = new Subject<boolean>();
  loaderState = this.loaderSubject.asObservable();
  constructor() { }

  show(): void {
    document.body.style.position = 'fixed';
    document.body.style.overflow = 'hidden';
    this.loaderSubject.next(true);
  }

  hide(): void {
    document.body.style.position = '';
    document.body.style.overflow = '';
    this.loaderSubject.next(false);
  }
}
