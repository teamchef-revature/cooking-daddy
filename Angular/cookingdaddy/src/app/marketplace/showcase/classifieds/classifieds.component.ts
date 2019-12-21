import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PersonService } from 'src/app/shared/person/person.service';
import { Person } from 'src/app/shared/person/person';
import { TradingService } from '../trading.service';

@Component({
  selector: 'app-classifieds',
  templateUrl: './classifieds.component.html',
  styleUrls: ['./classifieds.component.css']
})
export class ClassifiedsComponent implements OnInit {
  public allPosts: Post[];
  public collection: Post[];
  public choice: number;
  public activePost: Post;

  constructor(private perSer: PersonService, private traSer: TradingService) {
    this.allPosts = traSer.allPosts;
  }

  ngOnInit() {
    this.traSer.getPosts().subscribe(resp => this.allPosts = resp);
    this.choice = 1;
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
  public hasBites(po: Post): boolean {
    let i: number;
    if (!po.offers) {
      return false;
    }
    for (i = 0; i < po.offers.length; i++) {
      if (po.offers[i].status.id === 1 ) {
        return true;
      }
    }
    return false;
  }
}
