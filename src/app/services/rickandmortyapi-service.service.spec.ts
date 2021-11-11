import { TestBed } from '@angular/core/testing';

import { RickandmortyapiServiceService } from './rickandmortyapi-service.service';

describe('RickandmortyapiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RickandmortyapiServiceService = TestBed.get(RickandmortyapiServiceService);
    expect(service).toBeTruthy();
  });
});
