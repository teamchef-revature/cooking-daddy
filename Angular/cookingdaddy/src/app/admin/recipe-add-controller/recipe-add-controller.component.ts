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
    
  }

  
}
