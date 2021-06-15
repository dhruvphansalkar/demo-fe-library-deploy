import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillTabComponent } from './pill-tab.component';

describe('PillTabComponent', () => {
  let component: PillTabComponent;
  let fixture: ComponentFixture<PillTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
