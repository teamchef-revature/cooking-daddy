import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';
import { PersonService } from 'src/app/shared/person/person.service';
import { TradingService } from '../trading.service';
import { PostIngredient } from '../post-ingredient';
import { Person } from 'src/app/shared/person/person';
import { Status } from '../status';
import { Offer } from '../offer';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
  @Input() activePost: Post;
  @Output() done = new EventEmitter<boolean>();
  private refresh: number;
  private value: {val: number};
  private username: {name: string};

  constructor(
    private perSer: PersonService,
    private traSer: TradingService,
    private tr2Ser: TradingService) { }

  ngOnInit() {
    this.value = {val: this.tvalue()};
    this.username = this.nameOb(this.activePost.personId);
  }

  nameOb(personId) {
    const envelope = {name: ''};
    this.perSer.getPersonById(personId).subscribe(resp => {
      envelope.name = resp.username;
    });
    return envelope;
  }

  isMaker(): boolean {
    return (this.activePost.personId === this.perSer.getPerson().id);
  }

  onIngClick(i: PostIngredient) {
    if (this.isMaker()) {
    }
  }
  tvalue(): number {
    let num = 0;
    this.activePost.ingredients.forEach(poi => {
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
    this.done.emit(true);
  }
  cancel() {
  }
  accept() {
  }
  reject() {
  }
}
