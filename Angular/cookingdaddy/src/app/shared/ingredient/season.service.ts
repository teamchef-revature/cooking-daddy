import { Injectable, destroyPlatform } from '@angular/core';
import { Season } from './season';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UrlService } from '../url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  private startTime: Date;
  private endTime: Date;
  private recbool: boolean;
  private today: Date = new Date();
  private appUrl = this.urlService.getUrl();
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private season: Season;
  constructor(private urlService: UrlService, private http: HttpClient) { }

  public convertedToDates(s: Season) {
    if (s.timeStart) {
      this.startTime = new Date(s.timeStart);
      this.startTime.setMinutes(this.startTime.getMinutes() + this.startTime.getTimezoneOffset());
      if (s.recurring) {
        this.startTime.setFullYear(this.today.getFullYear());
        s.timeStart = this.startTime.getTime();
      }
    } else {
      this.startTime = null;
    }
    if (s.timeEnd) {
      this.endTime = new Date(s.timeEnd);
      this.endTime.setMinutes(this.endTime.getMinutes() + this.endTime.getTimezoneOffset());
      if (s.recurring) {
        this.endTime.setFullYear(this.today.getFullYear());
        s.timeEnd = this.endTime.getTime();
      }
    } else {
      this.endTime = null;
    }
    this.recbool = (s.recurring) ? true : false;
    return { start: this.startTime, end: this.endTime, recur: this.recbool };
  }

  public inSeason(s: Season): boolean {
    this.convertedToDates(s);
    if (!this.startTime || this.today >= this.startTime) {
      if (!this.endTime || this.today <= this.endTime || this.endTime < this.startTime) {
        return true;
      }
    } else {
      // only occurs if season is recurring and it jumps over new year
      if (this.endTime < this.startTime) {
        if (this.today <= this.endTime) {
          return true;
        }
      }
    }
    return false;
  }

  public anyInSeason(ss: Season[]): boolean {
    if (!ss || ss.length === 0) {
      return true;
    }
    let i: number;
    for (i = 0; i < ss.length; i++)  {
      if (this.inSeason(ss[i])) {
        return true;
      }
    }
    return false;
  }

  public toSeason(name: string, start: Date, end: Date, recurring: boolean): Season {
    const s = new Season();
    s.name = name;
    s.recurring = (recurring) ? 1 : 0;
    s.timeStart = start.getTime();
    s.timeEnd = end.getTime();
    return s;
  }

  public getSeasons(): Observable<Season[]> {
    return this.http.get(this.appUrl + '/admin/season', { withCredentials: true }).pipe(map(resp => resp as Season[]));
  }
  public getDSeasons(ss: Season[]): Season[] {
    const dseas: Season[] = [];
    ss.forEach(
      s => dseas.push(s)
    );
    return dseas;
  }
  public getSeason(id: number): Observable<Season> {
    const url: string = this.appUrl + '/admin/season/' + id;
    return this.http.get(url, { withCredentials: true }).pipe(
      map(resp => resp as Season));
  }
  public getDSeason(os: Season) {
    const dsea = new Season();
    dsea.id = os.id;
    dsea.name = os.name;
    dsea.recurring = os.recurring;
    dsea.timeEnd = os.timeEnd;
    dsea.timeStart = os.timeStart;
    return dsea;
  }
  public updateSeason(season: Season) {
    const body = JSON.stringify(season);
    if (season.id) {
      return this.http.put(this.appUrl + '/admin/season/' + season.id, body, {
        headers: this.headers, withCredentials: true
      }).pipe(map(resp => resp as Season));
    }
  }
  public addSeason(season: Season) {
    const body = JSON.stringify(season);
    return this.http.post(this.appUrl + '/admin/season', body, {
      headers: this.headers, withCredentials: true
    }).pipe(map(resp => resp as Season));
  }
}
