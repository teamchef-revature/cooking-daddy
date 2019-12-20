import { Injectable } from '@angular/core';
import { PersonService } from '../shared/person/person.service';
import { Ingredient } from '../shared/ingredient/ingredient';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UrlService } from '../shared/url.service';
import { Equipment } from '../shared/equipment/equipment';
import { Person } from '../shared/person/person';
import { Meal } from './meal';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CookService {
  private cookURL = this.url.getUrl() + '/cook';
  private serveURL = this.url.getUrl() + '/serve';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private currentMeal: Meal;

  constructor(private personService: PersonService, private url: UrlService, private http: HttpClient) {}

  public cookMeal(ingredients: Ingredient[], equipment: Equipment) {
    const person = this.personService.getPerson();
    const body = JSON.stringify(ingredients);
    const myUrl = this.cookURL + '/' + equipment.id + '/' + person.id;
    return this.http.put(myUrl, body, { headers: this.headers, withCredentials: true }).pipe(
      map( resp => {
        const meal: Meal = resp as Meal;
        if (meal) {
          this.currentMeal = meal;
        }
        return meal;
      } )
    );
  }

  public serveMeal(meal: Meal) {
    const person = this.personService.getPerson();
    const body = JSON.stringify(meal);
    const myUrl = this.serveURL + '/' + person.id;
    return this.http.put(myUrl, body, { headers: this.headers, withCredentials: true }).pipe(
      map( resp => resp as number )
    );
  }

  public getMeal(): Meal {
    return this.currentMeal;
  }
}
