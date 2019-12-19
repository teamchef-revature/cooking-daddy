import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../../cook/recipe';
import { Flavor } from '../../shared/ingredient/flavor';
import { Ingredient } from '../../shared/ingredient/ingredient';
import { Category } from '../../shared/ingredient/category';
import { AdminService } from '../../shared/person/admin.service';
import { RecipeComp } from '../../cook/recipecomp';

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

  addedComponentList: RecipeComp[];
  addedComponent: RecipeComp;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.addedComponentList = new Array();
    this.addedComponent = new RecipeComp();

    this.adminService.getFlavors().subscribe(
      (f) => {
        this.flavorList = f;
        if (this.recipe.components) {
          this.recipe.components.forEach(
            rc => {
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
              if (rc.ingredient) {
                this.ingredientList.splice(this.ingredientList.indexOf(rc.ingredient, 1));
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
              if (rc.category) {
                this.categorieList.splice(this.categorieList.indexOf(rc.category, 1));
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
      if(this.addedComponent.flavor === flavor) {
        this.addedComponent.quantity++;
      }
      this.addedComponent.flavor = flavor;
      this.recipe.components.push(this.addedComponent);
    } else {
      flavor = new Flavor();
    }
  }

  addIngredient(ingredient: Ingredient): void {
    if (ingredient) {
    } else {
      ingredient = new Ingredient();
    }
  }

  addCategory(category: Category): void {
    if (category) {
    } else {
      category = new Category();
    }
  }

  removeFlavor(flavor: Flavor): void {
    if (flavor) {
      this.flavorList.push(flavor);
    } else {
      flavor = new Flavor();
    }
  }

  removeIngredient(ingredient: Ingredient): void {
    if (ingredient) {
    } else {
      ingredient = new Ingredient();
    }
  }

  removeCategory(category: Category): void {
    if (category) {
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
