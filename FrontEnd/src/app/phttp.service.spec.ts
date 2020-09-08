import { TestBed, inject } from '@angular/core/testing';

import { PhttpService } from './phttp.service';

describe('PhttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhttpService]
    });
  });

  it('should be created', inject([PhttpService], (service: PhttpService) => {
    expect(service).toBeTruthy();
  }));
});
