import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ingredient } from './ingredient';
import { Category } from './category';
import { Quality } from './quality';
import { Flavor } from './flavor';
import { UrlService } from '../url.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private appUrl = this.urlService.getUrl();
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor( private urlService: UrlService, private http: HttpClient ) { }

  public getIngredients(): Observable<Ingredient[]> {
    return this.http.get( this.appUrl + 'ingredients', { withCredentials: true }).pipe( map( resp => resp as Ingredient[] ));
  }
  public getCategories(): Observable<Category[]> {
    return this.http.get( this.appUrl + 'categories', { withCredentials: true }).pipe( map( resp => resp as Category[] ));
  }
  public getQualities(): Observable<Quality[]> {
    return this.http.get( this.appUrl + 'qualities', { withCredentials: true }).pipe( map( resp => resp as Quality[] ));
  }
  public getFlavors(): Observable<Flavor[]> {
    return this.http.get( this.appUrl + 'flavors', { withCredentials: true }).pipe( map( resp => resp as Flavor[] ));
  }
  public getIngredient( id: number ) {
    const url = this.appUrl + 'ingredients/' + id;
    return this.http.get( url, { withCredentials: true }).pipe( map( resp => resp as Ingredient ));
  }
  public getCategory( id: number ) {
    const url = this.appUrl + 'categories/' + id;
    return this.http.get( url, { withCredentials: true }).pipe( map( resp => resp as Category ));
  }
  public getQuality( id: number ) {
    const url = this.appUrl + 'qualities/' + id;
    return this.http.get( url, { withCredentials: true }).pipe( map( resp => resp as Quality ));
  }
  public getFlavor( id: number ) {
    const url = this.appUrl + 'flavors/' + id;
    return this.http.get( url, { withCredentials: true }).pipe( map( resp => resp as Flavor ));
  }
  public addIngredient( ingredient: Ingredient ) {
    const body = JSON.stringify( ingredient );
    return this.http.post( this.appUrl + 'ingredients', body, { headers: this.headers, withCredentials: true }).pipe(
      map( resp => resp as Ingredient )
    );
  }
  public addCategory( category: Category ) {
    const body = JSON.stringify( category );
    return this.http.post( this.appUrl + 'categories', body, { headers: this.headers, withCredentials: true }).pipe(
      map( resp => resp as Category )
    );
  }
  public addQuality( quality: Quality ) {
    const body = JSON.stringify( quality );
    return this.http.post( this.appUrl + 'qualities', body, { headers: this.headers, withCredentials: true }).pipe(
      map( resp => resp as Quality )
    );
  }
  public addFlavor( flavor: Flavor ) {
    const body = JSON.stringify( flavor );
    return this.http.post( this.appUrl + 'flavors', body, { headers: this.headers, withCredentials: true }).pipe(
      map( resp => resp as Flavor )
    );
  }
  public updateIngredient( ingredient: Ingredient ): Observable<Ingredient> {
    const url = this.appUrl + 'ingredients/' + ingredient.id;
    const body = JSON.stringify( ingredient );
    return this.http.put(url, body, { headers: this.headers, withCredentials: true }).pipe(
      map( resp => resp as Ingredient )
    );
  }
  public deleteIngredient( ingredient: Ingredient ): Observable<void> {
    const url = this.appUrl + 'ingredients/' + ingredient.id;
    const body = JSON.stringify( ingredient );
    return this.http.delete( url, { headers: this.headers, withCredentials: true }).pipe(
      map( resp => null )
    );
  }
  public deleteCategory( category: Category ): Observable<void> {
    const url = this.appUrl + 'categories/' + category.id;
    const body = JSON.stringify( category );
    return this.http.delete( url, { headers: this.headers, withCredentials: true }).pipe(
      map( resp => null )
    );
  }
  public deleteQuality( quality: Quality ): Observable<void> {
    const url = this.appUrl + 'qualities/' + quality.id;
    const body = JSON.stringify( quality );
    return this.http.delete( url, { headers: this.headers, withCredentials: true }).pipe(
      map( resp => null )
    );
  }
  public deleteFlavor( flavor: Flavor ): Observable<void> {
    const url = this.appUrl + 'flavors/' + flavor.id;
    const body = JSON.stringify( flavor );
    return this.http.delete( url, { headers: this.headers, withCredentials: true }).pipe(
      map( resp => null )
    );
  }
}
