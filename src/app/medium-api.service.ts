import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MediumPostListResponse } from './constants';

@Injectable({
  providedIn: 'root'
})
export class MediumApiService {

  constructor(private readonly http: HttpClient,) { }

  getPosts(): Observable<MediumPostListResponse> {
    return this.http.get<MediumPostListResponse>('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@michaelhelfrich');
  }
}
