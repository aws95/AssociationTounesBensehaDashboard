import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistComponent } from './dist.component';

describe('DistComponent', () => {
  let component: DistComponent;
  let fixture: ComponentFixture<DistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
