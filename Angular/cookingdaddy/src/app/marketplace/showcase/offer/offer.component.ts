import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Offer } from '../offer';
import { Status } from '../status';
import { OfferIngredient } from '../offer-ingredient';
import { PersonService } from 'src/app/shared/person/person.service';
import { TradingService } from '../trading.service';
import { RandomitemService } from 'src/app/shared/randomitem.service';
import { MarketServiceService } from '../../market-service.service';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit, OnDestroy {
  @Input() activeOffer: Offer;
  @Input() activePost: Post;
  @Output() over = new EventEmitter<boolean>();
  public refresh: number;
  private value: { val: number };
  private username: { name: string };
  private offerIng: OfferIngredient[];
  private returnIng: OfferIngredient[];
  private allStatuses: Status[];

  constructor(
    private perSer: PersonService,
    private traSer: TradingService,
    private marSer: MarketServiceService,
    private randSer: RandomitemService,
    private posSer: PostService) { }

  ngOnInit() {
    this.username = this.nameOb(this.activeOffer.offerMakerId);
    this.traSer.getStatuses().subscribe(resp => this.allStatuses = resp);
    if (this.activeOffer.ingredients) {
      this.offerIng = this.activeOffer.ingredients;
      this.value = { val: this.ovalue() };
    } else {
      this.offerIng = [];
      this.value = { val: this.ovalue() };
    }
    this.returnIng = [];
    this.refresh = 1;
  }
  ngOnDestroy() {
    this.returnIng.forEach(el => {
      this.traSer.addOfferIngToSet(el.ingredient, this.offerIng, el.quantity, this.activeOffer.id);
    });
  }
  private nameOb(personId) {
    const envelope = { name: '' };
    this.perSer.getPersonById(personId).subscribe(resp => {
      envelope.name = resp.username;
    });
    return envelope;
  }
  private ovalue(): number {
    let num = 0;
    this.offerIng.forEach(oi => {
      num += Math.pow(oi.ingredient.quality.id, 3) * oi.quantity;
    });
    return num;
  }
  private isMaker(): boolean {
    return (this.activeOffer.offerMakerId === this.perSer.getPerson().id) && this.isEditable();
  }

  private isEditable(): boolean {
    return (this.activeOffer.status.name === 'open' || this.activeOffer.status.name === 'bites');
  }
  private isOpen(): boolean {
    return (this.activeOffer.status.name === 'open');
  }
  private onIngClick(i: OfferIngredient) {
    if (this.isMaker() && this.isOpen()) {
      this.traSer.addOfferIngToSet(i.ingredient, this.returnIng, 1, 0);
      this.traSer.addOfferIngToSet(i.ingredient, this.offerIng, -1, i.offerId);
      this.value.val = this.ovalue();
      this.refresh = 0;
      setTimeout(() => {
        this.refresh = 1;
      }, 60);
    }
  }
  private onRetClick(i: OfferIngredient) {
    this.traSer.addOfferIngToSet(i.ingredient, this.returnIng, -1, 0);
    this.traSer.addOfferIngToSet(i.ingredient, this.offerIng, 1, i.offerId);
    this.value.val = this.ovalue();
    this.refresh = 0;
    setTimeout(() => {
      this.refresh = 1;
    }, 60);
  }
  private save() {
    if (this.offerIng.length === 0 && this.marSer.getBasket().ingredients.length === 0) {
      window.alert('You must have at least one item up for trade.');
      return;
    }
    this.traSer.putPerIngInOffer(this.marSer.getBasket().ingredients, this.activeOffer);
    this.marSer.getBasket().ingredients.forEach(peri => {
      this.randSer.addIngToPer(peri.ingredient, this.perSer.getPerson(), 0, true);
    });
    this.marSer.getBasket().ingredients = [];
    this.returnIng.forEach(pi => {
      this.randSer.addIngToPer(pi.ingredient, this.perSer.getPerson(), pi.quantity, true);
    });
    this.activeOffer.ingredients = this.offerIng;
    this.traSer.putOffInDB(this.activeOffer);
    this.traSer.unsavedoffer = new Offer();
    this.traSer.unsavedoffer.ingredients = [];
    this.traSer.unsavedoffer.status = this.allStatuses.filter(el => el.name === 'open')[0];
    this.activePost.status = this.allStatuses.filter(el => el.name === 'bites')[0];
    this.traSer.putPostInDB(this.activePost);
    this.over.emit(true);
  }
  private cancel() {
    this.over.emit(true);
  }
  private delete() {
    this.offerIng.forEach(el => {
      this.traSer.addOfferIngToSet(el.ingredient, this.offerIng, -el.quantity, el.offerId);
      this.randSer.addIngToPer(el.ingredient, this.perSer.getPerson(), el.quantity, true);
    });
    this.returnIng.forEach(el => {
      this.traSer.addOfferIngToSet(el.ingredient, this.returnIng, -el.quantity, el.offerId);
      this.randSer.addIngToPer(el.ingredient, this.perSer.getPerson(), el.quantity, true);
    });
    this.activeOffer.status = this.allStatuses.filter(el => el.name === 'cancelled')[0];
    if (!this.activePost.offers.filter(el => (el.status.name === 'cancelled') || (el.status.name === 'bites')).length) {
      this.activePost.status = this.allStatuses.filter(el => (el.name === 'open'))[0];
    }
    this.traSer.putOffInDB(this.activeOffer);
    this.over.emit(true);
  }
  private accept() {
    this.activePost.status = this.allStatuses.filter(el => el.name === 'accepted')[0];
    this.activeOffer.status = this.allStatuses.filter(el => el.name === 'accepted')[0];
    this.perSer.getPersonById(this.activePost.personId).subscribe(per => {
      this.offerIng.forEach(el => {
        this.randSer.addIngToPer(el.ingredient, per, el.quantity, true);
      });
      this.activePost.ingredients.forEach(el => {
        this.randSer.addIngToPer(el.ingredient, this.perSer.getPerson(), el.quantity, true);
      });
    });
    this.activePost.offers.filter(el => (el.status.name === 'open') || (el.status.name === 'open')).forEach(
      o => {
        o.status = this.allStatuses.filter(el => el.name === 'rejected')[0];
        this.perSer.getPersonById(o.offerMakerId).subscribe( per => {
          o.ingredients.forEach(i => {
            this.randSer.addIngToPer(i.ingredient, per, i.quantity, true);
          });
        });
      });
  }
}
