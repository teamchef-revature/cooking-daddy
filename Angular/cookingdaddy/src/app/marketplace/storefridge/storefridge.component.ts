import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PersonIngredient } from 'src/app/shared/personIngredient/person-ingredient';
import { MarketServiceService } from '../market-service.service';
import { PersonService } from 'src/app/shared/person/person.service';
import { Person } from 'src/app/shared/person/person';
import { RandomitemService } from 'src/app/shared/randomitem.service';

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

  // tslint:disable-next-line: max-line-length
  constructor(private storeBasketHolder: MarketServiceService, private storePerson: MarketServiceService, private randItemService: RandomitemService) {
    // if (!this.storePerson) {
    //   this.storePerson = this.storePerson.getStorePerson();
    // randItemService.getRandIng();
    this.choice = 1;
  }

  ngOnInit() {
    if (this.storePerson.getStorePerson().ingredients.length === 0) {
    this.storePerson.setNpcIngredients();
    }

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
