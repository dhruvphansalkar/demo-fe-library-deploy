import { Component, OnInit, OnDestroy, Input, Inject, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'lib-go-to-top-button',
  templateUrl: './go-to-top-button.component.html',
  styleUrls: ['./go-to-top-button.component.scss']
})
export class GoToTopButtonComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() id: string;
  @Input() scrollHeight: number;
  @Input() customClass: string;
  @ViewChild('scrollButton') scrollButton: ElementRef;
  constructor() { }

  ngAfterViewInit(): void {
    if (this.scrollHeight) {
      this.scrollButton.nativeElement.style.display = 'none';
    } else {
      this.scrollButton.nativeElement.style.display = 'block';
    }
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  topFunction(): void {
    document.documentElement.scrollTop = 0;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event): void{
    if (this.scrollHeight) {
      if (document.documentElement.scrollTop > this.scrollHeight) {
        this.showButton();
      } else {
        this.hideButton();
      }
    }
  }

  showButton(): void {
    this.scrollButton.nativeElement.style.display = 'block';
  }

  hideButton(): void {
    this.scrollButton.nativeElement.style.display = 'none';
  }
}
