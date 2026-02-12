import { TestBed } from '@angular/core/testing';

import { Studentslist } from './studentslist';

describe('Studentslist', () => {
  let service: Studentslist;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Studentslist);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
