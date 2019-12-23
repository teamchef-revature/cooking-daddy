import { Component, OnInit, Input } from '@angular/core';
import { Offer } from '../offer';
import { PersonService } from 'src/app/shared/person/person.service';

@Component({
  selector: 'app-offerrow',
  templateUrl: './offerrow.component.html',
  styleUrls: ['./offerrow.component.css']
})
export class OfferrowComponent implements OnInit {
  @Input() offer: Offer;
  private owner: {name: string};
  private value: {val: number};

  constructor(private perSer: PersonService) { }

  ngOnInit() {
    this.owner = {name: 'loading'};
    this.perSer.getPersonById(this.offer.offerMakerId).subscribe(resp => this.owner = {name: resp.username});
    this.value = {val: this.ovalue()};
  }
  public ovalue(): number {
    let num = 0;
    this.offer.ingredients.forEach(oi => {
      num += Math.pow(oi.ingredient.quality.id, 3) * oi.quantity;
    });
    return num;
  }

}
