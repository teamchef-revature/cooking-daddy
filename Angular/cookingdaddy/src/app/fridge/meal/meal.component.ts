import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../../cook/meal';
import { CookService } from '../../cook/cook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  @Input() private currentMeal: Meal;
  @Input() private parentName: string;
  constructor(private cookService: CookService, private router: Router) { }

  ngOnInit() {
    if (!this.currentMeal) {
      this.currentMeal = this.cookService.getMeal();
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
    if (this.parentName === 'fridge') {
      this.router.navigate(['/fridge']);
    }
    else if (this.parentName === 'restaurant') {
      this.router.navigate(['/cook']);
    }
  }
}
