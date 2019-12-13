import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient/ingredient';
import { IngredientService } from '../../shared/ingredient/ingredient.service';
import { PersonService } from '../../shared/person/person.service';

@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})
export class CookComponent implements OnInit {
  private ingredients: Ingredient[];
  private chosenIngredients: Ingredient[];
  private equipment: Equipment[];
  private chosenEquipment: Equipment;

  constructor(private ingredientService: IngredientService, private personService: PersonService) { }

  ngOnInit() {
    //this.ingredients;
  }

}
