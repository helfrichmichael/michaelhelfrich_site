import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GitHubUserRepositoriesResponse } from './constants';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  constructor(private readonly http: HttpClient) {}

  getRepositories(): Observable<GitHubUserRepositoriesResponse[]> {
    return this.http.get<GitHubUserRepositoriesResponse[]>('https://api.github.com/users/helfrichmichael/repos');
  }
}
