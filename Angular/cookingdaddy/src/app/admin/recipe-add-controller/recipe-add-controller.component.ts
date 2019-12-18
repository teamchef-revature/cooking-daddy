import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../../cook/recipe';
import { Flavor } from '../../shared/ingredient/flavor';
import { Ingredient } from '../../shared/ingredient/ingredient';
import { Category } from '../../shared/ingredient/category';
import { AdminService } from '../../shared/person/admin.service';
import { RecipeComp } from '../../cook/recipecomp';
import { Thecomp } from 'src/app/cook/thecomp';

@Component({
  selector: 'app-recipe-add-controller',
  templateUrl: './recipe-add-controller.component.html',
  styleUrls: ['./recipe-add-controller.component.css']
})
export class RecipeAddControllerComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  @Output() created = new EventEmitter<Boolean>();
  @Input() recipe: Recipe;
  flavors: Flavor[];
  ingredients: Ingredient[];
  categories: Category[];
  recipeComp: Thecomp;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getFlavors().subscribe(
      (f) => {
        this.flavors = f;
        if (this.recipe.components) {
          this.recipe.components.forEach(
            rc => {
              if (rc.component.flavor) {
                this.flavors.splice(this.flavors.indexOf(rc.component.flavor, 1));
              }
            });
        }
        this.flavors.sort((f1, f2) => f1.id - f2.id);
      });
    this.adminService.getIngredients().subscribe(
      (i) => {
        this.ingredients = i;
        if (this.recipe.components) {
          this.recipe.components.forEach(
            rc => {
              if (rc.component.ingredient) {
                this.ingredients.splice(this.ingredients.indexOf(rc.component.ingredient, 1));
              }
            });
        }
        this.ingredients.sort((i1, i2) => i1.id - i2.id);
      });
    this.adminService.getCategories().subscribe(
      (c) => {
        this.categories = c;
        if (this.recipe.components) {
          this.recipe.components.forEach(
            rc => {
              if (rc.component.category) {
                this.categories.splice(this.categories.indexOf(rc.component.category, 1));
              }
            });
        }
        this.categories.sort((c1, c2) => c1.id - c2.id);
      });
  }

  addFlavor(flavor: Flavor): void {
    console.log('Add Flavor: ' + flavor.name);
    this.recipeComp.component.flavor = flavor;
    this.recipe.components.push(this.recipeComp);
    this.flavors.splice(this.flavors.indexOf(flavor, 1));
  }

  addIngredient(ingredient: Ingredient): void {
    this.recipeComp.component.ingredient = ingredient;
    this.recipe.components.push(this.recipeComp);
    this.ingredients.splice(this.ingredients.indexOf(ingredient, 1));
  }

  addCategory(category: Category): void {
    this.recipeComp.component.category = category;
    this.recipe.components.push(this.recipeComp);
    this.categories.splice(this.categories.indexOf(category, 1));
  }

  removeFlavor(flavor: Flavor): void {
    this.recipeComp.component.flavor = flavor;
    this.recipe.components.splice(this.recipe.components.indexOf(this.recipeComp, 1));
    this.flavors.push(flavor);
  }

  removeIngredient(ingredient: Ingredient): void {
    this.recipeComp.component.ingredient = ingredient;
    this.recipe.components.splice(this.recipe.components.indexOf(this.recipeComp, 1));
    this.ingredients.push(ingredient);
  }

  removeCategory(category: Category): void {
    this.recipeComp.component.category = category;
    this.recipe.components.splice(this.recipe.components.indexOf(this.recipeComp, 1));
    this.categories.push(category);
  }

  addRecipe() {
    this.adminService.addRecipe(this.recipe).subscribe(
      recipe => {
        this.recipe = recipe;
        this.created.emit(true);
      });
  }
}
