/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BibliothekService } from './bibliothek.service';

describe('BibliothekService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BibliothekService]
    });
  });

  it('should ...', inject([BibliothekService], (service: BibliothekService) => {
    expect(service).toBeTruthy();
  }));
});
