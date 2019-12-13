import { Injectable } from '@angular/core';
import { UrlService } from '../url.service';
import { Observable } from 'rxjs';
import { Category } from '../ingredient/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private appUrl = this.urlService.getUrl() + '/admin';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json'});

  constructor( private urlService: UrlService, private http: HttpClient ) { }

  public getCategories(): Observable<Category[]> {
    console.log('does this execute');
    return this.http.get( this.appUrl + '/category', { withCredentials: true }).pipe( map( resp => resp as Category[] ));
  }
  public addCategory( category: Category ) {
    const body = JSON.stringify( category );
    return this.http.post( this.appUrl + '/category', body, { headers: this.headers, withCredentials: true}).pipe(
      map( resp => resp as Category )
    );
  }
}
