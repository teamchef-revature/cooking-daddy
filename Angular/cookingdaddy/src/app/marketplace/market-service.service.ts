import { Injectable } from '@angular/core';
import { Person } from '../shared/person/person';
import { PersonIngredient } from '../shared/personIngredient/person-ingredient';
import { Ingredient } from '../shared/ingredient/ingredient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketServiceService {
  basketHolder: Person;
  constructor() {
    this.basketHolder = new Person();
  }
  getBasket(): Person {
    return this.basketHolder;
  }
addItem(pi: PersonIngredient) {
  const prev: number = this.basketHolder.ingredients.findIndex(perig => perig.ingredient === pi.ingredient);
  if (prev + 1) {
    this.basketHolder.ingredients[prev].inventory++;
  } else {
    this.basketHolder.ingredients.push(pi);
  }
}
}
