import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/person/person';
import { MarketServiceService } from '../market-service.service';
import { PersonService } from 'src/app/shared/person/person.service';
import { PersonIngredient } from 'src/app/shared/personIngredient/person-ingredient';

@Component({
  selector: 'app-storebasket',
  templateUrl: './storebasket.component.html',
  styleUrls: ['./storebasket.component.css']
})
export class StorebasketComponent implements OnInit {
  storeHolder: Person;
  npcPerson: Person;
  choice: number;
  constructor(private storeBasketHolder: MarketServiceService, private storePerson: MarketServiceService) {
    this.choice = 1;
  }

  ngOnInit() {
    this.choice = 1;
    this.storeHolder = this.storeBasketHolder.getStoreBasket();
    this.npcPerson = this.storePerson.getStorePerson();
  }

  chooseIng() {
    this.choice = 1;
  }
  chooseEqu() {
    this.choice = 2;
  }

  onIngClick(ping: PersonIngredient) {
    if (ping.inventory === 1) {
      const ingredients: PersonIngredient[] = this.storeHolder.ingredients.filter(element => element !== ping);
      this.storeHolder.ingredients = ingredients;
      this.storeBasketHolder.restoreItem(ping, this.npcPerson);

    } else {
      ping.inventory--;
      console.log(this.npcPerson);
      this.storeBasketHolder.restoreItem(ping, this.npcPerson);
    }
  }
  updateBasket() {
    this.choice = (this.choice === 1) ? 2 : 1;
    setTimeout(() => {
      this.choice = (this.choice === 1) ? 2 : 1;
    }, 100);
  }

}
