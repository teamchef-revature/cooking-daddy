import { Injectable } from '@angular/core';
import { PersonService } from '../shared/person/person.service';
import { Ingredient } from '../shared/ingredient/ingredient';

@Injectable({
  providedIn: 'root'
})
export class CookService {

  constructor(private personService: PersonService) {}

  public cookMeal(ingredients: Ingredient[]) {
    console.log('Cooking!!!!!!');
  }
}
