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
  recipeFlavorList: Flavor[];
  flavorList: Flavor[];
  ingredientList: Ingredient[];
  categorieList: Category[];

  addedComponentList: Thecomp[];
  addedComponent: Thecomp;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.addedComponentList = new Array();
    this.addedComponent = new Thecomp();
    this.addedComponent.component = new RecipeComp();

    this.adminService.getFlavors().subscribe(
      (f) => {
        this.flavorList = f;
        if (this.recipe.components) {
          this.recipe.components.forEach(
            rc => {
              if (rc.component.flavor) {
                this.recipeFlavorList.splice(this.recipeFlavorList.indexOf(rc.component.flavor, 1));
                this.flavorList.splice(this.flavorList.indexOf(rc.component.flavor, 1));
              }
            });
        }
        this.flavorList = this.abcSort(this.flavorList);
        this.recipeFlavorList = this.abcSort(this.recipeFlavorList);
      });
    this.adminService.getIngredients().subscribe(
      (i) => {
        this.ingredientList = i;
        if (this.recipe.components) {
          this.recipe.components.forEach(
            rc => {
              if (rc.component.ingredient) {
                this.ingredientList.splice(this.ingredientList.indexOf(rc.component.ingredient, 1));
              }
            });
        }
        this.ingredientList = this.abcSort(this.ingredientList);
      });
    this.adminService.getCategories().subscribe(
      (c) => {
        this.categorieList = c;
        if (this.recipe.components) {
          this.recipe.components.forEach(
            rc => {
              if (rc.component.category) {
                this.categorieList.splice(this.categorieList.indexOf(rc.component.category, 1));
              }
            });
        }
        this.categorieList = this.abcSort(this.categorieList);
      });
  }

  abcSort(anything: any[]): any[] {
    return anything.sort((a1, a2) => {
      if (a1.name < a2.name) {
        return -1;
      }
      if (a1.name > a2.name) {
        return 1;
      }
      return 0;
    });
  }

  addRecipeFlavor(flavor: Flavor): void {
    if (flavor) {
      this.recipe.flavor = flavor;
    }
  }

  addFlavor(flavor: Flavor): void {
    if (flavor) {
      if(this.addedComponent.component.flavor === flavor) {
        this.addedComponent.quantity++;
      }
      this.addedComponent.component.flavor = flavor;
      this.recipe.components.push(this.addedComponent);
      this.recipeComp.component.flavor = flavor;
    } else {
      flavor = new Flavor();
    }
  }

  addIngredient(ingredient: Ingredient): void {
    if (ingredient) {
      this.recipeComp.component.ingredient = ingredient;
    } else {
      ingredient = new Ingredient();
    }
  }

  addCategory(category: Category): void {
    if (category) {
      this.recipeComp.component.category = category;
    } else {
      category = new Category();
    }
  }

  removeFlavor(flavor: Flavor): void {
    if (flavor) {
      this.recipeComp.component.flavor = flavor;
      this.recipe.components.splice(this.recipe.components.indexOf(this.recipeComp, 1));
      this.flavorList.push(flavor);
    } else {
      flavor = new Flavor();
    }
  }

  removeIngredient(ingredient: Ingredient): void {
    if (ingredient) {
      this.recipeComp.component.ingredient = ingredient;
      this.recipe.components.splice(this.recipe.components.indexOf(this.recipeComp, 1));
      this.ingredients.push(ingredient);
    } else {
      ingredient = new Ingredient();
    }
  }

  removeCategory(category: Category): void {
    if (category) {
      this.recipeComp.component.category = category;
      this.recipe.components.splice(this.recipe.components.indexOf(this.recipeComp, 1));
      this.categories.push(category);
    } else {
      category = new Category();
    }
  }

  addRecipe() {
    this.adminService.addRecipe(this.recipe).subscribe(
      recipe => {
        this.recipe = recipe;
        this.created.emit(true);
      });
  }
}
