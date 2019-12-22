import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PersonService } from 'src/app/shared/person/person.service';
import { Person } from 'src/app/shared/person/person';
import { TradingService } from '../trading.service';
import { Offer } from '../offer';
import { Status } from '../status';
import { PostService } from '../post.service';

@Component({
  selector: 'app-classifieds',
  templateUrl: './classifieds.component.html',
  styleUrls: ['./classifieds.component.css']
})
export class ClassifiedsComponent implements OnInit {
  public allPosts: Post[];
  public collection: Post[];
  public ocollection: Offer[];
  public choice: number;
  public activePost: Post;
  public activeOffer: Offer;
  public up: Post;
  public uo: Offer;
  private allStats: Status[];

  constructor(
    private perSer: PersonService,
    private traSer: TradingService,
    private posSer: PostService) {
    this.up = this.traSer.unsavedpost;
    this.uo = this.traSer.unsavedoffer;
    this.allPosts = this.traSer.allPosts;
    if (!this.up.id) {
      this.traSer.getStatuses().subscribe(el => {
        this.allStats = el;
        const i = el.findIndex(em => em.name === 'open');
        this.up.status = el[i];
      });
    }
  }

  ngOnInit() {
    console.log(this.allPosts);
    this.chooseMain();
  }
  public owner(po: Post): string {
    let own = new Person();
    this.perSer.getPersonById(po.personId).subscribe(resp => own = resp);
    return own.username;
  }
  public tvalue(po: Post): number {
    let num = 0;
    po.ingredients.forEach(poi => {
      num += Math.pow(poi.ingredient.quality.id, 3) * poi.quantity;
    });
    return num;
  }
  public ovalue(o: Offer): number {
    let num = 0;
    o.ingredients.forEach(oi => {
      num += Math.pow(oi.ingredient.quality.id, 3) * oi.quantity;
    });
    return num;
  }
  public postFor(o: Offer) {
    const num = Number.parseInt(o.offerMakerId, 10);
    return this.posSer.getPost(num).subscribe(resp => resp as Post);
  }
  public show(po: Post) {
    this.activePost = po;
    this.choice = 3;
    this.refresh();
  }
  public showOffer(o: Offer) {
    this.activeOffer = o;
    this.choice = 4;
  }
  public chooseMain() {
    if (!this.allPosts) {
      setTimeout(() => this.chooseMain(), 50);
    } else {
      this.collection = this.allPosts.filter(el => (el.status.name === 'open') || (el.status.name === 'bites'));
      this.choice = 1;
      this.refresh();
    }
  }
  public myPosts() {
    this.collection = this.allPosts.filter(el => (el.personId === this.perSer.getPerson().id));
    this.collection.sort((a, b) => a.status.id - b.status.id);
    this.choice = 1;
    this.refresh();
  }
  public myOffers() {
    this.choice = 2;
    this.refresh();
  }
  refresh() {
    const i = this.choice;
    this.choice = 0;
    setTimeout(() => {
      this.choice = i;
    }, 60);
  }
}
