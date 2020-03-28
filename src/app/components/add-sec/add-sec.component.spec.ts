import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecComponent } from './add-sec.component';

describe('AddSecComponent', () => {
  let component: AddSecComponent;
  let fixture: ComponentFixture<AddSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
