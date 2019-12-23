import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PersonService } from 'src/app/shared/person/person.service';
import { Person } from 'src/app/shared/person/person';
import { TradingService } from '../trading.service';
import { Offer } from '../offer';
import { Status } from '../status';
import { PostService } from '../post.service';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-classifieds',
  templateUrl: './classifieds.component.html',
  styleUrls: ['./classifieds.component.css']
})
export class ClassifiedsComponent implements OnInit {
  public allPosts: Post[];
  public allOffers: Offer[];
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
    private posSer: PostService,
    private offSer: OfferService) {
    this.up = this.traSer.unsavedpost;
    this.uo = this.traSer.unsavedoffer;
    this.posSer.getPosts().subscribe(el => this.allPosts = el);
    this.offSer.getOffers().subscribe(el => this.allOffers = el);
    if (!this.up.id) {
      this.traSer.getStatuses().subscribe(el => {
        this.allStats = el;
        const i = el.findIndex(em => em.name === 'open');
        this.up.status = el[i];
      });
    }
    if (!this.uo.id) {
      this.traSer.getStatuses().subscribe(el => {
        this.allStats = el;
        const i = el.findIndex(em => em.name === 'open');
        this.up.status = el[i];
      });
    }
  }

  ngOnInit() {
    this.chooseMain();
  }
  public show(po: Post) {
    this.activePost = po;
    this.choice = 3;
    this.refresh();
  }
  public showOffer(o: Offer) {
    this.posSer.getPost(o.postId).subscribe( resp => {
      this.activeOffer = o;
      this.activePost = resp;
      this.choice = 4;
    });
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
    this.ocollection = this.allOffers.filter(el => el.offerMakerId === this.perSer.getPerson().id);
    this.ocollection.sort((a, b) => a.status.id - b.status.id);
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
