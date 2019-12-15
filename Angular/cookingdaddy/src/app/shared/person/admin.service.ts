import { Injectable } from '@angular/core';
import { UrlService } from '../url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Flavor } from '../ingredient/flavor';
import { Category } from '../ingredient/category';
import { Quality } from '../ingredient/quality';
import { Ingredient } from '../ingredient/ingredient';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private appUrl = this.urlService.getUrl() + '/admin';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json'});

  constructor( private urlService: UrlService, private http: HttpClient ) { }

  public getCategories(): Observable<Category[]> {
    return this.http.get( this.appUrl + '/category', { withCredentials: true }).pipe( map( resp => resp as Category[] ));
  }
  public getFlavors(): Observable<Flavor[]> {
    return this.http.get( this.appUrl + '/flavor', { withCredentials: true }).pipe( map( resp => resp as Flavor[]));
  }
  public getQualities(): Observable<Quality[]> {
    return this.http.get( this.appUrl + '/quality', { withCredentials: true }).pipe( map( resp => resp as Quality[]));
  }
  public getIngredients(): Observable<Ingredient[]> {
    return this.http.get( this.appUrl + '/ingredient', { withCredentials: true }).pipe( map( resp => resp as Ingredient[]));
  }
  public addCategory( category: Category ) {
    const body = JSON.stringify( category );
    return this.http.post( this.appUrl + '/category', body, { headers: this.headers, withCredentials: true}).pipe(
      map( resp => resp as Category )
    );
  }
}
