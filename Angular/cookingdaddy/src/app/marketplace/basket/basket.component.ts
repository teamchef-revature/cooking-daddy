import { Component, OnInit, Input } from '@angular/core';
import { MarketServiceService } from '../market-service.service';
import { Person } from 'src/app/shared/person/person';
import { PersonIngredient } from 'src/app/shared/personIngredient/person-ingredient';
import { PersonEquipment } from 'src/app/shared/equipment/person-equipment';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  @Input() holder: Person;
  choice: number;
  personIngredients: PersonIngredient[];
  personEquipments: PersonEquipment[];
  constructor(private basketHolder: MarketServiceService) {
    if (!this.holder) {
      this.holder = basketHolder.getBasket();
      this.choice = 1;
    }
  }
  ngOnInit() {
    this.personIngredients = this.holder.ingredients;
    this.personEquipments = this.holder.equipments;

  }
  chooseIng() {
    this.choice = 1;
  }
  chooseEqu() {
    this.choice = 2;
  }
  refresh() {
    this.holder = this.basketHolder.getBasket();
    this.personIngredients = this.holder.ingredients;
    this.personEquipments = this.holder.equipments;
  }
  onClick(ping: PersonIngredient) {
    if (ping.inventory === 1) {
      this.basketHolder.getBasket().ingredients = this.personIngredients.filter(element => !ping);
    } else {
      ping.inventory--;
      this.basketHolder.getBasket().ingredients = this.personIngredients;
    }
    this.refresh();

  }
}


