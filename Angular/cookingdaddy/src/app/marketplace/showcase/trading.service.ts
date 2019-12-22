import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';
import { map } from 'rxjs/operators';
import { Status } from './status';
import { Ingredient } from 'src/app/shared/ingredient/ingredient';
import { PostIngredient } from './post-ingredient';
import { PersonIngredient } from 'src/app/shared/personIngredient/person-ingredient';
import { RandomitemService } from 'src/app/shared/randomitem.service';
import { PersonService } from 'src/app/shared/person/person.service';
import { Offer } from './offer';

@Injectable({
  providedIn: 'root'
})
export class TradingService {
  private appUrl = this.urlSer.getUrl() + '/market';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  public unsavedpost: Post;
  public unsavedoffer: Offer;

  constructor(
    private urlSer: UrlService,
    private http: HttpClient,
    private randSer: RandomitemService,
    private perSer: PersonService, ) {
    this.unsavedoffer = new Offer();
    this.unsavedoffer.offerMakerId = perSer.getPerson().id;
    this.unsavedpost = new Post();
    this.unsavedpost.personId = perSer.getPerson().id;
    this.unsavedpost.ingredients = [];
  }

  public putPostInDB(po: Post) {
    po.ingredients.forEach(el => {
      el.id.postId = el.postid;
      el.id.ingredientId = el.ingredient.id;
    });
    if (po.id) {
      this.updatePost(po);
    } else {
      this.addPost(po);
    }
  }

  public putPerIngInPost(perings: PersonIngredient[], post: Post): Post {
    let i: number;
    for (i = 0; i < perings.length; i++) {
      this.addIngToPost(perings[i].ingredient, post, perings[i].inventory);
    }
    return post;
  }

  retAllPostIngsToPer(post: Post) {
    post.ingredients.forEach(el => this.retPostIngToPer(el, post));
  }

  retPostIngToPer(poing: PostIngredient, post: Post) {
    const dbinst = (poing.id.postId) ? true : false;
    if (dbinst) {
      this.getPost(poing.postid).subscribe(
        resp => {
          this.perSer.getPersonById(resp.personId).subscribe(
            per => this.randSer.addIngToPer(poing.ingredient, per, poing.quantity, dbinst));
          const prev = resp.ingredients.findIndex(poi => poi.ingredient.id === poing.ingredient.id);
          resp.ingredients.splice(prev, 1);
          this.putPostInDB(resp);
        });
    } else {
      const prev = post.ingredients.findIndex(poi => poi.ingredient.id === poing.ingredient.id);
      if (prev + 1) {
        this.perSer.getPersonById(post.personId).subscribe(
          per => this.randSer.addIngToPer(poing.ingredient, per, poing.quantity, dbinst));
        post.ingredients.splice(prev, 1);
      }
    }
  }

  public addIngToPost(ing: Ingredient, post: Post, change: number): boolean {
    const prev = post.ingredients.findIndex(poing => poing.ingredient.id === ing.id);
    if (prev + 1 > 0) {
      const poing = post.ingredients[prev];
      const aftTot = poing.quantity + change;
      if (aftTot === 0) {
        post.ingredients.splice(prev, 1);
      } else {
        if (aftTot > 0) {
          post.ingredients[prev].quantity = aftTot;
        } else {
          return false;
        }
      }
    } else {
      if (change > 0) {
        const newpoi = new PostIngredient();
        newpoi.ingredient = ing;
        newpoi.postid = post.id;
        newpoi.quantity = change;
        post.ingredients.push(newpoi);
      } else {
        return false;
      }
    }
    return true;
  }

  public movePostStatus(po: Post) {
    po.status = po.status.nextStatus;
  }

  public getPosts(): Observable<Post[]> {
    return this.http.get(this.appUrl + '/showcase', { withCredentials: true }).pipe(map(resp => resp as Post[]));
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
  public getOffers(): Observable<Offer[]> {
    return this.http.get(this.appUrl + '/offer', { withCredentials: true }).pipe(map(resp => resp as Offer[]));
  }
  public getOffer(id: number): Observable<Offer> {
    const url: string = this.appUrl + '/offer/' + id;
    return this.http.get(url, { withCredentials: true }).pipe(
      map(resp => resp as Offer));
  }
  public updateOffer(o: Offer) {
    const body = JSON.stringify(o);
    if (o.id) {
      return this.http.put(this.appUrl + '/offer/' + o.id, body, {
        headers: this.headers, withCredentials: true
      }).pipe(map(resp => resp as Offer));
    }
  }
  public addOffer(o: Offer) {
    const body = JSON.stringify(o);
    return this.http.post(this.appUrl + '/offer', body, {
      headers: this.headers, withCredentials: true
    }).pipe(map(resp => resp as Offer));
  }
  public getStatuses(): Observable<Status[]> {
    return this.http.get(this.appUrl + '/status', { withCredentials: true }).pipe(map(resp => resp as Status[]));
  }
}
