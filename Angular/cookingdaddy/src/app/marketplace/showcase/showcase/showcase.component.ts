import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';
import { PersonService } from 'src/app/shared/person/person.service';
import { TradingService } from '../trading.service';
import { PostIngredient } from '../post-ingredient';
import { Offer } from '../offer';
import { MarketServiceService } from '../../market-service.service';
import { PersonIngredient } from 'src/app/shared/personIngredient/person-ingredient';
import { RandomitemService } from 'src/app/shared/randomitem.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
  @Input() activePost: Post;
  @Input() activeOffer: Offer;
  @Output() done = new EventEmitter<boolean>();
  public refresh: number;
  private value: {val: number};
  private username: {name: string};
  private postIng: PostIngredient[];
  private returnIng: PostIngredient[];

  constructor(
    private perSer: PersonService,
    private traSer: TradingService,
    private marSer: MarketServiceService,
    private randSer: RandomitemService) { }

  ngOnInit() {
    this.username = this.nameOb(this.activePost.personId);
    if (this.activePost.ingredients) {
      this.postIng = this.activePost.ingredients;
      this.value = {val: this.tvalue()};
    } else {
      this.postIng = [];
      this.value = {val: this.tvalue()};
    }
    this.returnIng = [];
    this.refresh = 1;
  }

  nameOb(personId) {
    const envelope = {name: ''};
    this.perSer.getPersonById(personId).subscribe(resp => {
      envelope.name = resp.username;
    });
    return envelope;
  }

  isMaker(): boolean {
    return (this.activePost.personId === this.perSer.getPerson().id) && this.isEditable();
  }

  isEditable(): boolean {
    return (this.activePost.status.name === 'open' || this.activePost.status.name === 'bites');
  }

  onIngClick(i: PostIngredient) {
    if (this.isMaker()) {
      this.traSer.addPostIngToSet(i.ingredient, this.returnIng, 1, 0);
      this.traSer.addPostIngToSet(i.ingredient, this.postIng, -1, i.postid);
      this.tvalue();
      this.refresh = 0;
      setTimeout(() => {
        this.refresh = 1;
      }, 60);
    }
  }
  onRetClick(i: PostIngredient) {
    this.traSer.addPostIngToSet(i.ingredient, this.returnIng, -1, 0);
    this.traSer.addPostIngToSet(i.ingredient, this.postIng, 1, i.postid);
    this.tvalue();
    this.refresh = 0;
    setTimeout(() => {
      this.refresh = 1;
    }, 60);
  }
  tvalue(): number {
    let num = 0;
    this.postIng.forEach(poi => {
      num += Math.pow(poi.ingredient.quality.id, 3) * poi.quantity;
    });
    return num;
  }
  ovalue(o: Offer): number {
    let num = 0;
    o.ingredients.forEach(oi => {
      num += Math.pow(oi.ingredient.quality.id, 3) * oi.quantity;
    });
    return num;
  }
  save() {
    if (this.postIng.length === 0 && this.marSer.getBasket().ingredients.length === 0) {
      window.alert('You must have at least one item up for trade.');
      return;
    }
    this.traSer.putPerIngInPost(this.marSer.getBasket().ingredients, this.activePost);
    this.marSer.getBasket().ingredients = [];
    this.returnIng.forEach( pi => {
      this.randSer.addIngToPer(pi.ingredient, this.perSer.getPerson(), pi.quantity, true);
    });
    this.activePost.ingredients = this.postIng;
    this.traSer.putPostInDB(this.activePost);
    this.traSer.unsavedpost = new Post();
    this.traSer.unsavedpost.ingredients = [];
    this.done.emit(true);
  }
  cancel() {
    this.done.emit(true);
  }
  accept() {
  }
  reject() {
  }
  makeOffer() {
  }
}
