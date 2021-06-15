import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillTabSetComponent } from './pill-tab-set.component';

describe('PillTabSetComponent', () => {
  let component: PillTabSetComponent;
  let fixture: ComponentFixture<PillTabSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillTabSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillTabSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
