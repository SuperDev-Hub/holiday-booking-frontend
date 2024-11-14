import { TestBed } from '@angular/core/testing';

import { SingleRoomService } from './singleroom.service';

describe('SingleroomService', () => {
  let service: SingleRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SingleRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
