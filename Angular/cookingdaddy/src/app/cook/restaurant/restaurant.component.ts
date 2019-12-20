import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';
import { CookService } from '../cook.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  private currentMeal: Meal;

  constructor(private cookService: CookService) { }

  ngOnInit() {
  }

  serveMeal(meal: Meal) {
    let score;
    this.cookService.serveMeal(meal).subscribe(
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
