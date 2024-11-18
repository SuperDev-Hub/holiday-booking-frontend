import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDetailsComponent } from './bookingdetails.component';

describe('BookingdetailsComponent', () => {
  let component: BookingDetailsComponent;
  let fixture: ComponentFixture<BookingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
