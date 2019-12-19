import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Season } from 'src/app/shared/ingredient/season';
import { SeasonService } from 'src/app/shared/ingredient/season.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-season-item-controller',
  templateUrl: './season-item-controller.component.html',
  styleUrls: ['./season-item-controller.component.css']
})
export class SeasonItemControllerComponent implements OnInit {
  @Input() season: Season;
  constructor(
    private seasonService: SeasonService,
    private router: Router,
    private route: ActivatedRoute,
    private dpipe: DatePipe,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.seasonService.getSeason(id).subscribe(
        season => {
          this.season = season;
        });
    }
  }

  editSeason() {
    this.router.navigate(['/admin/season', this.season.id]);
  }

  pipeDate(num: number): string {
    return this.dpipe.transform(new Date(num), 'dd MMM yyyy');
  }

  inSeason(s: Season) {
    return this.seasonService.inSeason(s);
  }
}
