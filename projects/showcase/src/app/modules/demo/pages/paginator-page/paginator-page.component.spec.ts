import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorPageComponent } from './paginator-page.component';

describe('PaginatorPageComponent', () => {
  let component: PaginatorPageComponent;
  let fixture: ComponentFixture<PaginatorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
