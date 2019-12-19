import { Component, OnInit } from '@angular/core';
import { MarketServiceService } from '../market-service.service';
import { PersonService } from 'src/app/shared/person/person.service';
import { RandomitemService } from 'src/app/shared/randomitem.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  public name = 'trade';
  hack = 'none';

  constructor(private marketService: MarketServiceService, private active: PersonService, private randItemService: RandomitemService) { }

  ngOnInit() {
  }

  trade() {
    [this.marketService.storeBasketHolder.ingredients, this.marketService.basketHolder.ingredients] =
    [this.marketService.basketHolder.ingredients, this.marketService.storeBasketHolder.ingredients];
    // tslint:disable-next-line: prefer-for-of
    for(let i = 0; i < this.marketService.basketHolder.ingredients.length; i++) {
      this.randItemService.addIngToPer(this.marketService.basketHolder.ingredients[i].ingredient, this.active.getPerson(), 1, false);
    }
    // tslint:disable-next-line: prefer-for-of
    for(let i = 0; i < this.marketService.storeBasketHolder.ingredients.length; i++) {
      // tslint:disable-next-line: max-line-length
      this.randItemService.addIngToPer(this.marketService.storeBasketHolder.ingredients[i].ingredient, this.marketService.storePerson, 1, false);
    }
    this.marketService.storeBasketHolder.ingredients = [];
    this.marketService.basketHolder.ingredients = [];
  }
}
