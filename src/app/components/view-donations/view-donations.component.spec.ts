import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDonationsComponent } from './view-donations.component';

describe('ViewDonationsComponent', () => {
  let component: ViewDonationsComponent;
  let fixture: ComponentFixture<ViewDonationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDonationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
