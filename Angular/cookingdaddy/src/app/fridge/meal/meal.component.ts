import { Component, OnInit, Input } from '@angular/core';
import { Meal } from '../../cook/meal';
import { CookService } from '../../cook/cook.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  @Input() private currentMeal: Meal;
  constructor(private cookService: CookService) { }

  ngOnInit() {
    //this.currentMeal = this.cookService.getMeal();
  }
}
