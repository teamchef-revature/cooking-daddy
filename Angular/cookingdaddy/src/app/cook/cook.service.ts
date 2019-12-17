import { Injectable } from '@angular/core';
import { PersonService } from '../shared/person/person.service';
import { Ingredient } from '../shared/ingredient/ingredient';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UrlService } from '../shared/url.service';

@Injectable({
  providedIn: 'root'
})
export class CookService {
  private cookURL = this.url.getUrl() + '/cook';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private personService: PersonService, private url: UrlService, private http: HttpClient) {}

  public cookMeal(ingredients: Ingredient[]) {
    console.log('Cooking!!!!!!');
    /*const body = JSON.stringify(ingredients); // `person=${newbie}`;
    console.log(body);
    return this.http.post(this.cookURL, body, { headers: this.headers, withCredentials: true }).pipe(
      map( resp => resp as Meal )
    );*/
  }
}
