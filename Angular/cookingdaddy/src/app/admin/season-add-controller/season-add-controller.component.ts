import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Season } from 'src/app/shared/ingredient/season';
import { SeasonService } from 'src/app/shared/ingredient/season.service';

@Component({
  selector: 'app-season-add-controller',
  templateUrl: './season-add-controller.component.html',
  styleUrls: ['./season-add-controller.component.css']
})
export class SeasonAddControllerComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  @Output() created = new EventEmitter<Boolean>();
  @Input() season: Season;
  public name: string;
  public startD: string;
  public endD: string;
  public recur: boolean;

  constructor(private seasonService: SeasonService) { }

  ngOnInit() {
  }

  addSeason() {
    const sd = new Date(this.startD);
    const ed = new Date(this.endD);
    const season: Season = this.seasonService.toSeason(this.name, sd, ed, this.recur);
    this.seasonService.addSeason(season).subscribe(
      seasonmade => {
        this.season = seasonmade;
        this.created.emit(true);
      });
  }
}
