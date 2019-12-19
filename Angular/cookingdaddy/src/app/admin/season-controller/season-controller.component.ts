import { Component, OnInit } from '@angular/core';
import { Season } from 'src/app/shared/ingredient/season';
import { SeasonService } from 'src/app/shared/ingredient/season.service';

@Component({
  selector: 'app-season-controller',
  templateUrl: './season-controller.component.html',
  styleUrls: ['./season-controller.component.css']
})
export class SeasonControllerComponent implements OnInit {
  seasons: Season[];
  season: Season;
  constructor( private seasonService: SeasonService ) { }

  ngOnInit() {
    this.season = new Season();
    this.seasonService.getSeasons().subscribe(
      s => {
        this.seasons = s;
        this.seasons.sort( (s1, s2) => {
          if (s1.timeStart === s2.timeStart) {
            if (s1.timeEnd === s2.timeEnd) {
              return s1.id - s2.id;
            } else {
              return s1.timeEnd - s2.timeEnd;
            }

          } else {
            return s1.timeStart - s2.timeStart;
          }
          });
      });
  }
  getDsea(se: Season) {
    return this.seasonService.getDSeason(se);
  }

  submitted() {
    this.seasons.push(this.season);
    this.season = new Season();
  }
}
