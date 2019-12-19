import { Injectable } from '@angular/core';
import { Person } from '../shared/person/person';
import { PersonIngredient } from '../shared/personIngredient/person-ingredient';
import { Post } from './post';
import { UrlService } from '../shared/url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RandomitemService } from '../shared/randomitem.service';
import { Ingredient } from '../shared/ingredient/ingredient';

@Injectable({
  providedIn: 'root'
})
export class MarketServiceService {
  basketHolder: Person;
  storeBasketHolder: Person;
  storePerson: Person;
  randIngred: Ingredient;
  private appUrl = this.urlService.getUrl();
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private urlService: UrlService, private http: HttpClient, private randomItemService: RandomitemService) {
    this.basketHolder = new Person();
    this.basketHolder.ingredients = [];
    this.basketHolder.equipments = [];
    this.storeBasketHolder = new Person();
    this.storeBasketHolder.ingredients = [];
    this.storePerson = new Person();
    this.storePerson.ingredients = [];
    this.setNpcIngredients();
  }
  getBasket(): Person {
    return this.basketHolder;
  }
  getStoreBasket(): Person {
    return this.storeBasketHolder;
  }
  getStorePerson(): Person {
    return this.storePerson;
  }

  addItem(pi: PersonIngredient) {
    const prev: number = this.basketHolder.ingredients.findIndex(perig => perig.ingredient === pi.ingredient);
    if (prev + 1) {
      this.basketHolder.ingredients[prev].inventory++;
    } else {
      this.basketHolder.ingredients.push(pi);
    }
  }
  addStoreItem(pi: PersonIngredient) {
    const prev: number = this.storeBasketHolder.ingredients.findIndex(perig => perig.ingredient === pi.ingredient);
    if (prev + 1) {
      this.storeBasketHolder.ingredients[prev].inventory++;
    } else {
      this.storeBasketHolder.ingredients.push(pi);
    }
  }
  restoreItem(pi: PersonIngredient, activePerson: Person) {
    console.log(activePerson);
    const prev: number = activePerson.ingredients.findIndex(perig => perig.ingredient === pi.ingredient);
    activePerson.ingredients[prev].inventory++;
  }

  

  public addPost(post: Post) {
    const body = JSON.stringify(post);
    return this.http.post(this.appUrl + '/post', body, { headers: this.headers, withCredentials: true }).pipe(
      map(resp => resp as Post)
    );
  }
  setNpcIngredients() {
    for (let i = 0; i < 5; i++) {
      this.randIngred = this.randomItemService.getRandIng();
      this.randomItemService.addIngToPer(this.randIngred, this.storePerson, 1, false);
    }
  }

}
