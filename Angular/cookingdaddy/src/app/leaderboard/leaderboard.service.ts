import { Injectable } from '@angular/core';
import { UrlService } from '../shared/url.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Person } from '../shared/person/person';

@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {
  private ldbURL = this.url.getUrl() + '/leaderboard';

  constructor(private url: UrlService, private http: HttpClient) { }

  public getLeaderBoard() {
    return this.http.get(this.ldbURL, { withCredentials: true }).pipe(
      map( resp => resp as Person[] ));
  }
}
