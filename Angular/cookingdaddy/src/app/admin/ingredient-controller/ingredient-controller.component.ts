import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from '../../shared/ingredient/ingredient';
import { AdminService } from '../../shared/person/admin.service';

@Component({
  selector: 'app-ingredient-controller',
  templateUrl: './ingredient-controller.component.html',
  styleUrls: ['./ingredient-controller.component.css']
})
export class IngredientControllerComponent implements OnInit {
  ingredients: Ingredient[];
  ingredient: Ingredient;

  constructor( private adminService: AdminService ) { }

  ngOnInit() {
    this.ingredient = new Ingredient();
    this.adminService.getIngredients().subscribe(
      (i) => {
        this.ingredients = i;
        this.ingredients.sort( (i1, i2) => i1.id - i2.id );
      });
  }
}
