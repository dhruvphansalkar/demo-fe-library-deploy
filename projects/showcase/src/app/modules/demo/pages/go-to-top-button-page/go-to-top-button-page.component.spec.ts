import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToTopButtonPageComponent } from './go-to-top-button-page.component';

describe('GoToTopButtonPageComponent', () => {
  let component: GoToTopButtonPageComponent;
  let fixture: ComponentFixture<GoToTopButtonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoToTopButtonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoToTopButtonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
