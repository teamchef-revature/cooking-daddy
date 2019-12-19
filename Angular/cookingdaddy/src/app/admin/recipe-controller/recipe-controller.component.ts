import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../cook/recipe';
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
    this.recipe.flavor = null;
    this.recipe.name = null;
    this.recipe.id = null;

    this.adminService.getRecipes().subscribe(
      (r) => {
        this.recipes = r;
        console.log(this.recipes);
        this.recipes.sort((r1, r2) => r1.id - r2.id);
      });
  }

  submitted() {
    this.recipes.push(this.recipe);
    this.recipe = new Recipe();
  }
}
