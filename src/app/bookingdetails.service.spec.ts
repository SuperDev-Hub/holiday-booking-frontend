import { TestBed } from '@angular/core/testing';

import { BookingDetailsService } from './bookingdetails.service';

describe('BookingdetailsService', () => {
  let service: BookingDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
