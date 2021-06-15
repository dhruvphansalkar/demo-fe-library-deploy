import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaPageComponent } from './text-area-page.component';

describe('TextAreaPageComponent', () => {
  let component: TextAreaPageComponent;
  let fixture: ComponentFixture<TextAreaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextAreaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
