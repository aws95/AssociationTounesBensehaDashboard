import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewViolationsComponent } from './view-violations.component';

describe('ViewViolationsComponent', () => {
  let component: ViewViolationsComponent;
  let fixture: ComponentFixture<ViewViolationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewViolationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewViolationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
