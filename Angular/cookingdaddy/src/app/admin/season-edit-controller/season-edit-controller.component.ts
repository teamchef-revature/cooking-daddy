import { Component, OnInit } from '@angular/core';
import { Season } from 'src/app/shared/ingredient/season';
import { SeasonService } from 'src/app/shared/ingredient/season.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-season-edit-controller',
  templateUrl: './season-edit-controller.component.html',
  styleUrls: ['./season-edit-controller.component.css']
})
export class SeasonEditControllerComponent implements OnInit {
  public season: Season;
  public startD: string;
  public endD: string;
  public recur: boolean;

  constructor(
    private seasonService: SeasonService,
    private route: ActivatedRoute,
    private router: Router,
    private dpipe: DatePipe
    ) { }

  ngOnInit() {
    this.season = new Season();
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.seasonService.getSeason(id).subscribe(
        season => {
          this.season = season;
          this.startD = this.dpipe.transform(
            this.seasonService.convertedToDates(season).start, 'yyyy-MM-dd');
          this.endD = this.dpipe.transform(
          this.seasonService.convertedToDates(season).end, 'yyyy-MM-dd');
          this.recur = this.seasonService.convertedToDates(season).recur;
        });
    } else {
      this.season = new Season();
      this.startD = this.dpipe.transform(new Date(), 'yyyy-MM-dd');
      this.endD = this.dpipe.transform(new Date(), 'yyyy-MM-dd');
      this.recur = false;
    }
  }
  submit(): void {
    const sd = new Date(this.startD);
    const ed = new Date(this.endD);
    const seasave = this.seasonService.toSeason(this.season.name, sd, ed, this.recur);
    seasave.id = this.season.id;
    this.seasonService.updateSeason(seasave).subscribe(
      season => {
        this.router.navigate(['/admin/season']);
      });
  }

  cancel(): void {
    this.router.navigate(['/admin/season']);
  }
}
