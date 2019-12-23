import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/person/person';
import { LeaderboardService } from './leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  private people: Person[];

  constructor(private ldbService: LeaderboardService) { }

  ngOnInit() {
    this.ldbService.getLeaderBoard().subscribe(
      resp => {
        this.people = resp;
      },
      error => {
        window.alert('Couldn\'t find the leaderboard. Try again.');
      }
    );
  }

}
