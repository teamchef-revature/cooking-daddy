import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/cook/recipe';
import { Category } from 'src/app/shared/ingredient/category';
import { Flavor } from 'src/app/shared/ingredient/flavor';
import { AdminService } from 'src/app/shared/person/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeComp } from 'src/app/cook/recipecomp';
import { Ingredient } from 'src/app/shared/ingredient/ingredient';

@Component({
  selector: 'app-recipe-edit-controller',
  templateUrl: './recipe-edit-controller.component.html',
  styleUrls: ['./recipe-edit-controller.component.css']
})
export class RecipeEditControllerComponent implements OnInit {
  public recipe: Recipe;
  public flavorList: Flavor[];
  public recipeFlavorList: Flavor[];
  public categoryList: Category[];
  public ingredientList: Ingredient[];

  public addedComponentList: RecipeComp[];
  public addedComponent: RecipeComp;
  public flavor: Flavor;
  public category: Category;
  public ingredient: Ingredient;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.recipe = new Recipe();
    this.recipe.flavor = new Flavor();
    this.addedComponentList = new Array();
    this.addedComponent = new RecipeComp();
    this.ingredient = null;
    this.flavor = null;
    this.category = null;

    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.adminService.getRecipe(id).subscribe(
        recipe => {
          this.recipe = recipe;
          this.addedComponentList = recipe.component;
        });
      } else {
        this.recipe = new Recipe();
    }
    this.adminService.getFlavors().subscribe(
      flavors => {
        this.flavorList = flavors;
        this.recipeFlavorList = flavors;
      });
    this.adminService.getCategories().subscribe(
      categories => {
        this.categoryList = categories;
      });
    this.adminService.getIngredients().subscribe(
      ingredients => {
        this.ingredientList = ingredients;
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

  changeRecipeFlavor(flavor: Flavor) {
    if (flavor.name) {
      this.recipe.flavor = flavor;
    }
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

  remove(component: RecipeComp) {
    this.addedComponentList.splice(this.addedComponentList.indexOf(component), 1);
  }
  submit(): void {
    this.recipe.component = new Array();
    this.recipe.component = this.addedComponentList;
    // this.recipe.flavor = this.flavor;
    console.log(this.addedComponentList);
    console.log(this.flavor);
    console.log(this.recipe);
    this.adminService.updateRecipe(this.recipe).subscribe(
      recipe => {
        this.recipe = recipe;
        this.router.navigate(['/admin/recipe']);
      });
  }
  cancel(): void {
    this.router.navigate(['/admin/recipe']);
  }
}
