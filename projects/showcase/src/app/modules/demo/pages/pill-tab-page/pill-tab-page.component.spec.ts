import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillTabPageComponent } from './pill-tab-page.component';

describe('PillTabPageComponent', () => {
  let component: PillTabPageComponent;
  let fixture: ComponentFixture<PillTabPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillTabPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillTabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
