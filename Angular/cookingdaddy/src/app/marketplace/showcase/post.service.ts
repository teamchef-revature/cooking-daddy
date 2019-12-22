import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from 'src/app/shared/url.service';
import { Observable } from 'rxjs';
import { Post } from './post';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private appUrl = this.urlSer.getUrl() + '/market';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private urlSer: UrlService,
    private http: HttpClient) { }

  public getPosts(): Observable<Post[]> {
    return this.http.get(this.appUrl + '/showcase', { withCredentials: true }).pipe(
      map(resp => resp as Post[]));
  }
  public getPost(id: number): Observable<Post> {
    const url: string = this.appUrl + '/showcase/' + id;
    return this.http.get(url, { withCredentials: true }).pipe(
      map(resp => resp as Post));
  }
  public updatePost(po: Post) {
    const body = JSON.stringify(po);
    if (po.id) {
      return this.http.put(this.appUrl + '/showcase/' + po.id, body, {
        headers: this.headers, withCredentials: true
      }).pipe(map(resp => resp as Post));
    }
  }
  public addPost(po: Post) {
    const body = JSON.stringify(po);
    return this.http.post(this.appUrl + '/showcase', body, {
      headers: this.headers, withCredentials: true
    }).pipe(map(resp => resp as Post));
  }
}
