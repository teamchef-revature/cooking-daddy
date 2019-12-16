import { Component, OnInit, Input, DoCheck, OnChanges } from '@angular/core';
import { MarketServiceService } from '../market-service.service';
import { Person } from 'src/app/shared/person/person';
import { PersonIngredient } from 'src/app/shared/personIngredient/person-ingredient';
import { PersonEquipment } from 'src/app/shared/equipment/person-equipment';
import { PersonService } from 'src/app/shared/person/person.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit, OnChanges {
  @Input() holder: Person;
  @Input() hack: string;
  choice: number;
  activePerson: Person;
  blankPerson: Person;
  constructor(private basketHolder: MarketServiceService, private active: PersonService) {
    if (!this.holder) {
      this.choice = 1;
    }
  }
  ngOnInit() {
    this.choice = 1;
    this.holder = this.basketHolder.getBasket();
    this.activePerson = this.active.getPerson();
    this.blankPerson = new Person();

  }
  ngOnChanges() {
    this.ngOnInit();
  }
  chooseIng() {
    this.choice = 1;
  }
  chooseEqu() {
    this.choice = 2;
  }
  onIngClick(ping: PersonIngredient) {
    if (ping.inventory === 1) {
      const ingredients: PersonIngredient[] = this.holder.ingredients.filter(element => element !== ping);
      this.holder.ingredients = ingredients;
      this.basketHolder.restoreItem(ping, this.activePerson);

    } else {
      ping.inventory--;
      console.log(this.activePerson);
      this.basketHolder.restoreItem(ping, this.activePerson);
    }
  }
}


