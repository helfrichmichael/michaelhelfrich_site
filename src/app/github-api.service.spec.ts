import { TestBed } from '@angular/core/testing';

import { GitHubService } from './github-api.service';

describe('GitHubService', () => {
  let service: GitHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
