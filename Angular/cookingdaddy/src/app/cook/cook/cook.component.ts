import { Component, OnInit } from '@angular/core';
import { PersonIngredient } from '../../shared/personIngredient/person-ingredient';
import { IngredientService } from '../../shared/ingredient/ingredient.service';
import { PersonService } from '../../shared/person/person.service';
import { PersonEquipment } from '../../shared/equipment/person-equipment';

@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})
export class CookComponent implements OnInit {
  private ingredients: PersonIngredient[];
  private chosenIngredients: PersonIngredient[];
  private equipment: PersonEquipment[];
  private chosenEquipment: PersonEquipment;

  constructor(private ingredientService: IngredientService, private personService: PersonService) { }

  ngOnInit() {
    // get the current user's ingredients and equipment to populate the dropdowns
    this.ingredients = this.personService.getPerson().ingredients;
    this.equipment = this.personService.getPerson().equipments;
    // initialize chosen
    this.chosenIngredients = new Array();
    this.chosenEquipment = null;
  }

  addIngredient(i: PersonIngredient) {
    // add to chosen
    this.chosenIngredients.push(i);
    // decrement inventory or remove from dropdown
    const index = this.ingredients.indexOf(i);
    if (this.ingredients[index].inventory > 0) {
      this.ingredients[index].inventory--;
    } else {
      this.ingredients.splice(this.ingredients.indexOf(i), 1);
    }
  }

  removeIngredient(i: PersonIngredient) {
    // remove from chosen
    this.chosenIngredients.splice(this.chosenIngredients.indexOf(i), 1);
    // increment inventory or add to dropdown
    if (this.ingredients.includes(i)) {
      const index = this.ingredients.indexOf(i);
      this.ingredients[index].inventory++;
    } else {
      this.ingredients.push(i);
      const index = this.ingredients.indexOf(i);
      this.ingredients[index].inventory++;
    }
  }

  chooseEquipment(eq: PersonEquipment) {
    if (!this.chosenEquipment) {
      this.chosenEquipment = new PersonEquipment();
    }
    // set equipment as chosen
    this.chosenEquipment = eq;
  }

}
