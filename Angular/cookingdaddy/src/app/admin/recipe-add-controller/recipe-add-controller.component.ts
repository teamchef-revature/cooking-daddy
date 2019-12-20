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
  categoryList: Category[];

  addedComponentList: RecipeComp[];
  addedComponent: RecipeComp;
  flavor: Flavor;
  category: Category;
  ingredient: Ingredient;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.addedComponentList = new Array();
    this.addedComponent = new RecipeComp();
    this.ingredient = null;
    this.flavor = null;
    this.category = null;

    this.adminService.getFlavors().subscribe(
      flavors => {
        this.flavorList = flavors;
        this.recipeFlavorList = flavors;
        this.flavorList.sort((fl1, fl2) => (fl1.name > fl2.name) ? 1 : -1);
        this.recipeFlavorList.sort((fl1, fl2) => (fl1.name > fl2.name) ? 1 : -1);
      });

    this.adminService.getCategories().subscribe(
      categories => {
        this.categoryList = categories;
        this.categoryList.sort((cl1, cl2) => (cl1.name > cl2.name) ? 1 : -1);
      });

    this.adminService.getIngredients().subscribe(
      ingredients => {
        this.ingredientList = ingredients;
        this.ingredientList.sort((il1, il2) => (il1.name > il2.name) ? 1 : -1);
      });
  }
  addIngredient(ingredient: Ingredient) {
    this.category = null;
    this.flavor = null;
    this.ingredient = ingredient;
  }

  addCategory(category: Category) {
    this.category = category;
    this.flavor = null;
    this.ingredient = null;
  }

  addFlavor(flavor: Flavor) {
    this.category = null;
    this.flavor = flavor;
    this.ingredient = null;
  }

  addRecipeFlavor(flavor: Flavor) {
    this.recipe.flavor = flavor;
  }

  addRecipe() {
    this.adminService.addRecipe(this.recipe).subscribe(
      recipe => {
        this.recipe = recipe;
        this.created.emit(true);
      });
    this.recipe = new Recipe();
    this.recipe.component = new Array();
    this.recipe.flavor = new Flavor();
    this.addedComponentList = new Array();
  }

  remove(component: RecipeComp) {
    this.addedComponentList.splice(this.addedComponentList.indexOf(component), 1);
  }

  addComponent() {
    if (this.category) {
      this.addedComponent.category = this.category;
    }
    if (this.ingredient) {
      this.addedComponent.ingredient = this.ingredient;
    }
    if (this.flavor) {
      this.addedComponent.flavor = this.flavor;
    }
    this.category = null;
    this.ingredient = null;
    this.flavor = null;
    if (!this.addedComponent.quantity) {
      this.addedComponent.quantity = 1;
    }
    let push = true;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.addedComponentList.length; i++) {
      if (this.addedComponentList[i].category) {
        if (this.addedComponentList[i].category.name === this.addedComponent.category.name) {
          this.addedComponentList[i].quantity += this.addedComponent.quantity;
          push = false;
        }
      } else if (this.addedComponentList[i].flavor) {
        if (this.addedComponentList[i].flavor.name === this.addedComponent.flavor.name) {
          this.addedComponentList[i].quantity += this.addedComponent.quantity;
          push = false;
        }
      } else if (this.addedComponentList[i].ingredient) {
        if (this.addedComponentList[i].ingredient.name === this.addedComponent.ingredient.name) {
          this.addedComponentList[i].quantity += this.addedComponent.quantity;
          push = false;
        }
      }
    }
    if (push) {
      this.addedComponentList.push(this.addedComponent);
    }
    this.addedComponent = new RecipeComp();
  }

}
