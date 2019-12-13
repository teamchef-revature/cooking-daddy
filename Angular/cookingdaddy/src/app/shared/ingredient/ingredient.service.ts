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
    return this.http.get( this.appUrl + '/ingredient', { withCredentials: true }).pipe( map( resp => resp as Ingredient[] ));
  }
  public getQualities(): Observable<Quality[]> {
    return this.http.get( this.appUrl + '/quality', { withCredentials: true }).pipe( map( resp => resp as Quality[] ));
  }
  public getFlavors(): Observable<Flavor[]> {
    return this.http.get( this.appUrl + '/flavor', { withCredentials: true }).pipe( map( resp => resp as Flavor[] ));
  }
  public getCategories(): Observable<Category[]> {
    return this.http.get( this.appUrl + '/category', { withCredentials: true }).pipe( map( resp => resp as Category[] ));
  }
  public getIngredient( id: number ) {
    const url = this.appUrl + '/ingredient/' + id;
    return this.http.get( url, { withCredentials: true }).pipe( map( resp => resp as Ingredient ));
  }
  public getCategory( id: number ) {
    const url = this.appUrl + '/category/' + id;
    return this.http.get( url, { withCredentials: true }).pipe( map( resp => resp as Category ));
  }
  public getQuality( id: number ) {
    const url = this.appUrl + '/quality/' + id;
    return this.http.get( url, { withCredentials: true }).pipe( map( resp => resp as Quality ));
  }
  public getFlavor( id: number ) {
    const url = this.appUrl + '/flavor/' + id;
    return this.http.get( url, { withCredentials: true }).pipe( map( resp => resp as Flavor ));
  }
  public addIngredient( ingredient: Ingredient ) {
    const body = JSON.stringify( ingredient );
    return this.http.post( this.appUrl + '/ingredient', body, { headers: this.headers, withCredentials: true }).pipe(
      map( resp => resp as Ingredient )
    );
  }
  public addCategory( category: Category ) {
    const body = JSON.stringify( category );
    return this.http.post( this.appUrl + '/category', body, { headers: this.headers, withCredentials: true }).pipe(
      map( resp => resp as Category )
    );
  }
  public addQuality( quality: Quality ) {
    const body = JSON.stringify( quality );
    return this.http.post( this.appUrl + '/quality', body, { headers: this.headers, withCredentials: true }).pipe(
      map( resp => resp as Quality )
    );
  }
  public addFlavor( flavor: Flavor ) {
    const body = JSON.stringify( flavor );
    return this.http.post( this.appUrl + '/flavor', body, { headers: this.headers, withCredentials: true }).pipe(
      map( resp => resp as Flavor )
    );
  }
  public updateIngredient( ingredient: Ingredient ): Observable<Ingredient> {
    const url = this.appUrl + '/ingredients/' + ingredient.id;
    const body = JSON.stringify( ingredient );
    return this.http.put(url, body, { headers: this.headers, withCredentials: true }).pipe(
      map( resp => resp as Ingredient )
    );
  }
}
