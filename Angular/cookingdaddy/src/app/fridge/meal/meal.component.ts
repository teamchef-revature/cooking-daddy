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
  constructor(private cookService: CookService, private router: Router/*, private route: ActivatedRoute*/) { }

  ngOnInit() {
    // this.currentMeal = this.cookService.getMeal();
    /*const id = +this.route.snapshot;
    if (id) {
      this.bookService.getBook(id).subscribe(
        book => {
          this.book = book;
        }
      );
    }*/
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
    this.router.navigate(['/fridge']);
  }
}
