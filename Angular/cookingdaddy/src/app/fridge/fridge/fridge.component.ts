import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient/ingredient';
import { IngredientService } from 'src/app/shared/ingredient/ingredient.service';
import { PersonIngredient } from 'src/app/shared/personIngredient/person-ingredient';
import { PersonService } from 'src/app/shared/person/person.service';
import { Person } from 'src/app/shared/person/person';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit {
  personIngredients: PersonIngredient[];
  searchText: string;
  person: Person;
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.searchText = '';
    console.log(this.personService.getPerson());
    this.personIngredients = this.personService.getPerson().ingredients;
    console.log(this.personIngredients);
  }

}
