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
import { PostService } from './post.service';
import { OfferIngredient } from './offer-ingredient';
import { OfferService } from './offer.service';

@Injectable({
  providedIn: 'root'
})
export class TradingService {
  private appUrl = this.urlSer.getUrl() + '/market';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  public unsavedpost: Post;
  public unsavedoffer: Offer;
  public allPosts: Post[];

  constructor(
    private urlSer: UrlService,
    private http: HttpClient,
    private randSer: RandomitemService,
    private perSer: PersonService,
    private posSer: PostService,
    private offSer: OfferService) {
    this.unsavedoffer = new Offer();
    this.unsavedoffer.offerMakerId = perSer.getPerson().id;
    this.unsavedpost = new Post();
    this.unsavedpost.personId = perSer.getPerson().id;
    this.unsavedpost.ingredients = [];
    this.posSer.getPosts().subscribe(resp => this.allPosts = resp);
  }

  public putPostInDB(po: Post) {
    if (po.id) {
      console.log('update');
      this.posSer.updatePost(po).subscribe();
    } else {
      console.log('add');
      this.posSer.addPost(po).subscribe(resp => po = resp);
    }
  }

  public putPerIngInPost(perings: PersonIngredient[], post: Post): Post {
    let i: number;
    for (i = 0; i < perings.length; i++) {
      this.addPostIngToSet(perings[i].ingredient, post.ingredients, perings[i].inventory, post.id);
    }
    return post;
  }

  retAllPostIngsToPer(post: Post) {
    post.ingredients.forEach(el => this.retPostIngToPer(el, post));
  }

  retPostIngToPer(poing: PostIngredient, post: Post) {
    const dbinst = (poing.id) ? true : false;
    if (dbinst) {
      this.posSer.getPost(poing.postid).subscribe(
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

  public addPostIngToSet(ing: Ingredient, box: PostIngredient[], change: number, postid: number): boolean {
    const prev = box.findIndex(poing => poing.ingredient.id === ing.id);
    if (prev + 1 > 0) {
      const poing = box[prev];
      const aftTot = poing.quantity + change;
      if (aftTot === 0) {
        box.splice(prev, 1);
      } else {
        if (aftTot > 0) {
          box[prev].quantity = aftTot;
        } else {
          return false;
        }
      }
    } else {
      if (change > 0) {
        const newpoi = new PostIngredient();
        newpoi.ingredient = ing;
        newpoi.postid = postid;
        newpoi.quantity = change;
        box.push(newpoi);
      } else {
        return false;
      }
    }
    return true;
  }

  public putOffInDB(o: Offer) {
    if (o.id) {
      console.log('update');
      this.offSer.updateOffer(o).subscribe();
    } else {
      console.log('add');
      this.offSer.addOffer(o).subscribe(resp => o = resp);
    }
  }

  public putPerIngInOffer(perings: PersonIngredient[], offer: Offer): Offer {
    let i: number;
    for (i = 0; i < perings.length; i++) {
      this.addOfferIngToSet(perings[i].ingredient, offer.ingredients, perings[i].inventory, offer.id);
    }
    return offer;
  }

  retOfferIngToPer(oing: OfferIngredient, offer: Offer) {
    const dbinst = (oing.id) ? true : false;
    if (dbinst) {
      this.offSer.getOffer(oing.offerId).subscribe(
        resp => {
          this.perSer.getPersonById(resp.offerMakerId).subscribe(
            per => this.randSer.addIngToPer(oing.ingredient, per, oing.quantity, dbinst));
          const prev = resp.ingredients.findIndex(oi => oi.ingredient.id === oing.ingredient.id);
          resp.ingredients.splice(prev, 1);
          this.putOffInDB(resp);
        });
    } else {
      const prev = offer.ingredients.findIndex(oi => oi.ingredient.id === oing.ingredient.id);
      if (prev + 1) {
        this.perSer.getPersonById(offer.offerMakerId).subscribe(
          per => this.randSer.addIngToPer(oing.ingredient, per, oing.quantity, dbinst));
        offer.ingredients.splice(prev, 1);
      }
    }
  }

  public addOfferIngToSet(ing: Ingredient, box: OfferIngredient[], change: number, offerid: number): boolean {
    const prev = box.findIndex(poing => poing.ingredient.id === ing.id);
    if (prev + 1 > 0) {
      const poing = box[prev];
      const aftTot = poing.quantity + change;
      if (aftTot === 0) {
        box.splice(prev, 1);
      } else {
        if (aftTot > 0) {
          box[prev].quantity = aftTot;
        } else {
          return false;
        }
      }
    } else {
      if (change > 0) {
        const newoi = new OfferIngredient();
        newoi.ingredient = ing;
        newoi.offerId = offerid;
        newoi.quantity = change;
        box.push(newoi);
      } else {
        return false;
      }
    }
    return true;
  }

  public movePostStatus(po: Post) {
    po.status = po.status.nextStatus;
  }
  public getStatuses(): Observable<Status[]> {
    return this.http.get(this.appUrl + '/status', { withCredentials: true }).pipe(map(resp => resp as Status[]));
  }
}
