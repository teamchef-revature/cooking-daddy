import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PersonIngredient } from 'src/app/shared/personIngredient/person-ingredient';
import { MarketServiceService } from '../market-service.service';
import { PersonService } from 'src/app/shared/person/person.service';
import { Person } from 'src/app/shared/person/person';

@Component({
  selector: 'app-storefridge',
  templateUrl: './storefridge.component.html',
  styleUrls: ['./storefridge.component.css']
})
export class StorefridgeComponent implements OnInit {
  @Output() add = new EventEmitter();
  personIngredients: PersonIngredient[];
  choice: number;
  holder: Person;

  constructor(private storeBasketHolder: MarketServiceService, private storePerson: MarketServiceService) {
    // if (!this.storePerson) {
    //   this.storePerson = this.storePerson.getStorePerson();
      this.choice = 1;
  }

  ngOnInit() {
    this.holder = this.storePerson.getStorePerson();
    this.personIngredients = this.holder.ingredients.filter(el => el.inventory > 0);

  }

  chooseIng() {
    this.choice = 1;
  }
  chooseEqu() {
    this.choice = 2;
  }
  onClick(ping: PersonIngredient) {
    if (ping.inventory === 0) {
    } else {
      ping.inventory--;
      this.holder.ingredients = this.personIngredients;
      const bping = new PersonIngredient();
      bping.ingredient = ping.ingredient;
      bping.inventory = 1;
      this.storeBasketHolder.addStoreItem(bping);
      this.add.emit();
    }
  }

}
