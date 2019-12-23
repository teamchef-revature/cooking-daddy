import { Injectable } from '@angular/core';
import { UrlService } from '../shared/url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../cook/recipe';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CookbookService {
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor( private urlService: UrlService, private http: HttpClient ) { }
  public getCookbook(): Observable<Recipe[]> {
    return this.http.get( this.urlService.getUrl() + '/cookbook', { withCredentials: true }).pipe(
      map( resp => resp as Recipe[] ));
  }
}
