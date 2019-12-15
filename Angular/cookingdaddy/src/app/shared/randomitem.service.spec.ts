import { TestBed } from '@angular/core/testing';

import { RandomitemService } from './randomitem.service';

describe('RandomitemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomitemService = TestBed.get(RandomitemService);
    expect(service).toBeTruthy();
  });
});
