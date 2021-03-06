import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDistComponent } from './view-dist.component';

describe('ViewDistComponent', () => {
  let component: ViewDistComponent;
  let fixture: ComponentFixture<ViewDistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
