import { TestBed } from '@angular/core/testing';

import { TriviaDbService } from './trivia-db.service';

describe('TriviaDbService', () => {
  let service: TriviaDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriviaDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
