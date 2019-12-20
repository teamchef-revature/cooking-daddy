import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../cook/recipe';
import { Flavor } from '../../shared/ingredient/flavor';
import { AdminService } from '../../shared/person/admin.service';

@Component({
  selector: 'app-recipe-controller',
  templateUrl: './recipe-controller.component.html',
  styleUrls: ['./recipe-controller.component.css']
})
export class RecipeControllerComponent implements OnInit {
  recipes: Recipe[];
  recipe: Recipe;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.recipe = new Recipe();
    this.recipe.components = new Array();
    this.recipe.flavor = new Flavor();
    this.recipe.name = null;
    this.recipe.id = null;

    this.adminService.getRecipes().subscribe(
      (r) => {
        this.recipes = r;
        this.recipes.sort((r1, r2) => (r1.name > r2.name) ? 1 : -1);
      });
  }

  submitted() {
    this.recipes.push(this.recipe);
    this.recipe = new Recipe();
    this.recipe.components = new Array();
    this.recipe.flavor = new Flavor();
    this.recipe.name = null;
    this.recipe.id = null;
  }
}
