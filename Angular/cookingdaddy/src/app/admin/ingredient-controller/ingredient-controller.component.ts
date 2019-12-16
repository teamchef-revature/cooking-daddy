import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient/ingredient';
import { AdminService } from '../../shared/person/admin.service';
import { Category } from '../../shared/ingredient/category';
import { Flavor } from '../../shared/ingredient/flavor';
import { Quality } from '../../shared/ingredient/quality';

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
    this.ingredient.category = null;
    this.ingredient.flavor = null;
    this.ingredient.quality = null;
    this.adminService.getIngredients().subscribe(
      (i) => {
        this.ingredients = i;
        this.ingredients.sort( (i1, i2) => i1.id - i2.id );
      });
  }

  submitted() {
    this.ingredients.push(this.ingredient);
    this.ingredient = new Ingredient();
    this.ingredient.category = null;
    this.ingredient.flavor = null;
    this.ingredient.quality = null;
  }
}
