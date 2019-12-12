import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient/ingredient';
import { IngredientService } from 'src/app/shared/ingredient/ingredient.service';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit {
  ingredients: Ingredient[];
  searchText: string;
  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.ingredientService.getIngredients().subscribe(
      resp => {
        this.ingredients = resp;
      });
  }

}
