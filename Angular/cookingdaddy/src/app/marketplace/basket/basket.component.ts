import { Component, OnInit, Input, DoCheck } from '@angular/core';
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
export class BasketComponent implements OnInit {
  @Input() holder: Person;
  choice: number;
  activePerson: Person;
  constructor(private basketHolder: MarketServiceService, active: PersonService) {
    if (!this.holder) {
      this.holder = basketHolder.getBasket();
      this.choice = 1;
      this.activePerson = active.getPerson();
    }
  }
  ngOnInit() {
    this.choice = 1;
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


