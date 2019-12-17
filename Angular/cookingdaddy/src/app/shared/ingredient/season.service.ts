import { Injectable } from '@angular/core';
import { Season } from './season';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  private startTime: Date;
  private endTime: Date;
  private today: Date = new Date();
  constructor() { }

  public convertedToDates(s: Season) {
    if (s.timeStart) {
      this.startTime = new Date(s.timeStart);
      if (s.recurring) {
        this.startTime.setFullYear(this.today.getFullYear());
      }
    } else {
      this.startTime = null;
    }
    if (s.timeEnd) {
      this.endTime = new Date(s.timeEnd);
      if (s.recurring) {
        this.endTime.setFullYear(this.today.getFullYear());
      }
    } else {
      this.endTime = null;
    }
    return {start: this.startTime, end: this.endTime};
  }

  public inSeason(s: Season): boolean {
    this.convertedToDates(s);
    if (!this.startTime || this.today >= this.startTime ) {
      if (!this.endTime || this.today <= this.endTime) {
        return true;
      }
    } else {
      // only occurs if season is recurring and it jumps over new year
      if (this.today <= this.endTime) {
        return true;
      }
    }
    return false;
  }

  public anyInSeason(ss: Season[]): boolean {
    ss.forEach(el => {if (this.inSeason(el)) {
      return true;
    }});
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
}
