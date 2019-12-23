import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';
import { CookService } from '../cook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  private currentMeal: Meal;

  constructor(private cookService: CookService, private router: Router) { }

  ngOnInit() {
    this.currentMeal = this.cookService.getMeal();
    if (!this.currentMeal) {
      this.router.navigate(['/cook']);
    }
  }

  serveMeal() {
    let score;
    this.cookService.serveMeal(this.currentMeal).subscribe(
      resp => {
        score = resp;
        window.alert('The customer gave your meal a score of ' + score + '!');
      },
      error => {
        score = null;
        window.alert('The whole restaurant just disappeared! You\'re in the void!');
      }
    );
  }
}
