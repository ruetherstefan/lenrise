/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArrayService } from './array.service';

describe('ArrayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArrayService]
    });
  });

  it('should ...', inject([ArrayService], (service: ArrayService) => {
    expect(service).toBeTruthy();
  }));
});
