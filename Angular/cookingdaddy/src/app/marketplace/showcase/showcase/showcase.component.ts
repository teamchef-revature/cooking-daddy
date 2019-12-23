import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { PersonService } from 'src/app/shared/person/person.service';
import { TradingService } from '../trading.service';
import { PostIngredient } from '../post-ingredient';
import { Offer } from '../offer';
import { MarketServiceService } from '../../market-service.service';
import { PersonIngredient } from 'src/app/shared/personIngredient/person-ingredient';
import { RandomitemService } from 'src/app/shared/randomitem.service';
import { Status } from '../status';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit, OnDestroy {
  @Input() activePost: Post;
  @Input() activeOffer: Offer;
  @Output() done = new EventEmitter<boolean>();
  public refresh: number;
  private value: { val: number };
  private username: { name: string };
  private postIng: PostIngredient[];
  private returnIng: PostIngredient[];
  private allStatuses: Status[];

  constructor(
    private perSer: PersonService,
    private traSer: TradingService,
    private marSer: MarketServiceService,
    private randSer: RandomitemService) { }

  ngOnInit() {
    this.username = this.nameOb(this.activePost.personId);
    this.traSer.getStatuses().subscribe(resp => this.allStatuses = resp);
    if (this.activePost.ingredients) {
      this.postIng = this.activePost.ingredients;
      this.value = { val: this.tvalue() };
    } else {
      this.postIng = [];
      this.value = { val: this.tvalue() };
    }
    this.returnIng = [];
    this.refresh = 1;
  }
  ngOnDestroy(): void {
    this.returnIng.forEach(el => {
      this.traSer.addPostIngToSet(el.ingredient, this.postIng, el.quantity, this.activePost.id);
    });
  }

  private nameOb(personId) {
    const envelope = { name: '' };
    this.perSer.getPersonById(personId).subscribe(resp => {
      envelope.name = resp.username;
    });
    return envelope;
  }

  private isMaker(): boolean {
    return (this.activePost.personId === this.perSer.getPerson().id) && this.isEditable();
  }

  private isEditable(): boolean {
    return (this.activePost.status.name === 'open' || this.activePost.status.name === 'bites');
  }
  private isOpen(): boolean {
    return (this.activePost.status.name === 'open');
  }

  private onIngClick(i: PostIngredient) {
    if (this.isMaker() && this.isOpen()) {
      this.traSer.addPostIngToSet(i.ingredient, this.returnIng, 1, 0);
      this.traSer.addPostIngToSet(i.ingredient, this.postIng, -1, i.postid);
      this.value.val = this.tvalue();
      this.refresh = 0;
      setTimeout(() => {
        this.refresh = 1;
      }, 60);
    }
  }
  private onRetClick(i: PostIngredient) {
    this.traSer.addPostIngToSet(i.ingredient, this.returnIng, -1, 0);
    this.traSer.addPostIngToSet(i.ingredient, this.postIng, 1, i.postid);
    this.value.val = this.tvalue();
    this.refresh = 0;
    setTimeout(() => {
      this.refresh = 1;
    }, 60);
  }
  private tvalue(): number {
    let num = 0;
    this.postIng.forEach(poi => {
      num += Math.pow(poi.ingredient.quality.id, 3) * poi.quantity;
    });
    return num;
  }
  private save() {
    if (this.postIng.length === 0 && this.marSer.getBasket().ingredients.length === 0) {
      window.alert('You must have at least one item up for trade.');
      return;
    }
    this.traSer.putPerIngInPost(this.marSer.getBasket().ingredients, this.activePost);
    this.marSer.getBasket().ingredients.forEach(peri => {
      this.randSer.addIngToPer(peri.ingredient, this.perSer.getPerson(), 0, true);
    });
    this.marSer.getBasket().ingredients = [];
    this.returnIng.forEach(pi => {
      this.randSer.addIngToPer(pi.ingredient, this.perSer.getPerson(), pi.quantity, true);
    });
    this.activePost.ingredients = this.postIng;
    this.traSer.putPostInDB(this.activePost);
    this.traSer.unsavedpost = new Post();
    this.traSer.unsavedpost.ingredients = [];
    this.traSer.unsavedpost.status = this.allStatuses.filter(el => el.name === 'open')[0];
    this.done.emit(true);
  }
  private cancel() {
    this.done.emit(true);
  }
  private delete() {
    this.postIng.forEach(el => {
      this.traSer.addPostIngToSet(el.ingredient, this.postIng, -el.quantity, el.postid);
      this.randSer.addIngToPer(el.ingredient, this.perSer.getPerson(), el.quantity, true);
    });
    this.returnIng.forEach(el => {
      this.traSer.addPostIngToSet(el.ingredient, this.returnIng, -el.quantity, el.postid);
      this.randSer.addIngToPer(el.ingredient, this.perSer.getPerson(), el.quantity, true);
    });
    this.activePost.status = this.allStatuses.filter(el => el.name === 'cancelled')[0];
    if (this.activePost.offers != null) {
      this.activePost.offers.forEach(el => {
        if (el.status.name === 'open' || el.status.name === 'bites') {
          this.perSer.getPersonById(el.offerMakerId).subscribe(per => {
            el.ingredients.forEach(ing => {
              this.randSer.addIngToPer(ing.ingredient, per, ing.quantity, true);
            });
            el.status = this.allStatuses.filter(st => st.name === 'rejected')[0];
            this.traSer.putOffInDB(el);
          });
        }
      });
    }
    this.traSer.putPostInDB(this.activePost);
    this.done.emit(true);
  }
  private showOffer(o: Offer) {
    this.activeOffer = o;
    this.refresh = 0;
    setTimeout(() => {
      this.refresh = 1;
    }, 60);
  }
  private nullAo() {
    this.activeOffer = null;
    this.refresh = 0;
    setTimeout(() => {
      this.refresh = 1;
    }, 60);
  }
  private accept(o: Offer) {
    if (o.status.name === 'open') {
      o.status = this.allStatuses.filter(el => el.name === 'bites')[0];
      this.traSer.putOffInDB(o);
    }
  }
  private reject(o: Offer) {
    this.perSer.getPersonById(o.offerMakerId).subscribe(per => {
      o.ingredients.forEach(ing => {
        this.randSer.addIngToPer(ing.ingredient, per, ing.quantity, true);
      });
      o.status = this.allStatuses.filter(el => el.name === 'rejected')[0];
    });
  }
  private makeOffer() {
    this.activeOffer = this.traSer.unsavedoffer;
    this.activeOffer.postId = this.activePost.id;
    this.activeOffer.status = this.allStatuses.filter(el => el.name === 'open')[0];
    this.refresh = 0;
    setTimeout(() => {
      this.refresh = 1;
    }, 60);
  }
}
