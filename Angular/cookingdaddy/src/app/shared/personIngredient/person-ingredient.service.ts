import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UrlService } from '../url.service';
import { Observable } from 'rxjs';
import { PersonIngredient } from './person-ingredient';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonIngredientService {
  private appUrl = this.urlService.getUrl();
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor( private urlService: UrlService, private http: HttpClient ) { }
  public getPersonIngredients(): Observable<PersonIngredient[]> {
    return this.http.get( this.appUrl + '/ingredients', { withCredentials: true }).pipe( map( resp => resp as PersonIngredient[] ));
  }
}
