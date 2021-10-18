import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import { MediumApiService } from './medium-api.service';

describe('MediumApiService', () => {
  let service: MediumApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(MediumApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
